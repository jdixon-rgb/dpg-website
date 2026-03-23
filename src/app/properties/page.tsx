'use client';

import { useState } from 'react';
import PropertyCard from '@/components/properties/PropertyCard';
import { sampleListings } from '@/lib/sample-data';
import type { Metadata } from 'next';

// Note: metadata cannot be used with 'use client'. Handled via layout or static if needed.

const STATUS_TABS = [
  { key: 'all', label: 'All Listings' },
  { key: 'active', label: 'Active' },
  { key: 'pending', label: 'Pending' },
  { key: 'sold', label: 'Sold' },
] as const;

type StatusKey = (typeof STATUS_TABS)[number]['key'];

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState<StatusKey>('all');

  const filtered = activeFilter === 'all'
    ? sampleListings
    : sampleListings.filter((l) => l.status === activeFilter);

  return (
    <>
      {/* Header */}
      <section style={{ backgroundColor: '#0a3d62', backgroundImage: 'linear-gradient(135deg, #0a3d62 0%, #191919 60%)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            style={{
              color: '#37ca37',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Dixon Premier Group
          </p>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#f3f0ec',
            }}
          >
            Active Listings
          </h1>
          <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", marginTop: '0.5rem' }}>
            Browse our current portfolio of Arizona properties
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ backgroundColor: '#191919' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {STATUS_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  backgroundColor: activeFilter === key ? '#c96a3e' : 'transparent',
                  borderColor: activeFilter === key ? '#c96a3e' : '#3a3a3a',
                  color: activeFilter === key ? 'white' : '#9a9a9a',
                }}
              >
                {label}
                <span
                  style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.75rem',
                    opacity: 0.8,
                  }}
                >
                  (
                  {key === 'all'
                    ? sampleListings.length
                    : sampleListings.filter((l) => l.status === key).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: '#5a5a5a', fontFamily: "'Roboto', sans-serif" }}>
              No listings found for this filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
