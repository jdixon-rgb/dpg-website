'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SITE_NAME } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: '#191919', borderBottom: '1px solid #2a2a2a' }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://assets.cdn.filesafe.space/aneyGa6BKOlFDEDucy56/media/68a391f0a01f8e4ce88cdb8d.png"
              alt={SITE_NAME}
              width={160}
              height={44}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/properties', label: 'Properties' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ color: '#f3f0ec', fontFamily: "'Roboto', sans-serif", fontSize: '0.9rem' }}
                className="hover:opacity-80 transition-opacity"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                backgroundColor: '#c96a3e',
                color: 'white',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
              className="px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Schedule a Call
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: '#f3f0ec' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#111111', borderTop: '1px solid #2a2a2a' }} className="md:hidden">
          <div className="flex flex-col px-4 py-4 gap-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/properties', label: 'Properties' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ color: '#f3f0ec', fontFamily: "'Roboto', sans-serif" }}
                className="py-1 hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                backgroundColor: '#c96a3e',
                color: 'white',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
              className="px-4 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
