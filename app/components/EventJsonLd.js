export default function EventJsonLd({ shows }) {
  const events = shows.map((show) => {
    const [city, country] = show.location.split(',').map((s) => s.trim());
    return {
      '@type': 'Event',
      name: show.event,
      startDate: show.date,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: show.event,
        address: {
          '@type': 'PostalAddress',
          addressLocality: city,
          addressCountry: country,
        },
      },
      performer: {
        '@type': 'MusicGroup',
        '@id': 'https://azaryc.com/#artist',
        name: 'AZARYC',
      },
      url: 'https://azaryc.com/shows',
    };
  });

  const schema = {
    '@context': 'https://schema.org',
    '@graph': events,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
