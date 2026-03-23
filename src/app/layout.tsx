import type { Metadata } from 'next';
import { Poppins, Manrope, Roboto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Dixon Premier Group — Arizona real estate experts specializing in luxury homes, investment properties, and residential sales throughout the Phoenix metro area.',
  keywords: ['Arizona real estate', 'Phoenix homes for sale', 'Scottsdale luxury homes', 'Dixon Premier Group'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} ${roboto.variable}`}
    >
      <body style={{ backgroundColor: '#191919', color: '#f3f0ec' }} className="flex flex-col min-h-screen">
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
