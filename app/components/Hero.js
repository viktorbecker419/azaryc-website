import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>DJ · Producer · Electro · IDM · Minimal · Techno</p>
        <h1 className={styles.title}>AZARYC</h1>
        <p className={styles.subtitle}>Cinematic · Post-Rave · Soul</p>

        <div className={styles.cta}>
          <a
            href="https://ricocasazza.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Listen on Bandcamp
          </a>
          <Link href="/shows" className={styles.buttonSecondary}>
            View shows →
          </Link>
        </div>
      </div>
    </section>
  );
}
