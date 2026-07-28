import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'Get in Touch',
  description:
    'Booking and general enquiries for AZARYC. DJ bookings, live performances, and collaborations. Contact: azarycmusic@gmail.com',
  alternates: { canonical: 'https://azaryc.com/contact' },
  openGraph: {
    title: 'Get in Touch — AZARYC',
    description:
      'Booking and general enquiries for AZARYC. DJ bookings, live performances, and collaborations. Contact: azarycmusic@gmail.com',
    url: 'https://azaryc.com/contact',
    siteName: 'AZARYC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get in Touch — AZARYC',
    description:
      'Booking and general enquiries for AZARYC. DJ bookings, live performances, and collaborations. Contact: azarycmusic@gmail.com',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://azaryc.com' },
          { name: 'Get in Touch', url: 'https://azaryc.com/contact' },
        ]}
      />
      <Navigation />
      <PageHeader title="Get in Touch" />

      <section className={`container ${styles.contactBlock}`}>
        <p className={styles.paragraph}>
          For bookings, gigs, and general enquiries, reach out directly.
        </p>

        <a
          href="https://aab37926.sibforms.com/serve/MUIFAA81rrIE_x3r_H4x3jp8ghehb3gLVXuXydsPCgrZ7V6tpooB5SQX97IcotO6KuFrE-xKfdJXPXAtRs33beqQthV5Jc8tqf4xuwfALqsriAsJN91QhkdslOmqqAj1U5jO2R9l8UmqxMKixJMF5HnVjlOqUEkrjTDRXe9CUvo8IZg0mEJlNLOAxNgmeXw6-47w8P56_phIiDJBtA=="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Join the Mailing List
        </a>

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
