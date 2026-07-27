import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import { pastShows } from './pastShows';
import styles from './shows.module.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatShowDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

export const metadata = {
  title: 'Shows',
  description:
    'Upcoming live shows and DJ sets by AZARYC. Electronic music performances across Europe and worldwide. Booking: azarycmusic@gmail.com',
  alternates: { canonical: 'https://azaryc.com/shows' },
  openGraph: {
    title: 'Shows — AZARYC',
    description:
      'Upcoming live shows and DJ sets by AZARYC. Electronic music performances across Europe and worldwide. Booking: azarycmusic@gmail.com',
    url: 'https://azaryc.com/shows',
    siteName: 'AZARYC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shows — AZARYC',
    description:
      'Upcoming live shows and DJ sets by AZARYC. Electronic music performances across Europe and worldwide. Booking: azarycmusic@gmail.com',
  },
};

export default function ShowsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://azaryc.com' },
          { name: 'Shows', url: 'https://azaryc.com/shows' },
        ]}
      />
      <Navigation />
      <PageHeader eyebrow="Live" title="Shows" />

      <section className={`container ${styles.empty}`}>
        <p className={styles.emptyText}>No upcoming shows at the moment.</p>
        <p className={styles.emptySubtext}>
          For booking enquiries, get in touch at{' '}
          <a href="mailto:azarycmusic@gmail.com">azarycmusic@gmail.com</a>
        </p>
      </section>

      <section className={`container ${styles.pastShows}`}>
        <h2 className={styles.pastShowsHeading}>Past Shows</h2>
        <div className={styles.pastShowsList}>
          {pastShows.map((show, i) => (
            <p className={styles.pastShowsRow} key={`${show.date}-${i}`}>
              <span className={styles.pastShowsDate}>{formatShowDate(show.date)}</span>
              {' — '}
              {show.event}
              {' — '}
              {show.location}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
