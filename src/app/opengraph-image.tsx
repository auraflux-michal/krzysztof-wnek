import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Krzysztof Wnęk — Coach PQ, Mówca, Mentor'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imgBuffer = readFileSync(join(process.cwd(), 'public', 'krzysztof-wnek.jpg'))
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0E0E0E',
          overflow: 'hidden',
        }}
      >
        {/* Left — text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 72px',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 13,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#F5A86A',
              marginBottom: 36,
            }}
          >
            Coach PQ · Mówca · Mentor
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Georgia, serif',
              fontWeight: 500,
              fontSize: 76,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: 32,
            }}
          >
            <span>Wymieniasz</span>
            <span style={{ fontStyle: 'italic', color: '#F5A86A' }}>stres</span>
            <span>na sukces?</span>
          </div>

          <div
            style={{
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 18,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.55,
              marginBottom: 52,
            }}
          >
            Pomagam liderom odzyskać radość i efektywność.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                background: '#F08A3A',
                fontFamily: 'sans-serif',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '0.06em',
                color: '#000',
              }}
            >
              KW
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Krzysztof Wnęk
              </span>
              <span
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.08em',
                }}
              >
                pozytywnainteligencja.pl
              </span>
            </div>
          </div>
        </div>

        {/* Right — portrait */}
        <div
          style={{
            display: 'flex',
            width: 390,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={imgSrc}
            alt=""
            width={390}
            height={630}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 100,
              background: 'linear-gradient(to right, #0E0E0E 0%, transparent 100%)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: '#F08A3A',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  )
}
