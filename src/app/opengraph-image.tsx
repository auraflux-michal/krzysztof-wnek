import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Krzysztof Wnęk — Wymieniasz stres na sukces?'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/jpeg'

export default async function Image() {
  const imgBuffer = readFileSync(join(process.cwd(), 'public', 'open-graph.jpg'))
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <img src={imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ),
    { ...size },
  )
}
