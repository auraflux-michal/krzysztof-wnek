'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoModal() {
  const [open, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      setVideoId(id)
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('open-video', handler)
    return () => window.removeEventListener('open-video', handler)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    setOpen(false)
    setVideoId('')
    document.body.style.overflow = ''
    if (iframeRef.current) iframeRef.current.src = ''
  }

  return (
    <div
      className={`video-modal${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Film"
    >
      <div className="video-modal-backdrop" onClick={close} />
      <div className="video-modal-box">
        <button className="video-modal-close" onClick={close} aria-label="Zamknij film">✕</button>
        <div className="video-modal-embed">
          <iframe
            ref={iframeRef}
            src={open && videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : ''}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  )
}
