import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from './filmmusic.module.css';

export const metadata = {
  title: 'Film Music — AZARYC',
};

const films = [
  { title: 'Falling Forwards Slightly', director: 'Vasco Viana', thumb: 'https://vumbnail.com/1185531878.jpg' },
  { title: 'Fatherland', director: 'Ania Johnston', thumb: 'https://vumbnail.com/1185532738.jpg' },
  { title: 'Sculpting Wind', director: 'Gloria Sulli', thumb: 'https://vumbnail.com/1185533268.jpg' },
  { title: 'Smetanovo', director: 'Vasco Viana', thumb: 'https://vumbnail.com/1185533604.jpg' },
  { title: 'Lone Wolves', director: 'Elliot Gaynon', thumb: 'https://vumbnail.com/1185533857.jpg' },
  { title: 'Movimento Spaziale', director: 'Movimento Spaziale', thumb: 'https://vumbnail.com/1185534203.jpg' },
  { title: 'You Are So Close', director: 'Craig McNulty', thumb: 'https://vumbnail.com/1185534867.jpg' },
];

export default function FilmMusicPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Composition" title="Film Music" />

      <section className={`container ${styles.intro}`}>
        <p className={styles.bio}>
          Music composer for film and documentary with over 15 years of experience in electronic music production. I merge production expertise with a cinematic and emotional approach to sound — crafting original scores that fuse texture, atmosphere, and narrative for international productions.
        </p>
      </section>

      <section className={`container ${styles.showreelSection}`}>
        <p className={styles.sectionLabel}>Showreel</p>
        <div className={styles.videoWrap}>
          <iframe
            src="https://player.vimeo.com/video/1185197399?color=ff3d3d&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Film Music Showreel"
          />
        </div>
      </section>

      <section className={`container ${styles.filmsSection}`}>
        <p className={styles.sectionLabel}>Film Scores</p>
        <div className={styles.grid}>
          {films.map((film) => (
            <div className={styles.card} key={film.title}>
              <div className={styles.thumb}>
                <img src={film.thumb} alt={film.title} loading="lazy" />
              </div>
              <p className={styles.filmTitle}>{film.title}</p>
              <p className={styles.filmDirector}>{film.director}</p>
            </div>
          ))}
        </div>

        <a
          href="https://federicocasazza.com/filmmusic"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.portfolioLink}
        >
          Full portfolio →
        </a>
      </section>

      <Footer />
    </>
  );
}
