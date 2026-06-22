import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from '../components/Section.module.css';

export const metadata = {
  title: 'About — AZARYC',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Biography" title="About" />

      <section className={`container ${styles.content}`}>
        <p className={styles.paragraph}>
          Italian-born and London-forged, AZARYC is the alias of Rico Casazza — DJ, electronic music producer, film composer, and sound designer. A life built entirely around sound.
        </p>
        <p className={styles.paragraph}>
          For nearly two decades, he has navigated the underground with a singular voice: a sound that fuses Minimal, Techno, and Electro/IDM — cinematic in texture, post-rave in spirit, and rooted in soul. Raw dancefloor pulse collides with atmospheric depth and deep nostalgia. His catalogue spans over 26 EPs, six albums, and numerous remixes — a body of work shaped slowly, deliberately, and without compromise.
        </p>
        <p className={styles.paragraph}>
          After spending two decades in London, deeply embedded in the UK's vibrant underground scene, his artistic identity was shaped beyond return. Today his productions balance raw groove with emotional depth, moving between dancefloor momentum and introspective soundscapes.
        </p>
        <p className={styles.paragraph}>
          As a performer, he has played stages across Europe, Mexico, India, and the United States, and most recently completed an extended tour through Southeast Asia — India, Nepal, Thailand, and Cambodia — bringing his sound to new audiences across the continent. His DJ sets are precise and physical — anchored in rhythm and movement, threaded with dub and ambient texture. Highlights include Fabric London, Boiler Room Goa, DGTL Festival, and Kittenpop Mumbai.
        </p>
        <p className={styles.paragraph}>
          Beyond the club, AZARYC is also an accomplished film sound designer and composer, creating immersive scores and sonic worlds that amplify visual storytelling, with credits on international productions since 2021.
        </p>
        <p className={styles.paragraph}>
          Currently based in Prague, he continues to push his vision at the intersection of electronic music and sound art.
        </p>
      </section>

      <Footer />
    </>
  );
}
