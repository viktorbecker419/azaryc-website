'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Bandcamp', href: 'https://ricocasazza.bandcamp.com', external: true },
  { label: 'Discography', href: '/discography' },
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
      </div>
    </nav>
  );
}
