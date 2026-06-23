import Image from 'next/image';
import styles from './Footer.module.css';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ricocasazza_music',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'SoundCloud',
    href: 'https://soundcloud.com/ricocasazza',
    icon: (
      <svg width="20" height="18" viewBox="0 0 24 16" fill="currentColor">
        <path d="M0 11.5c0 1.38 1.12 2.5 2.5 2.5H18a4 4 0 0 0 .94-7.88A6 6 0 0 0 7.5 4a6 6 0 0 0-.5.03A4.5 4.5 0 0 0 0 11.5z"/>
      </svg>
    ),
  },
  {
    label: 'Discogs',
    href: 'https://www.discogs.com/artist/824607-Rico-Casazza',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3" fill="var(--color-dark)"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/0S3n3dNP88Wa9k9HI9EgLf',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115.293.18.387.563.207.856zm1.223-2.72a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166a.78.78 0 1 1-.453-1.49c3.633-1.102 8.147-.568 11.233 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.791c3.532-1.072 9.404-.865 13.115 1.337a.937.937 0 0 1-.955 1.613z"/>
      </svg>
    ),
  },
  {
    label: 'Patreon',
    href: 'https://www.patreon.com/ricocasazza',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="14.5" cy="9.5" r="6.5"/>
        <rect x="3" y="2" width="3.5" height="20"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@azaryc',
    icon: (
      <svg width="20" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image src="/azaryc-logo.png" alt="AZARYC" width={110} height={28} className={styles.logoImg} />
          <p className={styles.tagline}>Cinematic · Post-Rave · Soul</p>
        </div>

        <div className={styles.social}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      <p className={styles.bottom}>© {new Date().getFullYear()} AZARYC. All rights reserved.</p>
    </footer>
  );
}
