import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import YouTubeJsonLd from './YouTubeJsonLd';
import YouTubeGrid from './YouTubeGrid';
import { getYoutubeVideos } from './getVideos';
import styles from './youtube.module.css';

const DESCRIPTION =
  'Video tutorials from the AZARYC YouTube channel (@azaryc): music production, sound design, and electronic music production tips.';

export const metadata = {
  title: 'YouTube',
  description: DESCRIPTION,
  alternates: { canonical: 'https://azaryc.com/youtube' },
  openGraph: {
    title: 'YouTube — AZARYC',
    description: DESCRIPTION,
    url: 'https://azaryc.com/youtube',
    siteName: 'AZARYC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube — AZARYC',
    description: DESCRIPTION,
  },
};

export const revalidate = 3600;

export default async function YouTubePage() {
  const videos = await getYoutubeVideos();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://azaryc.com' },
          { name: 'YouTube', url: 'https://azaryc.com/youtube' },
        ]}
      />
      {videos.length > 0 && <YouTubeJsonLd videos={videos} />}
      <Navigation />
      <PageHeader title="YouTube" />

      <section className="container">
        {videos.length > 0 ? (
          <YouTubeGrid videos={videos} />
        ) : (
          <p className={styles.emptyText}>
            No videos available at the moment. In the meantime, check out{' '}
            <a href="https://www.youtube.com/@azaryc" target="_blank" rel="noopener noreferrer">
              youtube.com/@azaryc
            </a>
            .
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
