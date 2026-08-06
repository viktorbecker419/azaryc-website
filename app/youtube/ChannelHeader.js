import Image from 'next/image';
import styles from './youtube.module.css';

function formatCount(value) {
  const num = Number(value);
  if (!num) return null;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return `${num}`;
}

function truncate(text, max) {
  if (!text) return '';
  return text.length > max ? `${text.slice(0, max - 1).trim()}…` : text;
}

export default function ChannelHeader({ channel }) {
  if (!channel) return null;

  const subscribers = formatCount(channel.subscriberCount);
  const videoCount = formatCount(channel.videoCount);
  const metaParts = [
    channel.customUrl,
    subscribers && `${subscribers} subscribers`,
    videoCount && `${videoCount} videos`,
  ].filter(Boolean);

  return (
    <div className={styles.channelHeader}>
      {channel.bannerUrl && (
        <div className={styles.banner}>
          <Image
            src={`${channel.bannerUrl}=w1280`}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <div className={`container ${styles.channelInfo}`}>
        {channel.avatarUrl && (
          <Image
            src={channel.avatarUrl}
            alt={channel.title}
            width={96}
            height={96}
            className={styles.avatar}
          />
        )}
        <div className={styles.channelText}>
          <p className={styles.channelName}>{channel.title}</p>
          {metaParts.length > 0 && (
            <p className={styles.channelMeta}>{metaParts.join(' · ')}</p>
          )}
          {channel.description && (
            <p className={styles.channelDescription}>{truncate(channel.description, 220)}</p>
          )}
          <a
            href="https://www.youtube.com/@azaryc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeButton}
          >
            View channel on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
