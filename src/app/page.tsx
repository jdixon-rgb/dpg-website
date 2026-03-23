import Link from 'next/link';
import Image from 'next/image';
import PropertyCard from '@/components/properties/PropertyCard';
import { getActiveListings } from '@/lib/sample-data';

export default function HomePage() {
  const featuredListings = getActiveListings().slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: '#0a3d62' }}
        className="relative overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="https://assets.cdn.filesafe.space/aneyGa6BKOlFDEDucy56/media/68a35bee375130c5146b1fd6.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,61,98,0.85) 0%, rgba(25,25,25,0.75) 100%)',
            zIndex: 1,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36" style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-3xl">
            <p
              style={{
                color: '#37ca37',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Arizona Real Estate Experts
            </p>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#f3f0ec',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Find Your Dream Home in Arizona
            </h1>
            <p
              style={{
                color: '#c3bfb9',
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              Dixon Premier Group brings deep local expertise, white-glove service, and a proven track record to every transaction — from first-time buyers to seasoned investors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/properties"
                style={{
                  backgroundColor: '#c96a3e',
                  color: 'white',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '0.5rem',
                }}
                className="hover:opacity-90 transition-opacity"
              >
                View Properties
              </Link>
              <Link
                href="/contact"
                style={{
                  border: '2px solid #f3f0ec',
                  color: '#f3f0ec',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '0.5rem',
                }}
                className="hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* decorative accent */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '35%',
            background: 'linear-gradient(to right, transparent, rgba(201,106,62,0.08))',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      </section>

      {/* ── Featured Listings ────────────────────────────────── */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                style={{
                  color: '#c96a3e',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}
              >
                Available Now
              </p>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#191919',
                }}
              >
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties"
              style={{
                color: '#c96a3e',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
              className="hidden sm:block hover:opacity-80 transition-opacity"
            >
              View All Listings &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/properties"
              style={{
                backgroundColor: '#c96a3e',
                color: 'white',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                display: 'inline-block',
              }}
              className="hover:opacity-90 transition-opacity"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────── */}
      <section style={{ backgroundColor: '#191919' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative" style={{ height: '400px', borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: '#111' }}>
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
                alt="Arizona luxury home"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  backgroundColor: '#c96a3e',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '0.5rem',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                15+ Years in Arizona
              </div>
            </div>

            {/* Text */}
            <div>
              <p
                style={{
                  color: '#37ca37',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                About Us
              </p>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  color: '#f3f0ec',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                Your Trusted Arizona Real Estate Team
              </h2>
              <p
                style={{
                  color: '#9a9a9a',
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginBottom: '1rem',
                }}
              >
                Founded by Lisa Dixon in 2016, Dixon Premier Group has grown into one of the Phoenix metro&apos;s most respected boutique brokerages. We combine neighborhood-level knowledge with a technology-forward approach to deliver results that exceed expectations.
              </p>
              <p
                style={{
                  color: '#9a9a9a',
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                Whether you&apos;re buying your first home, selling a luxury estate, or building an investment portfolio, our team brings the expertise and dedication to make every transaction seamless.
              </p>
              <Link
                href="/about"
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
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose DPG ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              style={{
                color: '#c96a3e',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              Why Dixon Premier Group
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#191919',
              }}
            >
              The DPG Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742zM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Local Expertise',
                body: "Born and raised in Arizona, our team knows every neighborhood — from Scottsdale's luxury corridors to Chandler's family-friendly communities. We don't just sell homes here; we live here.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.432l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.941a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 0 0-5.45 5.174.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.482-4.251-1.632a.75.75 0 0 1-.432-.968Z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Proven Results',
                body: 'Our listings average 98% of asking price and sell in under 21 days. Our buyers win competitive offers through market intelligence and precise negotiation — not luck.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ),
                title: 'White Glove Service',
                body: 'From first showing to closing day, we handle every detail with care. Our clients receive dedicated attention, proactive communication, and the confidence of working with true professionals.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e1db',
                  borderRadius: '0.75rem',
                  padding: '2rem',
                }}
                className="hover:shadow-lg transition-shadow"
              >
                <div style={{ color: '#c96a3e', marginBottom: '1rem' }}>{icon}</div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: '#191919',
                    marginBottom: '0.75rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: '#5a5a5a', fontFamily: "'Roboto', sans-serif", fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Feed ───────────────────────────────────── */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              style={{
                color: '#c96a3e',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              Follow Along
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#191919',
              }}
            >
              @DixonPremierGroup
            </h2>
          </div>
          <div className="elfsight-app-2d5cfd3e-6783-4f81-b448-bad6465da78f" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section style={{ backgroundColor: '#191919', borderTop: '2px solid #c96a3e' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              color: '#f3f0ec',
              marginBottom: '1rem',
            }}
          >
            Ready to Buy or Sell?
          </h2>
          <p
            style={{
              color: '#9a9a9a',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '540px',
              margin: '0 auto 2.5rem',
            }}
          >
            Our team is ready to guide you through every step of your Arizona real estate journey. Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: '#c96a3e',
              color: 'white',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              padding: '1rem 2.5rem',
              borderRadius: '0.5rem',
              display: 'inline-block',
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
