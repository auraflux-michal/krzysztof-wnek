'use client'

import { useEffect, useRef, useState } from 'react'

export interface Slide {
  name: string
  role: string
  quote: string
  vimeoId?: string
  thumbnailUrl?: string
}

const FALLBACK_SLIDES: Slide[] = [
  {
    name: 'Paweł Bereska',
    role: 'Przedsiębiorca, AZYMUT.clothing',
    quote: '„Łatwiej mi zrozumieć konflikty w domu i w pracy. Dodatkowo łatwiej panuję nad lękami."',
    vimeoId: '1199662481',
  },
  {
    name: 'Michał Caba',
    role: 'Przedsiębiorca, Auraflux',
    quote: '„Udział w programie pomógł mi być bardziej skupionym w codziennym życiu, w tym co robię. Praca z Krzysztofem, jego umiejętność zadawania dobrych, konkretnych pytań i uważność były bardzo pomocne."',
    vimeoId: '1199662483',
  },
  {
    name: 'Marek Rybiec',
    role: '',
    quote: '„Krzyśka znam 20 lat. Jest to niesamowity człowiek, niesamowity obserwator i fantastyczny prowadzący."',
    vimeoId: '1199662482',
  },
  {
    name: 'Paweł Marciniec',
    role: '',
    quote: '„Wydłużył mi się „krótki lont" — jest mi się łatwiej opanować. Jestem spokojniejszy i bardziej skupiony na zadaniach."',
    vimeoId: '1199662539',
  },
  {
    name: 'Marcin Szambelan',
    role: '',
    quote: '„W wyniku stosowania poznanych technik w trakcie programu domownicy mi mówili: „Tata, jaka zmiana! Zupełnie inaczej reagujesz niż dotychczas." (…) Polecam i ufam, że ty również zmienisz swoje życie na lepsze."',
    vimeoId: '1199662480',
  },
]

const PER_PAGE = 3

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size))
  return pages
}

export default function TestimonialsCarousel({ slides = FALLBACK_SLIDES }: { slides?: Slide[] }) {
  const pages = chunk(slides, PER_PAGE)
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current)
    if (pages.length <= 1) return
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % pages.length)
    }, 8000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  function goTo(n: number) {
    setCurrent((n + pages.length) % pages.length)
    startTimer()
  }

  function handlePlay(vimeoId: string) {
    if (!vimeoId) return
    window.dispatchEvent(new CustomEvent('open-video', { detail: `vimeo:${vimeoId}` }))
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
        onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }}
        onMouseLeave={startTimer}
      >
        {pages.map((page, p) => (
          <div key={p} className={`testi-page${p === current ? ' active' : ''}`}>
            <div className="testi-grid">
              {page.map((slide, i) => (
                <div key={i} className="testi-card">
                  <div className="testi-card-video">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.thumbnailUrl || (slide.vimeoId ? `https://vumbnail.com/${slide.vimeoId}.jpg` : '/video-placeholder.png')}
                      alt={slide.name}
                    />
                    <div className="testi-video-overlay" />
                    <button
                      className="testi-play"
                      onClick={() => handlePlay(slide.vimeoId ?? '')}
                      aria-label={`Odtwórz opinię ${slide.name}`}
                    >
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M4 2v12l10-6z" />
                      </svg>
                    </button>
                  </div>
                  <div className="testi-card-caption">
                    <div className="testi-card-name">{slide.name}</div>
                    {slide.role && <div className="testi-card-role">{slide.role}</div>}
                    <p className="testi-card-quote">{slide.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="testi-carousel-nav">
          <button className="testi-arrow" onClick={() => goTo(current - 1)} aria-label="Poprzednie">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <div className="testi-dots">
            {pages.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Strona ${i + 1}`}
              />
            ))}
          </div>
          <button className="testi-arrow" onClick={() => goTo(current + 1)} aria-label="Następne">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
