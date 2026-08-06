import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import Showreel from './Showreel';
import FilmCard from './FilmCard';
import FilmMusicJsonLd from './FilmMusicJsonLd';
import styles from './filmmusic.module.css';
export const metadata = {
title: 'Film Music',
description:
'Film music composition and sound design by AZARYC. Original scores for international film and documentary productions since 2021.',
alternates: { canonical: 'https://azaryc.com/filmmusic' },
openGraph: {
  title: 'Film Music — AZARYC',
  description:
    'Film music composition and sound design by AZARYC. Original scores for international film and documentary productions since 2021.',
  url: 'https://azaryc.com/filmmusic',
  siteName: 'AZARYC',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'Film Music — AZARYC',
  description:
    'Film music composition and sound design by AZARYC. Original scores for international film and documentary productions since 2021.',
},
};
const showreel = { videoId: 'V_cS10a9-Pw', title: 'Film Music Showreel' };
const films = [
{ title: 'Falling Forwards Slightly', director: 'Vasco Viana', videoId: 'rYfIpzP2i60' },
{ title: 'Fatherland', director: 'Ania Johnston', videoId: 'naCphiruL-Y' },
{ title: 'Sculpting Wind', director: 'Gloria Sulli', videoId: 'ZDU9e0ExD8I' },
{ title: 'Smetanovo', director: 'Vasco Viana', videoId: 'DFQjdTV3zgY' },
{ title: 'Lone Wolves', director: 'Elliot Gaynon', videoId: 'WalF9Ycc8vo' },
{ title: 'Movimento Spaziale', director: 'Movimento Spaziale', videoId: '_CSffGcty9s' },
{ title: 'You Are So Close', director: 'Craig McNulty', videoId: 'd6Z54yBSZzo' },
{ title: "Gâteau à l'orange composition", director: 'Anand Tom', videoId: 'DxqXR4-d7HQ', award: 'Best Sound Design Award 2025 — Prague Actors & Film Makers Film Festival' },
];
export default function FilmMusicPage() {
return (
<>
<BreadcrumbJsonLd
  items={[
    { name: 'Home', url: 'https://azaryc.com' },
    { name: 'Film Music', url: 'https://azaryc.com/filmmusic' },
  ]}
/>
<FilmMusicJsonLd showreel={showreel} films={films} />
<Navigation />
<PageHeader title="Film Music" animate={false} />
<section className={`container ${styles.intro}`}>
<p className={styles.bio}>
Music composer for film and documentary with over 15 years of experience in electronic music production. I merge production expertise with a cinematic and emotional approach to sound — crafting original scores that fuse texture, atmosphere, and narrative for international productions.
</p>
</section>
<section className={`container ${styles.showreelSection}`}>
<p className={styles.sectionLabel}>Showreel</p>
<Showreel videoId={showreel.videoId} title={showreel.title} />
</section>
<section className={`container ${styles.filmsSection}`}>
<p className={styles.sectionLabel}>Film Scores</p>
<div className={styles.grid}>
{films.map((film) => (
<FilmCard key={film.title} videoId={film.videoId} title={film.title} director={film.director} award={film.award} />
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
