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
          [PLACEHOLDER — drop your biography text in here. A good starting point: where
          AZARYC's sound comes from, the genres you move between (electro, IDM, minimal,
          techno), and what "Cinematic · Post-Rave · Soul" means in your own words.]
        </p>
        <p className={styles.paragraph}>
          [PLACEHOLDER — second paragraph. Career highlights, residencies, labels, notable
          releases or sets, anything you want a new listener to know.]
        </p>
      </section>

      <Footer />
    </>
  );
}
