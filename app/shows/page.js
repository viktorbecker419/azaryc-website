import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import EventJsonLd from '../components/EventJsonLd';
import { pastShows } from './pastShows';
import { upcomingShows } from './upcomingShows';
import styles from './shows.module.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatShowDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

const COUNTRY_FLAGS = {
  India: '🇮🇳',
  Thailand: '🇹🇭',
  Germany: '🇩🇪',
  Slovakia: '🇸🇰',
  UK: '🇬🇧',
  USA: '🇺🇸',
  Croatia: '🇭🇷',
  Mexico: '🇲🇽',
  'Czech Republic': '🇨🇿',
  Ireland: '🇮🇪',
  Nepal: '🇳🇵',
  Cambodia: '🇰🇭',
  Poland: '🇵🇱',
  Portugal: '🇵🇹',
  Switzerland: '🇨🇭',
  Georgia: '🇬🇪',
};

function locationFlag(location) {
  const country = location.split(',').pop().trim();
  return COUNTRY_FLAGS[country] || '';
}

function ShowRow({ show }) {
  return (
    <p className={styles.pastShowsRow}>
      <span className={styles.pastShowsDate}>{formatShowDate(show.date)}</span>
      {' — '}
      {show.url ? (
        <a href={show.url} target="_blank" rel="noopener noreferrer" className={styles.pastShowsLink}>
          {show.event}
        </a>
      ) : (
        show.event
      )}
      {' — '}
      {show.location}
      {locationFlag(show.location) && ` ${locationFlag(show.location)}`}
    </p>
  );
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
      {upcomingShows.length > 0 && <EventJsonLd shows={upcomingShows} />}
      <Navigation />
      <PageHeader title="Shows" />

      <section className={`container ${styles.empty}`}>
        <h2 className={styles.pastShowsHeading}>Upcoming Shows</h2>
        {upcomingShows.length > 0 ? (
          <div className={styles.pastShowsList}>
            {upcomingShows.map((show, i) => (
              <ShowRow show={show} key={`${show.date}-${i}`} />
            ))}
          </div>
        ) : (
          <p className={styles.emptyText}>No upcoming shows at the moment.</p>
        )}
        <p className={styles.emptySubtext}>
          For booking enquiries, get in touch at{' '}
          <a href="mailto:azarycmusic@gmail.com">azarycmusic@gmail.com</a>
        </p>
      </section>

      <section className={`container ${styles.pastShows}`}>
        <h2 className={styles.pastShowsHeading}>Past Shows</h2>
        <div className={styles.pastShowsList}>
          {pastShows.map((show, i) => (
            <ShowRow show={show} key={`${show.date}-${i}`} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
