import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from './music.module.css';

export const metadata = {
  title: 'Music',
  description: 'All releases by AZARYC (Rico Casazza). Albums, EPs and singles on Bandcamp.',
  alternates: { canonical: 'https://azaryc.com/music' },
};

const albums = [
  { id: '1133543157', type: 'album', title: 'Downtempo Shoegaze' },
  { id: '458287885', type: 'album', title: 'ELECTRO Sample Packs' },
  { id: '4170027657', type: 'album', title: 'Techno/Electro Sample Pack vol.1' },
  { id: '1578403198', type: 'album', title: 'IDM Fractal Dreams' },
  { id: '1817566267', type: 'album', title: 'Revealed + Connection' },
  { id: '2554012129', type: 'album', title: 'Dark Matter Soundscapes' },
  { id: '4192044235', type: 'album', title: 'Catharsis EP' },
  { id: '4248220334', type: 'album', title: 'Yaman' },
  { id: '2063500144', type: 'album', title: 'Ruqyay' },
  { id: '456325544', type: 'album', title: 'Higher Form EP' },
  { id: '2399895712', type: 'album', title: 'Dub Chamber' },
  { id: '1945460000', type: 'album', title: 'Codex Cigas' },
  { id: '1166878546', type: 'album', title: 'Brutal Quesadilla (2025 rework)' },
  { id: '439791902', type: 'album', title: 'LL016 - Vapor Pad Remixes V/A' },
];

const tracks = [
  { id: '2920915203', type: 'track', title: 'New Nice Pop Song' },
  { id: '677431189', type: 'track', title: 'Chthonic Process' },
  { id: '1423631598', type: 'track', title: 'Patrick Patrikios - Feels (remix)' },
  { id: '1946906461', type: 'track', title: '5 AM Nostalgia remix' },
  { id: '109840446', type: 'track', title: 'Biological Drive' },
  { id: '291217651', type: 'track', title: 'Transmutation' },
  { id: '3171729836', type: 'track', title: 'Mistico Dub' },
  { id: '291567539', type: 'track', title: 'Electro Cute' },
  { id: '4044488641', type: 'track', title: 'They Move Fast' },
  { id: '3265410583', type: 'track', title: 'Less Is More (w Buzz Kill)' },
  { id: '837176342', type: 'track', title: 'Polar Vortex' },
  { id: '1710443003', type: 'track', title: 'R Dom' },
  { id: '676998045', type: 'track', title: 'Acid Drama' },
  { id: '3257467500', type: 'track', title: 'Next Evidence' },
];

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Releases" title="Music" />

      <div className={`container ${styles.page}`}>

        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Albums & EPs</p>
          <a
            href="https://ricocasazza.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bandcampLink}
          >
            Open on Bandcamp ↗
          </a>
        </div>

        <div className={styles.albumGrid}>
          {albums.map((item) => (
            <div className={styles.albumCell} key={item.id}>
              <iframe
                title={item.title}
                style={{ border: 0, width: '100%', height: '100%' }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${item.id}/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/`}
                seamless
              />
            </div>
          ))}
        </div>

        <p className={`${styles.sectionLabel} ${styles.trackLabel}`}>Singles & Tracks</p>

        <div className={styles.trackGrid}>
          {tracks.map((item) => (
            <div className={styles.trackCell} key={item.id}>
              <iframe
                title={item.title}
                style={{ border: 0, width: '100%', height: '100%' }}
                src={`https://bandcamp.com/EmbeddedPlayer/track=${item.id}/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/`}
                seamless
              />
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}
