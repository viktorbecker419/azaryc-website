'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './youtube.module.css';

export default function YouTubeGrid({ videos }) {
  const [activeId, setActiveId] = useState(null);

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeId, close]);

  const activeVideo = videos.find((v) => v.videoId === activeId);

  return (
    <>
      <div className={styles.grid}>
        {videos.map((video) => (
          <button
            key={video.videoId}
            type="button"
            className={styles.card}
            onClick={() => setActiveId(video.videoId)}
            aria-label={`Play ${video.title}`}
          >
            <span className={styles.thumb}>
              <Image
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <span className={styles.overlay} />
              <span className={styles.playButton}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className={styles.title}>{video.title}</span>
          </button>
        ))}
      </div>

      {activeVideo && (
        <div className={styles.lightbox} onClick={close}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={close}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <div className={styles.player} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={activeVideo.title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
