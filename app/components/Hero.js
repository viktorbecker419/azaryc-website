import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <Image
          src="/azaryc-logo.png"
          alt="AZARYC"
          width={1818}
          height={324}
          className={styles.logoImg}
          priority
        />
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
        </div>
      </div>
    </section>
  );
}
