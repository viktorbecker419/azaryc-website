import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from './shows.module.css';

export const metadata = {
  title: 'Shows',
  description:
    'Upcoming live shows and DJ sets by AZARYC. Electronic music performances across Europe and worldwide. Booking: azarycmusic@gmail.com',
  alternates: { canonical: 'https://azaryc.com/shows' },
};

export default function ShowsPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Live" title="Shows" />

      <section className={`container ${styles.empty}`}>
        <p className={styles.emptyText}>No upcoming shows at the moment.</p>
        <p className={styles.emptySubtext}>
          For booking enquiries, get in touch at{' '}
          <a href="mailto:azarycmusic@gmail.com">azarycmusic@gmail.com</a>
        </p>
      </section>

      <Footer />
    </>
  );
}
