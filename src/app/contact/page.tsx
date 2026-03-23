'use client';

import { useState } from 'react';
import { SITE_PHONE, SITE_EMAIL } from '@/lib/constants';
import { sampleListings } from '@/lib/sample-data';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      listingId: (form.elements.namedItem('listingId') as HTMLSelectElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  const inputStyle = {
    backgroundColor: '#1e1e1e',
    border: '1px solid #2a2a2a',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    color: '#f3f0ec',
    fontFamily: "'Roboto', sans-serif",
    fontSize: '0.9rem',
    width: '100%',
    outline: 'none',
  };

  return (
    <>
      {/* Header */}
      <section
        style={{ backgroundColor: '#0a3d62', backgroundImage: 'linear-gradient(135deg, #0a3d62 0%, #191919 60%)' }}
        className="py-16"
      >
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
            Get In Touch
          </p>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#f3f0ec',
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", marginTop: '0.5rem' }}>
            We&apos;d love to hear from you. Reach out with any questions.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#191919' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#f3f0ec',
                  marginBottom: '1.5rem',
                }}
              >
                Send Us a Message
              </h2>

              {status === 'success' ? (
                <div
                  style={{
                    backgroundColor: '#0a2e0a',
                    border: '1px solid #37ca37',
                    borderRadius: '0.75rem',
                    padding: '2rem',
                    textAlign: 'center',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 mx-auto mb-3" style={{ color: '#37ca37' }}>
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                  <p style={{ color: '#37ca37', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '1.1rem' }}>
                    Message Sent!
                  </p>
                  <p style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", marginTop: '0.5rem' }}>
                    Thanks for reaching out. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: '1rem', color: '#c96a3e', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                        Full Name *
                      </label>
                      <input name="name" required placeholder="John Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input name="email" type="email" required placeholder="john@example.com" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input name="phone" placeholder="(480) 555-0000" style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                      Property of Interest (optional)
                    </label>
                    <select name="listingId" style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select a property...</option>
                      {sampleListings.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.address}, {l.city} — {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(l.price)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      style={{ ...inputStyle, resize: 'vertical' as const }}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      style={{
                        backgroundColor: '#2e0a0a',
                        border: '1px solid #c96a3e',
                        borderRadius: '0.5rem',
                        padding: '0.75rem 1rem',
                        color: '#f3a07a',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '0.875rem',
                      }}
                    >
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      backgroundColor: status === 'loading' ? '#7a4a2a' : '#c96a3e',
                      color: 'white',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '0.85rem 2rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#f3f0ec',
                  marginBottom: '1.5rem',
                }}
              >
                Office Information
              </h2>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: SITE_PHONE,
                    href: `tel:${SITE_PHONE}`,
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: SITE_EMAIL,
                    href: `mailto:${SITE_EMAIL}`,
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742zM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd" />
                      </svg>
                    ),
                    label: 'Office',
                    value: 'Scottsdale, AZ',
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '0.5rem',
                        backgroundColor: '#1e1e1e',
                        border: '1px solid #2a2a2a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#c96a3e',
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div style={{ color: '#5a5a5a', fontFamily: "'Roboto', sans-serif", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} style={{ color: '#f3f0ec', fontFamily: "'Roboto', sans-serif", fontSize: '1rem' }} className="hover:opacity-80 transition-opacity">
                          {value}
                        </a>
                      ) : (
                        <span style={{ color: '#f3f0ec', fontFamily: "'Roboto', sans-serif", fontSize: '1rem' }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  marginTop: '2rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#f3f0ec',
                    marginBottom: '0.75rem',
                  }}
                >
                  Office Hours
                </h3>
                {[
                  { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
                  { days: 'Saturday', hours: '9:00 AM – 5:00 PM' },
                  { days: 'Sunday', hours: 'By Appointment' },
                ].map(({ days, hours }) => (
                  <div key={days} className="flex justify-between" style={{ marginBottom: '0.4rem' }}>
                    <span style={{ color: '#9a9a9a', fontFamily: "'Roboto', sans-serif", fontSize: '0.875rem' }}>{days}</span>
                    <span style={{ color: '#f3f0ec', fontFamily: "'Roboto', sans-serif", fontSize: '0.875rem' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
