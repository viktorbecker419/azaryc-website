import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const markData = await readFile(path.join(process.cwd(), 'public/azaryc-a-mark.png'));
  const markBase64 = `data:image/png;base64,${markData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
        }}
      >
        <img src={markBase64} width={120} height={118} style={{ objectFit: 'contain' }} />
      </div>
    ),
    { ...size }
  );
}
