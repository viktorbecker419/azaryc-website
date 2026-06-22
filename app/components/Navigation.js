'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Navigation.module.css';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Bandcamp', href: 'https://ricocasazza.bandcamp.com', external: true },
  { label: 'Discography', href: 'https://www.discogs.com/artist/824607-Rico-Casazza', external: true },
  { label: 'Film Music', href: '/filmmusic' },
  { label: 'Shows', href: '/shows' },
  { label: 'Get in Touch', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          AZARYC
        </Link>

        <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
          {links.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className={styles.right}>
          <ThemeToggle />
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
