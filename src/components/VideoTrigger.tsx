'use client'

export default function VideoTrigger({ videoId = 'J_yUIu3ARmw', duration = '2:14' }: { videoId?: string; duration?: string }) {
  function open() {
    window.dispatchEvent(new CustomEvent('open-video', { detail: videoId }))
  }

  return (
    <div
      className="video-wrap reveal"
      data-delay="2"
      id="video-trigger"
      role="button"
      tabIndex={0}
      aria-label="Odtwórz film"
      style={{ cursor: 'pointer' }}
      onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="video-thumb" src="/video-placeholder.png" alt="Krzysztof Wnęk — obejrzyj" />
      <div className="video-overlay" />
      <div className="video-meta">
        <span className="rec">REC</span>
        <span>{duration}</span>
        <span>1080p</span>
      </div>
      <div className="video-play">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4 2v12l10-6z" />
        </svg>
        Odtwórz
      </div>
    </div>
  )
}
