'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function openMenu() {
    mobileRef.current?.classList.add('open')
    document.body.style.overflow = 'hidden'
    burgerRef.current?.setAttribute('aria-expanded', 'true')
  }

  function closeMenu() {
    mobileRef.current?.classList.remove('open')
    document.body.style.overflow = ''
    burgerRef.current?.setAttribute('aria-expanded', 'false')
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileRef.current?.classList.contains('open')) closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="nav-inner">
          <Link className="nav-brand" href="/">
            <div className="mono-kw">KW</div>
            <div className="nav-brand-name">Krzysztof Wnęk</div>
          </Link>
          <div className="nav-links">
            <Link href="/dla-ciebie">Dla Ciebie</Link>
            <Link href="/dla-firm">Dla Firm</Link>
            <Link href="/o-mnie">O Mnie</Link>
            <Link href="/#testimonials">Dowody</Link>
            <a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer">YouTube</a>
          </div>
          <div className="nav-cta-wrap">
            <Link href="/umow-rozmowe" className="btn btn-teal" style={{ padding: '12px 20px' }}>
              Umów rozmowę <span className="arrow">→</span>
            </Link>
            <button className="nav-burger" ref={burgerRef} onClick={openMenu} aria-label="Menu">
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="nav-mobile" ref={mobileRef}>
        <div className="nav-mobile-inner">
          <div className="nav-mobile-top">
            <Link className="nav-brand" href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px' }} onClick={closeMenu}>
              <div className="mono-kw">KW</div>
              <div className="nav-brand-name">Krzysztof Wnęk</div>
            </Link>
            <button className="nav-mobile-close" onClick={closeMenu} aria-label="Zamknij menu">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 2l12 12M14 2L2 14" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="nav-mobile-links">
            <Link href="/dla-ciebie" onClick={closeMenu}>Dla Ciebie</Link>
            <Link href="/dla-firm" onClick={closeMenu}>Dla Firm</Link>
            <Link href="/o-mnie" onClick={closeMenu}>O Mnie</Link>
            <Link href="/#testimonials" onClick={closeMenu}>Dowody</Link>
            <a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer" onClick={closeMenu}>YouTube</a>
          </nav>
          <div className="nav-mobile-cta">
            <Link href="/umow-rozmowe" className="btn btn-teal" onClick={closeMenu}>
              Umów rozmowę <span className="arrow">→</span>
            </Link>
            <Link href="/#umow" className="btn btn-outline-light" onClick={closeMenu}>
              Darmowy test Sabotażystów
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
