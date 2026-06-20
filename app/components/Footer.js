import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>AZARYC</p>
          <p className={styles.tagline}>Cinematic · Post-Rave · Soul</p>
        </div>

        <ul className={styles.links}>
          <li><Link href="/about">About</Link></li>
          <li>
            <a href="https://ricocasazza.bandcamp.com" target="_blank" rel="noopener noreferrer">
              Bandcamp
            </a>
          </li>
          <li><Link href="/discography">Discography</Link></li>
          <li><Link href="/filmmusic">Film Music</Link></li>
          <li><Link href="/shows">Shows</Link></li>
          <li><Link href="/contact">Get in Touch</Link></li>
        </ul>

        <div className={styles.social}>
          <a href="https://www.instagram.com/ricocasazza_music" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://soundcloud.com/ricocasazza" target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>
        </div>
      </div>

      <p className={styles.bottom}>© {new Date().getFullYear()} AZARYC. All rights reserved.</p>
    </footer>
  );
}
