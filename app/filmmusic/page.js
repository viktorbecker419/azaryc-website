import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Showreel from './Showreel';
import FilmCard from './FilmCard';
import styles from './filmmusic.module.css';
export const metadata = {
title: 'Film Music',
description:
'Film music composition and sound design by AZARYC. Original scores for international film and documentary productions since 2021.',
alternates: { canonical: 'https://azaryc.com/filmmusic' },
};
const films = [
{ title: 'Falling Forwards Slightly', director: 'Vasco Viana', videoId: 'rYfIpzP2i60' },
{ title: 'Fatherland', director: 'Ania Johnston', videoId: 'naCphiruL-Y' },
{ title: 'Sculpting Wind', director: 'Gloria Sulli', videoId: 'ZDU9e0ExD8I' },
{ title: 'Smetanovo', director: 'Vasco Viana', videoId: 'DFQjdTV3zgY' },
{ title: 'Lone Wolves', director: 'Elliot Gaynon', videoId: 'WalF9Ycc8vo' },
{ title: 'Movimento Spaziale', director: 'Movimento Spaziale', videoId: '_CSffGcty9s' },
{ title: 'You Are So Close', director: 'Craig McNulty', videoId: 'd6Z54yBSZzo' },
{ title: "Gâteau à l'orange composition", director: '', videoId: 'DxqXR4-d7HQ' },
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
<Showreel videoId="V_cS10a9-Pw" title="Film Music Showreel" />
</section>
<section className={`container ${styles.filmsSection}`}>
<p className={styles.sectionLabel}>Film Scores</p>
<div className={styles.grid}>
{films.map((film) => (
<FilmCard key={film.title} videoId={film.videoId} title={film.title} director={film.director} />
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
