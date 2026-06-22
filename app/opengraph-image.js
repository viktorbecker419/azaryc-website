import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AZARYC — Cinematic · Post-Rave · Soul';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '3px',
            background: '#f5f5f5',
            marginBottom: '40px',
          }}
        />

        <div
          style={{
            fontSize: '140px',
            fontWeight: '900',
            color: '#f5f5f5',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: '30px',
          }}
        >
          AZARYC
        </div>

        <div
          style={{
            fontSize: '26px',
            color: '#f5f5f5',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Cinematic · Post-Rave · Soul
        </div>

        <div
          style={{
            fontSize: '20px',
            color: 'rgba(245,245,245,0.5)',
            letterSpacing: '1px',
          }}
        >
          DJ · Electronic Music Producer · Film Composer
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(245,245,245,0.25)',
            letterSpacing: '2px',
          }}
        >
          azaryc.com
        </div>
      </div>
    ),
    { ...size }
  );
}
