import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getListingBySlug, getTeamMemberById, formatPrice, formatBaths, sampleListings } from '@/lib/sample-data';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sampleListings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) return { title: 'Property Not Found' };
  return {
    title: `${listing.address}, ${listing.city} — ${formatPrice(listing.price)}`,
    description: listing.description ?? undefined,
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    active: { bg: '#37ca37', text: '#fff', label: 'Active' },
    pending: { bg: '#e8a317', text: '#fff', label: 'Pending' },
    sold: { bg: '#6b7280', text: '#fff', label: 'Sold' },
  };
  const s = styles[status] ?? styles.active;
  return (
    <span
      style={{
        backgroundColor: s.bg,
        color: s.text,
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '3px 12px',
        borderRadius: '9999px',
        textTransform: 'uppercase' as const,
        fontFamily: "'Poppins', sans-serif",
        display: 'inline-block',
      }}
    >
      {s.label}
    </span>
  );
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const agent = listing.listingAgentId ? getTeamMemberById(listing.listingAgentId) : null;
  const heroPhoto = listing.photos[0];

  return (
    <>
      {/* Hero Photo */}
      <div className="relative w-full" style={{ height: '480px', backgroundColor: '#111' }}>
        {heroPhoto && (
          <Image
            src={heroPhoto.url}
            alt={listing.address}
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(25,25,25,0.85) 100%)' }} />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="max-w-7xl mx-auto">
            <StatusBadge status={listing.status} />
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: '#f3f0ec',
                marginTop: '0.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {listing.address}
            </h1>
            <p style={{ color: '#c3bfb9', fontFamily: "'Roboto', sans-serif", textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
              {listing.city}, {listing.state} {listing.zip}
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#191919' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Photo Gallery */}
              {listing.photos.length > 1 && (
                <div className="mb-10">
                  <h2
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#f3f0ec',
                      marginBottom: '1rem',
                    }}
                  >
                    Photo Gallery
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {listing.photos.map((photo) => (
                      <div key={photo.id} className="relative" style={{ paddingBottom: '66.67%', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#111' }}>
                        <Image
                          src={photo.url}
                          alt={photo.label ?? listing.address}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        {photo.label && (
                          <div
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                              padding: '0.5rem 0.75rem',
                              color: '#f3f0ec',
                              fontSize: '0.75rem',
                              fontFamily: "'Roboto', sans-serif",
                            }}
                          >
                            {photo.label}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {listing.description && (
                <div className="mb-10">
                  <h2
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#f3f0ec',
                      marginBottom: '0.75rem',
                    }}
                  >
                    About This Home
                  </h2>
                  <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", lineHeight: 1.8, fontSize: '0.95rem' }}>
                    {listing.description}
                  </p>
                </div>
              )}

              {/* Map */}
              <div>
                <h2
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#f3f0ec',
                    marginBottom: '0.75rem',
                  }}
                >
                  Location
                </h2>
                <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #2a2a2a' }}>
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(`${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`)}&output=embed`}
                    width="100%"
                    height="280"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${listing.address}`}
                  />
                </div>
                <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.75rem', color: '#5a5a5a', marginTop: '0.5rem' }}>
                  {listing.address}, {listing.city}, {listing.state} {listing.zip}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Property Details */}
              <div
                style={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: '2rem',
                    color: '#f3f0ec',
                    marginBottom: '0.25rem',
                  }}
                >
                  {formatPrice(listing.price)}
                </div>
                <StatusBadge status={listing.status} />

                <div style={{ borderTop: '1px solid #2a2a2a', marginTop: '1rem', paddingTop: '1rem' }}>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Beds', value: String(listing.beds) },
                      { label: 'Baths', value: formatBaths(listing.baths) },
                      { label: 'Sq Ft', value: listing.sqft.toLocaleString() },
                      ...(listing.lotSize ? [{ label: 'Lot (acres)', value: listing.lotSize }] : []),
                      ...(listing.yearBuilt ? [{ label: 'Year Built', value: String(listing.yearBuilt) }] : []),
                      ...(listing.mlsNumber ? [{ label: 'MLS #', value: listing.mlsNumber }] : []),
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div style={{ color: '#5a5a5a', fontSize: '0.7rem', fontFamily: "'Poppins', sans-serif", fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                          {label}
                        </div>
                        <div style={{ color: '#f3f0ec', fontSize: '0.95rem', fontFamily: "'Roboto', sans-serif", fontWeight: 500, marginTop: '0.1rem' }}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Agent */}
              <div
                style={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#f3f0ec',
                    marginBottom: '1rem',
                  }}
                >
                  Contact Agent
                </h3>

                {/* Agent info */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#0a3d62',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#37ca37',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {agent ? agent.name.charAt(0) : 'D'}
                  </div>
                  <div>
                    <div style={{ color: '#f3f0ec', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>
                      {agent?.name ?? 'Dixon Premier Group'}
                    </div>
                    <div style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem' }}>
                      {agent?.title ?? 'Real Estate Professional'}
                    </div>
                    {agent?.phone && (
                      <a href={`tel:${agent.phone}`} style={{ color: '#37ca37', fontSize: '0.8rem', fontFamily: "'Roboto', sans-serif" }}>
                        {agent.phone}
                      </a>
                    )}
                  </div>
                </div>

                {/* Mini contact form */}
                <ContactForm listingId={listing.id} address={listing.address} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactForm({ listingId, address }: { listingId: number; address: string }) {
  return (
    <form action="/api/contact" method="POST" className="flex flex-col gap-3">
      <input type="hidden" name="listingId" value={listingId} />
      <input type="hidden" name="propertyAddress" value={address} />
      <input
        name="name"
        placeholder="Your Name"
        required
        style={{
          backgroundColor: '#111',
          border: '1px solid #2a2a2a',
          borderRadius: '0.4rem',
          padding: '0.6rem 0.75rem',
          color: '#f3f0ec',
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.85rem',
          width: '100%',
        }}
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        style={{
          backgroundColor: '#111',
          border: '1px solid #2a2a2a',
          borderRadius: '0.4rem',
          padding: '0.6rem 0.75rem',
          color: '#f3f0ec',
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.85rem',
          width: '100%',
        }}
      />
      <input
        name="phone"
        placeholder="Phone (optional)"
        style={{
          backgroundColor: '#111',
          border: '1px solid #2a2a2a',
          borderRadius: '0.4rem',
          padding: '0.6rem 0.75rem',
          color: '#f3f0ec',
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.85rem',
          width: '100%',
        }}
      />
      <textarea
        name="message"
        placeholder="I'm interested in this property..."
        rows={3}
        style={{
          backgroundColor: '#111',
          border: '1px solid #2a2a2a',
          borderRadius: '0.4rem',
          padding: '0.6rem 0.75rem',
          color: '#f3f0ec',
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.85rem',
          width: '100%',
          resize: 'vertical' as const,
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#c96a3e',
          color: 'white',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '0.875rem',
          padding: '0.65rem 1rem',
          borderRadius: '0.4rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Send Message
      </button>
    </form>
  );
}
