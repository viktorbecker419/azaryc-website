import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';

export const alt = 'AZARYC — Cinematic · Post-Rave · Soul';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(path.join(process.cwd(), 'public/azaryc-logo.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <img
          src={logoBase64}
          width={700}
          height={175}
          style={{ objectFit: 'contain', marginBottom: '40px' }}
        />

        <div
          style={{
            fontSize: '22px',
            color: 'rgba(245,245,245,0.5)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          Cinematic · Post-Rave · Soul
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '70px',
            fontSize: '16px',
            color: 'rgba(245,245,245,0.2)',
            letterSpacing: '0.2em',
          }}
        >
          azaryc.com
        </div>
      </div>
    ),
    { ...size }
  );
}
