// Bump a page's date here only when that page's content actually changes —
// not on every deploy.
const LAST_MODIFIED = '2026-07-25';

export default function sitemap() {
  return [
    {
      url: 'https://azaryc.com',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://azaryc.com/about',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://azaryc.com/filmmusic',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://azaryc.com/shows',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://azaryc.com/youtube',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://azaryc.com/contact',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
