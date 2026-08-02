'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h1 className="sr-only">
          AZARYC — Cinematic, Post-Rave, Soul: DJ, Electronic Music Producer &amp; Film Composer
        </h1>
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
          <Image
            src="/azaryc-logo.png"
            alt="AZARYC"
            width={1818}
            height={324}
            className={styles.logoImg}
            priority
          />
        </motion.div>
        <motion.p
          className={styles.subtitle}
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
        >
          Cinematic · Post-Rave · Soul
        </motion.p>

        <motion.div
          className={styles.cta}
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          <a
            href="https://ricocasazza.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Listen on Bandcamp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
