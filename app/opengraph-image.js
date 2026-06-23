import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AZARYC — Cinematic · Post-Rave · Soul';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjornFLsS6V7w.woff2'
  ).then((res) => res.arrayBuffer());

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
            width: '50px',
            height: '1px',
            background: '#f5f5f5',
            marginBottom: '50px',
            opacity: 0.4,
          }}
        />

        <div
          style={{
            fontSize: '130px',
            fontWeight: '300',
            fontFamily: 'Cormorant Garamond',
            color: '#f5f5f5',
            letterSpacing: '0.2em',
            lineHeight: 1,
            marginBottom: '35px',
          }}
        >
          AZARYC
        </div>

        <div
          style={{
            fontSize: '22px',
            color: 'rgba(245,245,245,0.6)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '18px',
            fontFamily: 'Cormorant Garamond',
          }}
        >
          Cinematic · Post-Rave · Soul
        </div>

        <div
          style={{
            fontSize: '17px',
            color: 'rgba(245,245,245,0.35)',
            letterSpacing: '0.15em',
          }}
        >
          DJ · Electronic Music Producer · Film Composer
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            fontSize: '16px',
            color: 'rgba(245,245,245,0.2)',
            letterSpacing: '0.2em',
          }}
        >
          azaryc.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: fontData,
          style: 'normal',
          weight: 300,
        },
      ],
    }
  );
}
