const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_HANDLE = '@azaryc';

async function fetchChannel() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings,contentDetails&forHandle=${encodeURIComponent(
    CHANNEL_HANDLE
  )}&key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`YouTube channels API failed: ${res.status}`);
  const data = await res.json();
  const item = data.items?.[0];
  if (!item) throw new Error(`Could not resolve channel for ${CHANNEL_HANDLE}`);

  const uploadsPlaylistId = item.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) throw new Error(`Could not resolve uploads playlist for ${CHANNEL_HANDLE}`);

  return {
    uploadsPlaylistId,
    title: item.snippet?.title,
    description: item.snippet?.description || '',
    avatarUrl: item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.default?.url || null,
    customUrl: item.snippet?.customUrl || null,
    subscriberCount: item.statistics?.hiddenSubscriberCount ? null : item.statistics?.subscriberCount || null,
    videoCount: item.statistics?.videoCount || null,
    bannerUrl: item.brandingSettings?.image?.bannerExternalUrl || null,
  };
}

async function getPlaylistVideos(playlistId) {
  const videos = [];
  let pageToken = '';

  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}${
      pageToken ? `&pageToken=${pageToken}` : ''
    }`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`YouTube playlistItems API failed: ${res.status}`);
    const data = await res.json();

    for (const item of data.items ?? []) {
      const { snippet } = item;
      if (!snippet?.resourceId?.videoId) continue;
      if (snippet.title === 'Private video' || snippet.title === 'Deleted video') continue;

      videos.push({
        videoId: snippet.resourceId.videoId,
        title: snippet.title,
        description: snippet.description,
        publishedAt: snippet.publishedAt,
      });
    }

    pageToken = data.nextPageToken || '';
  } while (pageToken);

  videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return videos;
}

export async function getYoutubeData() {
  if (!API_KEY) {
    console.error('YOUTUBE_API_KEY is not set — skipping YouTube fetch.');
    return { channel: null, videos: [] };
  }
  try {
    const channel = await fetchChannel();
    const videos = await getPlaylistVideos(channel.uploadsPlaylistId);
    return { channel, videos };
  } catch (err) {
    console.error('Failed to load YouTube data:', err);
    return { channel: null, videos: [] };
  }
}
