import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dziękujemy!',
  description: 'Sprawdź skrzynkę — link do testu sabotażystów już na Ciebie czeka.',
  robots: { index: false },
}

export default function DziekujePage() {
  return (
    <section className="dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', padding: 'clamp(120px,16vw,200px) 0' }}>
        <div className="eyebrow on-dark reveal">Gotowe</div>
        <h1
          style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(52px,7vw,100px)', lineHeight: 1, letterSpacing: '-0.025em', color: '#fff', margin: '24px auto 32px', maxWidth: '14ch', textWrap: 'balance' } as React.CSSProperties}
          className="reveal"
          data-delay="1"
        >
          Sprawdź skrzynkę.
        </h1>
        <p
          style={{ fontSize: '18px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '44ch', margin: '0 auto 48px' }}
          className="reveal"
          data-delay="2"
        >
          Wysłaliśmy Ci link do testu sabotażystów. Zajmuje około 5 minut — rób go spokojnie, pierwsza odpowiedź jest zazwyczaj najlepsza.
        </p>
        <div className="reveal" data-delay="3">
          <Link href="/umow-rozmowe" className="btn btn-outline-light">
            Umów bezpłatną rozmowę Discovery <span className="arrow">→</span>
          </Link>
        </div>
        <p
          style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginTop: '32px' }}
          className="reveal"
          data-delay="4"
        >
          Nie widzisz maila? Sprawdź folder spam lub{' '}
          <a href="mailto:do@krzysztofwnek.pl" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            napisz do mnie
          </a>
          .
        </p>
      </div>
    </section>
  )
}
