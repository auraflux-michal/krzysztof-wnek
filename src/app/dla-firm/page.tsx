import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Dla Firm — Krzysztof Wnęk',
  description: 'Power Speech i programy zespołowe dla firm. Odporność decyzyjna, wydajność pod presją, mierzalne wyniki ROI.',
}

export default function DlaFirmPage() {
  return (
    <>
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">Dla Firm <span className="em">—</span> B2B</div>
          <h1 className="reveal" data-delay="1">
            Siła zespołu tkwi<br />w różnorodności<br />oraz <span className="it">inteligencji</span><br />pozytywnej.
          </h1>
          <p className="lead reveal" data-delay="2">
            Pomagam kadrze zarządzającej i zespołom działać skuteczniej i spokojniej — nawet w bardzo dynamicznych warunkach.
          </p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="content-2col">
            <div className="reveal">
              <div className="eyebrow">01 <span className="em">—</span> Koszt</div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(36px,4.8vw,64px)', lineHeight: 1.02, letterSpacing: '-0.018em', margin: '18px 0 0', textWrap: 'balance' } as React.CSSProperties}>
                Najdroższe błędy<br />w firmie zaczynają się<br />w <em>głowie</em>.
              </h2>
            </div>
            <div className="reveal" data-delay="1">
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}>
                Gdy liderzy działają z sabotażystami w głowie — każda decyzja kosztuje więcej energii, trwa dłużej i generuje błędy. Konflikty eskalują. Zaangażowanie spada. Rotacja rośnie.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '52ch' }}>
                Program PQ dla zespołów to nie team building. To <strong>zmiana sposobu myślenia</strong> — u każdego uczestnika i w dynamice grupy. Nowa kultura skuteczności działania.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 'clamp(80px,9vw,120px)', background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="eyebrow reveal">02 <span className="em">—</span> Formaty</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 48px' } as React.CSSProperties} className="reveal" data-delay="1">
            Dwa formaty.
          </h2>
          <div className="formats-row reveal" data-delay="2">
            <div className="format-col">
              <div className="eyebrow">Format A</div>
              <h3>Power Speech</h3>
              <p>45–90 minut na scenie konferencyjnej lub dla Twojego zespołu. Inspirujące wystąpienie, które zmienia perspektywę i daje nowe możliwości wzrostu potencjału zespołu. Brief 15 min, wycena 48h.</p>
              <a href="#kontakt" className="link-text amber">Wycena indywidualna →</a>
            </div>
            <div className="format-col">
              <div className="eyebrow">Format B</div>
              <h3>Program Zespołowy</h3>
              <p>7-tygodniowy program PQ dla zespołu (10–30 osób). Cotygodniowe sesje, aplikacja PQ, wsparcie coachingowe. Efekty po pierwszym tygodniu.</p>
              <a href="#kontakt" className="link-text amber">Wycena indywidualna →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="dark sec-tight">
        <div className="wrap">
          <div className="eyebrow on-dark reveal">03 <span className="em">—</span> Efektywność</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 64px', color: '#fff' } as React.CSSProperties} className="reveal" data-delay="1">
            ROI, który można zmierzyć.
          </h2>
          <div className="roi-grid reveal" data-delay="2">
            <div className="roi-cell">
              <div className="roi-num">↑ 37%</div>
              <div className="roi-label">Poprawa wydajności<br />pod presją</div>
            </div>
            <div className="roi-cell">
              <div className="roi-num">↑ 54%</div>
              <div className="roi-label">Lepsza komunikacja<br />w zespołach</div>
            </div>
            <div className="roi-cell">
              <div className="roi-num">↑ 31%</div>
              <div className="roi-label">Jakość podejmowania<br />decyzji</div>
            </div>
            <div className="roi-cell">
              <div className="roi-num">↑ 3×</div>
              <div className="roi-label">Zaangażowanie<br />po programie</div>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginTop: '32px' }}>
            Dane z badań Positive Intelligence® · próba 50 000+ uczestników
          </p>
        </div>
      </section>

      <section className="sec light" id="kontakt">
        <div className="wrap">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="eyebrow reveal">04 <span className="em">—</span> Skontaktuj się</div>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 0' } as React.CSSProperties} className="reveal" data-delay="1">
              Porozmawiajmy.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
