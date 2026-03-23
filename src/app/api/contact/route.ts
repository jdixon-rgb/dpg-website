import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  listingId?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, phone, message, listingId } = body;

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ success: false, message: 'Please provide a valid name.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ success: false, message: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json({ success: false, message: 'Message must be at least 10 characters.' }, { status: 400 });
  }

  // Attempt DB insert
  if (!process.env.DATABASE_URL) {
    // DB not configured — log and return a soft success so the UX works during development
    console.log('[contact] DB not configured. Logging submission:', { name, email, phone, message, listingId });
    return NextResponse.json({ success: true, message: 'Message received.' });
  }

  try {
    const { db } = await import('@/db/index');
    const { contactSubmissions } = await import('@/db/schema');

    await db.insert(contactSubmissions).values({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      message: message.trim(),
      listingId: listingId ? parseInt(listingId, 10) : null,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[contact] DB error:', err);
    return NextResponse.json(
      { success: false, message: 'Database unavailable. Please try again later or call us directly.' },
      { status: 503 },
    );
  }
}
