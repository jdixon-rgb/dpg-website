import type { Metadata } from 'next';
import Link from 'next/link';
import { sampleTeamMembers } from '@/lib/sample-data';

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the Dixon Premier Group real estate team — Arizona experts dedicated to delivering exceptional results for buyers and sellers.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: '#0a3d62', backgroundImage: 'linear-gradient(135deg, #0a3d62 0%, #191919 60%)' }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Dixon Premier Group
          </p>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#f3f0ec',
              marginBottom: '1.25rem',
            }}
          >
            Meet the Team
          </h1>
          <p
            style={{
              color: '#9a9a9a',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            We&apos;re a tight-knit team of Arizona real estate professionals committed to delivering an exceptional experience for every client — whether you&apos;re buying, selling, or investing.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            style={{
              color: '#c96a3e',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Our Mission
          </p>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: '#191919',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}
          >
            Exceptional Service. Proven Results. Arizona Roots.
          </h2>
          <p
            style={{
              color: '#5a5a5a',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            Dixon Premier Group was founded on the belief that buying or selling a home should be a confident, well-supported experience — not a stressful one. Since 2016, we&apos;ve helped hundreds of Arizona families navigate the market with clarity and care. Our approach combines deep local knowledge, transparent communication, and a relentless commitment to our clients&apos; goals.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ backgroundColor: '#191919' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#f3f0ec',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            Our Agents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleTeamMembers.map((member) => (
              <div
                key={member.id}
                style={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                {/* Photo placeholder */}
                <div
                  style={{
                    height: '220px',
                    backgroundColor: '#0a3d62',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '96px',
                      height: '96px',
                      borderRadius: '50%',
                      backgroundColor: '#191919',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #c96a3e',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '2.5rem',
                      color: '#f3f0ec',
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: '1.5rem' }}>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#f3f0ec',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      color: '#c96a3e',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {member.title}
                  </p>
                  {member.bio && (
                    <p
                      style={{
                        color: '#9a9a9a',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                        marginBottom: '1rem',
                      }}
                    >
                      {member.bio}
                    </p>
                  )}
                  <div className="flex flex-col gap-1">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        style={{ color: '#37ca37', fontSize: '0.85rem', fontFamily: "'Roboto', sans-serif" }}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        style={{ color: '#9a9a9a', fontSize: '0.85rem', fontFamily: "'Roboto', sans-serif" }}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Testimonials
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                color: '#191919',
              }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="elfsight-app-923b703c-7a50-42dd-bed2-81c9b508beb2" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#f3f0ec' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: '#191919',
              }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', body: 'We do what we say, every time. No surprises — just honest guidance.' },
              { title: 'Expertise', body: '15+ years of Arizona market knowledge translating into smarter decisions.' },
              { title: 'Responsiveness', body: 'We answer calls, respond to messages, and keep you informed at every step.' },
              { title: 'Results', body: "Our success is measured by yours — your goals are our goals." },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e1db',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  borderTop: '3px solid #c96a3e',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#191919',
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: '#5a5a5a', fontFamily: "'Roboto', sans-serif", fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              style={{
                backgroundColor: '#c96a3e',
                color: 'white',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                padding: '0.85rem 2rem',
                borderRadius: '0.5rem',
                display: 'inline-block',
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
