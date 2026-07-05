import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Showreel from './Showreel';
import styles from './filmmusic.module.css';
export const metadata = {
title: 'Film Music',
description:
'Film music composition and sound design by AZARYC. Original scores for international film and documentary productions since 2021.',
alternates: { canonical: 'https://azaryc.com/filmmusic' },
};
const films = [
{ title: 'Falling Forwards Slightly', director: 'Vasco Viana', thumb: 'https://img.youtube.com/vi/rYfIpzP2i60/hqdefault.jpg', url: 'https://youtu.be/rYfIpzP2i60' },
{ title: 'Fatherland', director: 'Ania Johnston', thumb: 'https://img.youtube.com/vi/naCphiruL-Y/hqdefault.jpg', url: 'https://youtu.be/naCphiruL-Y' },
{ title: 'Sculpting Wind', director: 'Gloria Sulli', thumb: 'https://img.youtube.com/vi/ZDU9e0ExD8I/hqdefault.jpg', url: 'https://youtu.be/ZDU9e0ExD8I' },
{ title: 'Smetanovo', director: 'Vasco Viana', thumb: 'https://img.youtube.com/vi/DFQjdTV3zgY/hqdefault.jpg', url: 'https://youtu.be/DFQjdTV3zgY' },
{ title: 'Lone Wolves', director: 'Elliot Gaynon', thumb: 'https://img.youtube.com/vi/WalF9Ycc8vo/hqdefault.jpg', url: 'https://youtu.be/WalF9Ycc8vo' },
{ title: 'Movimento Spaziale', director: 'Movimento Spaziale', thumb: 'https://img.youtube.com/vi/_CSffGcty9s/hqdefault.jpg', url: 'https://youtu.be/_CSffGcty9s' },
{ title: 'You Are So Close', director: 'Craig McNulty', thumb: 'https://img.youtube.com/vi/d6Z54yBSZzo/hqdefault.jpg', url: 'https://youtu.be/d6Z54yBSZzo' },
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
<a
className={styles.card}
key={film.title}
href={film.url}
target="_blank"
rel="noopener noreferrer"
>
<div className={styles.thumb}>
<img src={film.thumb} alt={film.title} loading="lazy" />
</div>
<p className={styles.filmTitle}>{film.title}</p>
<p className={styles.filmDirector}>{film.director}</p>
</a>
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
