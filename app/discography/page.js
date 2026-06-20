import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'Discography — AZARYC',
};

const releases = [
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
  { title: '[Release title]', year: '[Year]', format: '[Digital / Vinyl]' },
];

export default function DiscographyPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Releases" title="Discography" />

      <section className={`container ${styles.grid}`}>
        {releases.map((release, i) => (
          <div className={styles.card} key={i}>
            <p className={styles.cardTitle}>{release.title}</p>
            <p className={styles.cardMeta}>
              {release.year} · {release.format}
            </p>
            <p className={styles.cardText}>
              [Short note — label, EP/LP, or one line about the release.]
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
