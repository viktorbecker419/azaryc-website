import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import styles from './components/Section.module.css';

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />

      <section className={`container ${styles.content}`}>
        <h2 className={styles.cardTitle}>About AZARYC</h2>
        <p className={styles.paragraph}>
          AZARYC is the alias of Rico Casazza — a DJ, electronic music producer, film composer, and sound designer based in Prague, Czech Republic. His sound fuses Electro, IDM, Techno, and Minimal into a cinematic, post-rave catalogue rooted in soul, spanning over 26 EPs and six albums.
        </p>
        <p className={styles.paragraph}>
          He has performed across Europe, Mexico, India, and the United States, with highlights including Fabric London and Boiler Room Goa, and composes original film scores for international productions.
        </p>
      </section>

      <Footer />
    </>
  );
}
