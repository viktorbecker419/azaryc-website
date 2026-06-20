import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'Get in Touch — AZARYC',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Booking" title="Get in Touch" />

      <section className={`container ${styles.contactBlock}`}>
        <p className={styles.paragraph}>
          For bookings, gigs, and general enquiries, reach out directly.
        </p>

        <a href="mailto:azarycmusic@gmail.com" className={styles.contactEmail}>
          azarycmusic@gmail.com
        </a>

        <div className={styles.socialRow}>
          <a href="https://www.instagram.com/ricocasazza_music" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://soundcloud.com/ricocasazza" target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
