import Link from 'next/link';
import Image from 'next/image';
import { APP_VERSION, SITE_NAME, SITE_TAGLINE, SITE_PHONE, SITE_EMAIL } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#191919', borderTop: '1px solid #2a2a2a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + tagline */}
          <div>
            <div className="mb-3">
              <Image
                src="https://assets.cdn.filesafe.space/aneyGa6BKOlFDEDucy56/media/68a391f0a01f8e4ce88cdb8d.png"
                alt={SITE_NAME}
                width={160}
                height={44}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#9a9a9a', fontSize: '0.875rem', fontFamily: "'Roboto', sans-serif", lineHeight: 1.6 }}>
              {SITE_TAGLINE}. Helping Arizona families buy, sell, and invest in real estate since 2016.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" style={{ color: '#9a9a9a' }} className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" style={{ color: '#9a9a9a' }} className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" style={{ color: '#9a9a9a' }} className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#f3f0ec',
                fontWeight: 600,
                fontSize: '0.95rem',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/properties', label: 'Active Listings' },
                { href: '/about', label: 'Meet the Team' },
                { href: '/contact', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: '#9a9a9a', fontSize: '0.875rem', fontFamily: "'Roboto', sans-serif" }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#f3f0ec',
                fontWeight: 600,
                fontSize: '0.95rem',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-2" style={{ color: '#9a9a9a', fontSize: '0.875rem', fontFamily: "'Roboto', sans-serif" }}>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#c96a3e' }}>
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <a href={`tel:${SITE_PHONE}`} className="hover:opacity-80 transition-opacity">{SITE_PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#c96a3e' }}>
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
                </svg>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:opacity-80 transition-opacity">{SITE_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" style={{ color: '#c96a3e' }}>
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742zM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd" />
                </svg>
                <span>Scottsdale, AZ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: '1px solid #2a2a2a', marginTop: '2rem', paddingTop: '1.5rem' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p style={{ color: '#5a5a5a', fontSize: '0.8rem', fontFamily: "'Roboto', sans-serif" }}>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <p style={{ color: '#5a5a5a', fontSize: '0.8rem', fontFamily: "'Roboto', sans-serif" }}>
            v{APP_VERSION}
          </p>
        </div>
      </div>
    </footer>
  );
}
