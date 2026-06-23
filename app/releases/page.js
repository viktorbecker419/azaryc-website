import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import styles from './releases.module.css';

export const metadata = {
  title: 'Releases',
  description: 'All releases by AZARYC (Rico Casazza). Albums, EPs and singles on Bandcamp.',
  alternates: { canonical: 'https://azaryc.com/releases' },
};

const albums = [
  { id: '1133543157', title: 'Downtempo Shoegaze' },
  { id: '458287885', title: 'ELECTRO Sample Packs' },
  { id: '4170027657', title: 'Techno/Electro Sample Pack vol.1' },
  { id: '1578403198', title: 'IDM Fractal Dreams' },
  { id: '1817566267', title: 'Revealed + Connection' },
  { id: '2554012129', title: 'Dark Matter Soundscapes' },
  { id: '4192044235', title: 'Catharsis EP' },
  { id: '4248220334', title: 'Yaman' },
  { id: '2063500144', title: 'Ruqyay' },
  { id: '456325544', title: 'Higher Form EP' },
  { id: '2399895712', title: 'Dub Chamber' },
  { id: '1945460000', title: 'Codex Cigas' },
  { id: '1166878546', title: 'Brutal Quesadilla (2025 rework)' },
  { id: '439791902', title: 'LL016 - Vapor Pad Remixes V/A' },
];

const tracks = [
  { id: '2920915203', title: 'New Nice Pop Song' },
  { id: '677431189', title: 'Chthonic Process' },
  { id: '1423631598', title: 'Patrick Patrikios - Feels (remix)' },
  { id: '1946906461', title: '5 AM Nostalgia remix' },
  { id: '109840446', title: 'Biological Drive' },
  { id: '291217651', title: 'Transmutation' },
  { id: '3171729836', title: 'Mistico Dub' },
  { id: '291567539', title: 'Electro Cute' },
  { id: '4044488641', title: 'They Move Fast' },
  { id: '3265410583', title: 'Less Is More (w Buzz Kill)' },
  { id: '837176342', title: 'Polar Vortex' },
  { id: '1710443003', title: 'R Dom' },
  { id: '676998045', title: 'Acid Drama' },
  { id: '3257467500', title: 'Next Evidence' },
];

export default function ReleasesPage() {
  return (
    <>
      <Navigation />
      <PageHeader eyebrow="Discography" title="Releases" />

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
                src={`https://bandcamp.com/EmbeddedPlayer/album=${item.id}/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/`}
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
