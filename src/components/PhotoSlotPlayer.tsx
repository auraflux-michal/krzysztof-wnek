'use client'

interface Props {
  vimeoId: string
  thumbnailUrl: string
  label: string
}

export default function PhotoSlotPlayer({ vimeoId, thumbnailUrl, label }: Props) {
  function open() {
    window.dispatchEvent(new CustomEvent('open-video', { detail: `vimeo:${vimeoId}` }))
  }

  return (
    <div
      className="photo-slot"
      onClick={open}
      role="button"
      tabIndex={0}
      aria-label={`Odtwórz: ${label}`}
      style={{ cursor: 'pointer' }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumbnailUrl} alt={label} />
      <div className="testi-video-overlay" />
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 2, gap: '12px',
      }}>
        <div className="testi-play" style={{ width: '56px', height: '56px', flexShrink: 0 }}>
          <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: '16px', height: '16px' }}>
            <path d="M4 2v12l10-6z" />
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
        }}>{label}</span>
      </div>
    </div>
  )
}
