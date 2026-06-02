import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O Mnie — Krzysztof Wnęk',
  description: 'Poznaj historię Krzysztofa Wnęka. To nie historia sukcesu. To historia przebudzenia.',
}

export default function OMniePage() {
  return (
    <>
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">O Mnie</div>
          <h1 className="reveal" data-delay="1">
            To nie historia <br />sukcesu. <br />To historia <br /><span className="it">przebudzenia.</span>
          </h1>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="content-2col" style={{ alignItems: 'center' }}>
            <div
              className="reveal"
              style={{
                aspectRatio: '4/5',
                backgroundImage: "url('/krzysztof-wnek.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                width: '100%',
              }}
              aria-label="Portret — Krzysztof Wnęk"
            />
            <div className="reveal" data-delay="1">
              <div className="eyebrow">01 <span className="em">—</span> Kim jestem</div>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.18, color: 'var(--text)', letterSpacing: '-0.005em', margin: '22px 0 36px', textWrap: 'pretty' } as React.CSSProperties}>
                „Nie prowadzę warsztatów.<br />Dam Ci ogień.<br />Potem dam Ci też narzędzia,<br />żebyś płonął dalej."
              </div>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '54ch' }}>
                <strong>Krzysztof Wnęk</strong> to inspirator, coach PQ, wykładowca WSB i mówca konferencyjny, który od ponad 25 lat pracuje w dynamicznych środowiskach projektowych z wieloma liderami w Polsce.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '54ch' }}>
                Łączy energię prelekcji ze sceny z uważnością coacha PQ rozmów indywidualnych. Interesuje go praktyka, a nie teoria w myśl przekonania, że „skuteczność jest miarą prawdy".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec light" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow reveal">02 <span className="em">—</span> Oś czasu</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 64px' } as React.CSSProperties} className="reveal" data-delay="1">
            Skąd przyszedłem.
          </h2>
          <div className="timeline reveal" data-delay="2">
            <div className="tl-item">
              <div className="year">2017</div>
              <div className="tl-body">
                <div className="title">Pierwsze wystąpienie publiczne</div>
                <div className="desc">Wszedłem na scenę drżąc. Wyszedłem wiedząc, że to jest moje miejsce.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2019</div>
              <div className="tl-body">
                <div className="title">Odkrycie Positive Intelligence®</div>
                <div className="desc">Shirzad Chamine, Harvard, neurobiologia. Coś, co zmieniło sposób, w jaki rozumiem siebie i innych.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2021</div>
              <div className="tl-body">
                <div className="title">Certyfikacja PQ Coach</div>
                <div className="desc">Oficjalny certyfikat Positive Intelligence®. Jeden z nielicznych certyfikowanych coachów PQ w Polsce.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2022</div>
              <div className="tl-body">
                <div className="title">Wykładowca WSB</div>
                <div className="desc">Dołączyłem do grona wykładowców Wyższej Szkoły Biznesu. Temat: przywództwo i odporność mentalna.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2023</div>
              <div className="tl-body">
                <div className="title">200+ absolwentów programu</div>
                <div className="desc">Ponad 200 liderów, menedżerów i przedsiębiorców przeszło przez program PQ.</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="year">2024+</div>
              <div className="tl-body">
                <div className="title">Teraz</div>
                <div className="desc">Prowadzę programy, wygłaszam prelekcje i pracuję indywidualnie z ludźmi, którzy osiągnęli wszystko — i odkryli, że czegoś brakuje.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark sec-tight">
        <div className="wrap">
          <div className="eyebrow on-dark reveal">03 <span className="em">—</span> Wartości</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 64px', color: '#fff' } as React.CSSProperties} className="reveal" data-delay="1">
            Kodeks rycerza.
          </h2>
          <div className="values-grid reveal" data-delay="2">
            <div className="value-cell">
              <div className="label">Wiara</div>
              <div className="title">Wiara</div>
              <div className="desc">W człowieka. W jego zdolność do zmiany. W to, że każdy ma w sobie Mędrca.</div>
            </div>
            <div className="value-cell">
              <div className="label">Honor</div>
              <div className="title">Mów co myślisz</div>
              <div className="desc">Rób, co mówisz. Bez skrótów.</div>
            </div>
            <div className="value-cell">
              <div className="label">Odwaga</div>
              <div className="title">Zmierz się</div>
              <div className="desc">Gotowość do zmierzenia się z tym, co niewygodne — najpierw w sobie.</div>
            </div>
            <div className="value-cell">
              <div className="label">Lojalność</div>
              <div className="title">Wobec prawdy</div>
              <div className="desc">Wobec ludzi, którzy Ci ufają. Wobec procesu. Wobec prawdy.</div>
            </div>
            <div className="value-cell">
              <div className="label">Odpowiedzialność</div>
              <div className="title">Jesteś autorem</div>
              <div className="desc">Nie jesteś ofiarą okoliczności. Jesteś autorem swojego życia.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="photo-grid reveal">
            <div className="photo-slot" style={{ background: 'var(--ink-3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scena · Konferencja</span>
            </div>
            <div className="photo-slot" style={{ background: 'var(--ink-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Studio WSB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '24px auto 48px', maxWidth: '16ch', textWrap: 'balance', color: 'var(--text)' } as React.CSSProperties} className="reveal" data-delay="1">
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
