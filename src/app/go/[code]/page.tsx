import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ code: string }>;
}

export default async function QRRedirectPage({ params }: PageProps) {
  const { code } = await params;

  // Attempt DB lookup
  if (process.env.DATABASE_URL) {
    try {
      const { db } = await import('@/db/index');
      const { qrRedirects } = await import('@/db/schema');
      const { eq } = await import('drizzle-orm');

      const rows = await db.select().from(qrRedirects).where(eq(qrRedirects.code, code)).limit(1);

      if (rows.length > 0) {
        const row = rows[0];
        redirect(row.targetUrl);
      }

      // No match in DB → not found
      return <LinkNotFound code={code} />;
    } catch (err) {
      console.error('[go] DB error:', err);
      // Fall through to not-found UI if DB fails
      return <LinkNotFound code={code} />;
    }
  }

  // No DB configured: show not found
  return <LinkNotFound code={code} />;
}

function LinkNotFound({ code }: { code: string }) {
  return (
    <section style={{ backgroundColor: '#191919', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
        <div style={{ color: '#3a3a3a', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '64px', height: '64px', margin: '0 auto' }}>
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd" />
          </svg>
        </div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '1.75rem',
            color: '#f3f0ec',
            marginBottom: '0.75rem',
          }}
        >
          Link Not Found
        </h1>
        <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", marginBottom: '0.5rem' }}>
          The QR code or short link <code style={{ color: '#c96a3e' }}>/{code}</code> was not found.
        </p>
        <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", marginBottom: '2rem' }}>
          It may have expired or the URL may be incorrect.
        </p>
        <Link
          href="/"
          style={{
            backgroundColor: '#c96a3e',
            color: 'white',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            padding: '0.75rem 1.75rem',
            borderRadius: '0.5rem',
            display: 'inline-block',
          }}
          className="hover:opacity-90 transition-opacity"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
}
