import Image from 'next/image';
import Link from 'next/link';
import { Listing, formatPrice, formatBaths } from '@/lib/sample-data';

interface PropertyCardProps {
  listing: Listing;
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
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '2px 8px',
        borderRadius: '9999px',
        textTransform: 'uppercase',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {s.label}
    </span>
  );
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  const heroPhoto = listing.photos?.[0];

  return (
    <div
      style={{
        backgroundColor: '#1e1e1e',
        border: '1px solid #2a2a2a',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="hover:shadow-2xl transition-shadow"
    >
      {/* Photo */}
      <div className="relative w-full" style={{ height: '220px', backgroundColor: '#111' }}>
        {heroPhoto ? (
          <Image
            src={heroPhoto.url}
            alt={listing.address}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: '#5a5a5a' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {/* Status badge overlay */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={listing.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Price */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#f3f0ec',
            marginBottom: '0.25rem',
          }}
        >
          {formatPrice(listing.price)}
        </div>

        {/* Address */}
        <div style={{ color: '#9a9a9a', fontSize: '0.875rem', fontFamily: "'Roboto', sans-serif", marginBottom: '0.75rem' }}>
          {listing.address}, {listing.city}, {listing.state} {listing.zip}
        </div>

        {/* Beds/Baths/Sqft */}
        <div className="flex items-center gap-4" style={{ color: '#c3bfb9', fontSize: '0.875rem', fontFamily: "'Roboto', sans-serif", marginBottom: '1rem' }}>
          <span className="flex items-center gap-1">
            {/* Bed icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: '#c96a3e' }}>
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103z" />
            </svg>
            {listing.beds} bd
          </span>
          <span className="flex items-center gap-1">
            {/* Bath icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: '#c96a3e' }}>
              <path fillRule="evenodd" d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM12 12.75a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75ZM5.25 9V6.375a2.625 2.625 0 1 1 5.25 0V9H5.25ZM2.25 9h14.25a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5Z" clipRule="evenodd" />
            </svg>
            {formatBaths(listing.baths)} ba
          </span>
          <span className="flex items-center gap-1">
            {/* Sqft icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ color: '#c96a3e' }}>
              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5V9A.75.75 0 0 0 12 9V7.5h1.5a.75.75 0 0 0 0-1.5H9ZM8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
            </svg>
            {listing.sqft.toLocaleString()} sqft
          </span>
        </div>

        {/* View Details button */}
        <div className="mt-auto">
          <Link
            href={`/properties/${listing.slug}`}
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#c96a3e',
              color: 'white',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.875rem',
              padding: '0.6rem 1rem',
              borderRadius: '0.5rem',
            }}
            className="hover:opacity-90 transition-opacity"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
