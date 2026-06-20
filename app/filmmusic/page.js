import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'Film Music — AZARYC',
};

export default function FilmMusicPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Composition" title="Film Music" />

      <section className={`container ${styles.content}`}>
        <p className={styles.paragraph}>
          [PLACEHOLDER — a short paragraph on your film scoring work. Keep it brief here;
          this page's job is to point people to the full portfolio.]
        </p>
        <a
          href="https://federicocasazza.com/filmmusic"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          View the full portfolio →
        </a>
      </section>

      <Footer />
    </>
  );
}
