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

        <hr className={styles.divider} />

        <h2 className={styles.cardTitle}>Latest News</h2>
        <div className={styles.newsGrid}>
          <iframe
            title="New Nice Pop Song"
            className={styles.newsPlayer}
            style={{ border: 0 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=2920915203/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/"
            seamless
          />
          <div>
            <p className={styles.paragraph}>
              New single: <strong>&ldquo;New Nice Pop Song&rdquo;</strong> — out now.
            </p>
            <p className={styles.paragraph}>
              This track is part of a various artist release on Massage Brain Cult records.
            </p>
            <a
              href="https://massagebraincult.bandcamp.com/track/azaryc-new-nice-pop-song"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Get the EP on Bandcamp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
