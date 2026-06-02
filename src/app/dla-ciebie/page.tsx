import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Dla Ciebie — Krzysztof Wnęk',
  description: 'Program Positive Intelligence dla liderów i menedżerów. 8-tygodniowy system, który zmienia sposób myślenia na poziomie neurologicznym.',
}

export default function DlaCiebieePage() {
  return (
    <>
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">
            Dla Ciebie <span className="em">—</span> Program PQ
          </div>
          <h1 className="reveal" data-delay="1">
            Zapewniasz <br />wszystkim. <br />Kto zapewnia <br /><span className="it">Tobie?</span>
          </h1>
          <p className="lead reveal" data-delay="2">
            7-tygodniowy program PQ dla liderów i menedżerów, którzy chcą osiągać na najwyższym poziomie — bez wypalania.
          </p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="content-2col">
            <div className="reveal">
              <div className="eyebrow">01 <span className="em">—</span> Co to jest</div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(36px,4.8vw,68px)', lineHeight: 1.02, letterSpacing: '-0.018em', margin: '18px 0 32px', textWrap: 'balance' } as React.CSSProperties}>
                Positive Intelligence®<br /><span style={{ fontStyle: 'normal', fontWeight: 400 }}>to nie pozytywne myślenie.</span>
              </h2>
            </div>
            <div className="reveal" data-delay="1" style={{ paddingTop: '8px' }}>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}>
                Opracowany przez Shirzada Chamine na Stanfordzie — Positive Intelligence® to naukowo udowodniony system, który uczy Twój mózg działania z mądrości zamiast reaktywności.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}>
                Zamiast walczyć ze sobą — uczysz się <strong>rozpoznawać sabotażystów</strong> i aktywować Sage. Program działa na poziomie neurologicznym. Dlatego efekty są trwałe.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '52ch' }}>
                Pracowałem z ponad 200 liderami. Widzę tę różnicę u każdego z nich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="eyebrow reveal">02 <span className="em">—</span> Proces</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 0', textWrap: 'balance' } as React.CSSProperties} className="reveal" data-delay="1">
            Trzy kroki.
          </h2>
          <div className="steps-row reveal" data-delay="2">
            <div className="step-col">
              <div className="num">01</div>
              <div className="title">Zrób test</div>
              <div className="desc">Poznaj swoich głównych Sabotażystów mentalnych w bezpłatnym 5-minutowym teście. Zrozum działanie swoich wewnętrznych wrogów.</div>
            </div>
            <div className="step-col">
              <div className="num">02</div>
              <div className="title">Dołącz do programu</div>
              <div className="desc">7 tygodni intensywnej pracy z aplikacją PQ, cotygodniowe sesje grupowe i indywidualne wsparcie po polsku.</div>
            </div>
            <div className="step-col">
              <div className="num">03</div>
              <div className="title">Poczuj zmianę</div>
              <div className="desc">Buduj trwałe ścieżki neuronalne dla spokoju i jasności umysłu oraz najwyższej efektywności. Mierzalna poprawa, nie motywacja.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark sec-tight">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow on-dark reveal">03 <span className="em">—</span> Inwestycja</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', margin: '32px 0 8px' }} className="reveal" data-delay="1">
            Program PQ · 7 tygodni
          </div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.6)', margin: '0 0 48px' }} className="reveal" data-delay="1">
            Cenę omawiamy indywidualnie.
          </div>
          <div className="reveal" data-delay="2" style={{ display: 'inline-flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://www.positiveintelligence.com/saboteurs/" target="_blank" rel="noreferrer" className="btn btn-teal">
              Zrób bezpłatny test
            </a>
          </div>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow reveal">04 <span className="em">—</span> Pytania</div>
            <h2 style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(48px,6vw,88px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 64px' } as React.CSSProperties} className="reveal" data-delay="1">
              FAQ
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="dark sec-tight">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '24px auto 48px', maxWidth: '16ch', textWrap: 'balance', color: '#fff' } as React.CSSProperties} className="reveal" data-delay="1">
            Zacznij od <em>rozmowy</em>.
          </h2>
          <div className="reveal" data-delay="2">
            <Link href="/umow-rozmowe" className="btn btn-teal">Umów rozmowę Discovery</Link>
          </div>
        </div>
      </section>
    </>
  )
}
