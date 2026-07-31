'use client'

export default function HeroBgVideo({ vimeoId }: { vimeoId: string }) {
  return (
    <div className="sub-hero-video" aria-hidden="true">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1`}
        allow="autoplay"
        title=""
      />
      <div className="sub-hero-video-overlay" />
    </div>
  )
}
