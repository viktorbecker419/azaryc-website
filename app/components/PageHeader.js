'use client';

import { motion } from 'framer-motion';
import styles from './PageHeader.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function PageHeader({ eyebrow, title }) {
  return (
    <header className={styles.header}>
      <div className="container">
        {eyebrow && (
          <motion.p
            className={styles.eyebrow}
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          custom={eyebrow ? 0.15 : 0}
          variants={fadeUp}
        >
          {title}
        </motion.h1>
      </div>
    </header>
  );
}
