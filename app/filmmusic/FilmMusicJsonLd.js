export default function FilmMusicJsonLd({ showreel, films }) {
  const videos = [
    {
      '@type': 'VideoObject',
      name: showreel.title,
      description: `${showreel.title} — a film music showreel by AZARYC (Rico Casazza), film composer and sound designer.`,
      thumbnailUrl: `https://img.youtube.com/vi/${showreel.videoId}/maxresdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${showreel.videoId}`,
    },
    ...films.map((film) => ({
      '@type': 'VideoObject',
      name: film.title,
      description: `${film.title}, directed by ${film.director}. Film music composed by AZARYC (Rico Casazza).${
        film.award ? ` ${film.award}.` : ''
      }`,
      thumbnailUrl: `https://img.youtube.com/vi/${film.videoId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${film.videoId}`,
    })),
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': videos,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
