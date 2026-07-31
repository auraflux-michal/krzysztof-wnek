'use client'

interface Props {
  vimeoId: string
  thumbnailUrl: string
}

export default function DowodyPlayer({ vimeoId, thumbnailUrl }: Props) {
  function open() {
    window.dispatchEvent(new CustomEvent('open-video', { detail: `vimeo:${vimeoId}` }))
  }

  return (
    <div
      className="testi-card-video"
      onClick={open}
      role="button"
      tabIndex={0}
      aria-label="Odtwórz wideo"
      style={{ cursor: 'pointer', aspectRatio: '16/9' }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumbnailUrl} alt="Odtwórz wideo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div className="testi-video-overlay" />
      <div className="testi-play">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 2v12l10-6z" />
        </svg>
      </div>
    </div>
  )
}
