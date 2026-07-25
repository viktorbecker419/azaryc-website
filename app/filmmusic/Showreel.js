'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './filmmusic.module.css';
export default function Showreel({ videoId, title }) {
const [playing, setPlaying] = useState(false);
return (
<div className={styles.videoWrap}>
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
className={styles.playFacade}
onClick={() => setPlaying(true)}
aria-label={`Play ${title}`}
>
<Image
src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
alt={title}
fill
sizes="(max-width: 768px) 100vw, 700px"
style={{ objectFit: 'cover' }}
priority
/>
<span className={styles.playButton}>
<svg viewBox="0 0 24 24" width="28" height="28" fill="white">
<path d="M8 5v14l11-7z" />
</svg>
</span>
</button>
)}
</div>
);
}
