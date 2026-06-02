import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Umów Rozmowę — Krzysztof Wnęk',
  description: 'Zarezerwuj bezpłatną 30-minutową rozmowę Discovery. Zero zobowiązań — mapa Twojej sytuacji i Twoich blokaży.',
}

export default function UmowRozmowePage() {
  return (
    <>
      <section className="dark" style={{ paddingTop: 'clamp(120px,16vw,200px)', paddingBottom: 'clamp(64px,8vw,96px)' }}>
        <div className="wrap">
          <div className="eyebrow on-dark reveal">Umów darmową rozmowę — Discovery Session</div>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(52px,7.2vw,112px)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '24px 0 24px', color: '#fff', textWrap: 'balance' } as React.CSSProperties} className="reveal" data-delay="1">
            30 minut.<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>Bez zobowiązań.</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '46ch', margin: 0 }} className="reveal" data-delay="2">
            To nie jest rozmowa sprzedażowa. To 30-minutowa mapa tego, gdzie jesteś i gdzie są Twoje blokady.
          </p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="disc-cols reveal">
            <div className="disc-col">
              <div className="eyebrow">Twoja sytuacja</div>
              <p>Mapujemy, gdzie jesteś — zawodowo, osobowo, energetycznie. Luźno i szczerze.</p>
            </div>
            <div className="disc-col">
              <div className="eyebrow">Twoi sabotażyści</div>
              <p>Jeśli zrobiłeś test, razem omówimy Twoje wyniki i pomogę Ci zobaczyć, gdzie najbardziej utrudniają Twoje życie.</p>
            </div>
            <div className="disc-col">
              <div className="eyebrow">Twoja decyzja</div>
              <p>Jasna rekomendacja — program, coaching lub nic z tego. Mówię wprost i nie obiecuję na wyrost.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0, background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px,6vw,80px) 0' }}>
            <div style={{ width: '100%', minHeight: '480px', border: '1px solid var(--rule-light)', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', background: 'var(--surface)', padding: 'clamp(40px,6vw,80px) 24px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
                Rezerwacja · Discovery Session
              </div>
              <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--text)', margin: 0 }}>
                Kalendarz wkrótce dostępny.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '40ch', margin: 0, lineHeight: 1.6 }}>
                Tymczasem napisz bezpośrednio — odpowiem w ciągu 24 godzin i razem znajdziemy termin.
              </p>
              <a href="mailto:krzysztof@pozytywnainteligencja.pl" className="btn btn-teal" style={{ marginTop: '8px' }}>
                Napisz do mnie <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark not-ready">
        <div className="wrap">
          <div className="label reveal">Nadal się wahasz?</div>
          <div className="reveal" data-delay="1">
            <a href="https://www.positiveintelligence.com/saboteurs/" target="_blank" rel="noreferrer" className="btn btn-outline-light">
              Najpierw zrób bezpłatny test sabotażystów <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
