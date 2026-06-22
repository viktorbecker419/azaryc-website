export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'AZARYC',
    alternateName: 'Rico Casazza',
    description:
      'AZARYC is the alias of Rico Casazza — DJ, electronic music producer, film composer and sound designer. Electro, IDM, Minimal and Techno with cinematic depth.',
    url: 'https://azaryc.com',
    genre: ['Electro', 'IDM', 'Minimal Techno', 'Techno', 'Ambient'],
    sameAs: [
      'https://ricocasazza.bandcamp.com',
      'https://soundcloud.com/ricocasazza',
      'https://www.instagram.com/ricocasazza_music',
      'https://www.discogs.com/artist/824607-Rico-Casazza',
      'https://open.spotify.com/artist/0S3n3dNP88Wa9k9HI9EgLf',
      'https://www.youtube.com/@azaryc',
      'https://www.patreon.com/ricocasazza',
    ],
    foundingLocation: {
      '@type': 'Place',
      name: 'Prague, Czech Republic',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
