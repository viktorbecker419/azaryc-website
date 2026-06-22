import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import JsonLd from './components/JsonLd';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://azaryc.com'),
  title: {
    default: 'AZARYC — Cinematic · Post-Rave · Soul',
    template: '%s — AZARYC',
  },
  description:
    'AZARYC is the alias of Rico Casazza — DJ, electronic music producer, film composer and sound designer. Electro, IDM, Minimal and Techno with cinematic depth. Based in Prague.',
  keywords: [
    'AZARYC', 'Rico Casazza', 'DJ', 'electronic music producer', 'electro',
    'IDM', 'minimal techno', 'techno', 'Prague DJ', 'underground electronic music',
    'film composer', 'cinematic electronic music', 'Bandcamp', 'Discogs',
    'Boiler Room', 'Fabric London', 'post-rave',
  ],
  authors: [{ name: 'AZARYC' }],
  creator: 'AZARYC',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://azaryc.com',
    siteName: 'AZARYC',
    title: 'AZARYC — Cinematic · Post-Rave · Soul',
    description:
      'DJ, electronic music producer, film composer and sound designer. Electro, IDM, Minimal and Techno with cinematic depth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZARYC — Cinematic · Post-Rave · Soul',
    description:
      'DJ, electronic music producer, film composer and sound designer. Electro, IDM, Minimal and Techno with cinematic depth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://azaryc.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('azaryc-theme');if(t)document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
