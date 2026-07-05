'use client';
import { useState } from 'react';
import styles from './filmmusic.module.css';
export default function FilmCard({ videoId, title, director }) {
const [playing, setPlaying] = useState(false);
return (
<div className={styles.card}>
<div className={styles.thumb}>
{playing ? (
<iframe
src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
frameBorder="0"
allow="autoplay; fullscreen; picture-in-picture"
allowFullScreen
title={title}
/>
) : (
<button
className={styles.cardPlayFacade}
onClick={() => setPlaying(true)}
aria-label={`Play ${title}`}
>
<img
src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
alt={title}
loading="lazy"
/>
<span className={styles.cardPlayButton}>
<svg viewBox="0 0 24 24" width="20" height="20" fill="white">
<path d="M8 5v14l11-7z" />
</svg>
</span>
</button>
)}
</div>
<p className={styles.filmTitle}>{title}</p>
<p className={styles.filmDirector}>{director}</p>
</div>
);
}
