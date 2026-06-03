'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export interface Slide {
  name: string
  role: string
  quote: string
  ytId?: string
}

const FALLBACK_SLIDES: Slide[] = [
  {
    name: 'Marta K.',
    role: 'VP Inżynierii',
    quote: '„Po 15 latach w korporacji myślałam, że wypalenie to po prostu część umowy. Krzysztof pokazał mi, że tak nie musi być."',
    ytId: 'ZASTAP_ID_VIDEO_1',
  },
  {
    name: 'Tomasz R.',
    role: 'CEO, startup technologiczny',
    quote: '„Przyszedłem po produktywność. Zostałem, bo po raz pierwszy mogłem być obecny z dziećmi bez telefonu w dłoni. To warte więcej niż jakikolwiek KPI."',
    ytId: 'ZASTAP_ID_VIDEO_2',
  },
  {
    name: 'Anna P.',
    role: 'Dyrektor Zarządzający',
    quote: '„To nie jest terapia. To nie jest coaching-lite. To najtrudniejsza i najbardziej wartościowa praca, jaką wykonałam nad sobą — i widzę różnicę w każdym spotkaniu."',
    ytId: 'ZASTAP_ID_VIDEO_3',
  },
]

export default function TestimonialsCarousel({ slides = FALLBACK_SLIDES }: { slides?: Slide[] }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 7000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  function goTo(n: number) {
    setCurrent((n + slides.length) % slides.length)
    startTimer()
  }

  function handlePlay(ytId: string) {
    if (!ytId || ytId.startsWith('ZASTAP')) return
    window.dispatchEvent(new CustomEvent('open-video', { detail: ytId }))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(current - 1)
      if (e.key === 'ArrowRight') goTo(current + 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [current])

  return (
    <div className="wrap testi-carousel-wrap">
      <div
        className="testi-carousel"
        ref={carouselRef}
        onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }}
        onMouseLeave={startTimer}
      >
        {slides.map((slide, i) => (
          <div key={i} className={`testi-slide${i === current ? ' active' : ''}`}>
            <div className="testi-slide-video">
              <Image
                src="/video-placeholder.png"
                alt={slide.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="780px"
              />
              <div className="testi-video-overlay" />
              <button
                className="testi-play"
                onClick={() => handlePlay(slide.ytId ?? '')}
                aria-label={`Odtwórz opinię ${slide.name}`}
              >
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 2v12l10-6z" />
                </svg>
              </button>
            </div>
            <div className="testi-slide-caption">
              <div className="testi-slide-name">{slide.name}</div>
              <div className="testi-slide-role">{slide.role}</div>
              <p className="testi-slide-quote">{slide.quote}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="testi-carousel-nav">
        <button className="testi-arrow" onClick={() => goTo(current - 1)} aria-label="Poprzedni">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="testi-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slajd ${i + 1}`}
            />
          ))}
        </div>
        <button className="testi-arrow" onClick={() => goTo(current + 1)} aria-label="Następny">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
