function truncate(text, max) {
  if (!text) return '';
  return text.length > max ? `${text.slice(0, max - 1).trim()}…` : text;
}

export default function YouTubeJsonLd({ videos }) {
  const items = videos.map((video) => ({
    '@type': 'VideoObject',
    name: video.title,
    description: truncate(video.description, 500) || video.title,
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
    uploadDate: video.publishedAt,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
