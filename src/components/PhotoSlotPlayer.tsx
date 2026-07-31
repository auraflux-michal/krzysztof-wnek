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
        position: 'absolute', bottom: '16px', left: '16px', right: '16px',
        display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2,
      }}>
        <div className="testi-play" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
          <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: '12px', height: '12px' }}>
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
