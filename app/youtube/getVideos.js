const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_HANDLE = '@azaryc';

async function getUploadsPlaylistId() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${encodeURIComponent(
    CHANNEL_HANDLE
  )}&key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`YouTube channels API failed: ${res.status}`);
  const data = await res.json();
  const playlistId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!playlistId) throw new Error(`Could not resolve uploads playlist for ${CHANNEL_HANDLE}`);
  return playlistId;
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

export async function getYoutubeVideos() {
  if (!API_KEY) {
    console.error('YOUTUBE_API_KEY is not set — skipping YouTube video fetch.');
    return [];
  }
  try {
    const playlistId = await getUploadsPlaylistId();
    return await getPlaylistVideos(playlistId);
  } catch (err) {
    console.error('Failed to load YouTube videos:', err);
    return [];
  }
}
