import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'Shows — AZARYC',
};

const shows = [
  { date: '[Date]', title: '[Venue / Festival name]', meta: '[City, Country]' },
  { date: '[Date]', title: '[Venue / Festival name]', meta: '[City, Country]' },
  { date: '[Date]', title: '[Venue / Festival name]', meta: '[City, Country]' },
  { date: '[Date]', title: '[Venue / Festival name]', meta: '[City, Country]' },
];

export default function ShowsPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Live" title="Shows" />

      <section className={`container ${styles.list}`}>
        {shows.map((show, i) => (
          <div className={styles.listItem} key={i}>
            <span className={styles.listDate}>{show.date}</span>
            <span className={styles.listTitle}>{show.title}</span>
            <span className={styles.listMeta}>{show.meta}</span>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
