import type { Metadata } from 'next'
import { client } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'Umów Rozmowę — Krzysztof Wnęk',
  description: 'Zarezerwuj bezpłatną 30-minutową rozmowę Discovery. Zero zobowiązań — mapa Twojej sytuacji i Twoich blokaży.',
}

interface DiscoveryCol { label: string; desc: string }

interface PageData {
  heroH1Line1?: string; heroH1Line2?: string; heroDesc?: string
  discoveryCols?: DiscoveryCol[]
  contactEmail?: string; contactPlaceholder?: string; contactCtaText?: string
}

const F = {
  heroH1Line1: '30 minut.',
  heroH1Line2: 'Bez zobowiązań.',
  heroDesc: 'To nie jest rozmowa sprzedażowa. To 30-minutowa mapa tego, gdzie jesteś i gdzie są Twoje blokady.',
  discoveryCols: [
    { label: 'Twoja sytuacja',    desc: 'Mapujemy, gdzie jesteś — zawodowo, osobowo, energetycznie. Luźno i szczerze.' },
    { label: 'Twoi sabotażyści',  desc: 'Jeśli zrobiłeś test, razem omówimy Twoje wyniki i pomogę Ci zobaczyć, gdzie najbardziej utrudniają Twoje życie.' },
    { label: 'Twoja decyzja',     desc: 'Jasna rekomendacja — program, coaching lub nic z tego. Mówię wprost i nie obiecuję na wyrost.' },
  ],
  contactEmail: 'krzysztof@pozytywnainteligencja.pl',
  contactPlaceholder: 'Tymczasem napisz bezpośrednio — odpowiem w ciągu 24 godzin i razem znajdziemy termin.',
  contactCtaText: 'Napisz do mnie →',
} satisfies Required<PageData>

export default async function UmowRozmowePage() {
  const raw = await client.fetch<PageData | null>(
    `*[_type == "pageUmowRozmowe"][0]`, {}, { next: { revalidate: 60 } }
  ).catch(() => null)

  const d = {
    heroH1Line1:        raw?.heroH1Line1        ?? F.heroH1Line1,
    heroH1Line2:        raw?.heroH1Line2        ?? F.heroH1Line2,
    heroDesc:           raw?.heroDesc           ?? F.heroDesc,
    discoveryCols:      raw?.discoveryCols?.length ? raw.discoveryCols : F.discoveryCols,
    contactEmail:       raw?.contactEmail       ?? F.contactEmail,
    contactPlaceholder: raw?.contactPlaceholder ?? F.contactPlaceholder,
    contactCtaText:     raw?.contactCtaText     ?? F.contactCtaText,
  }

  return (
    <>
      <section className="dark" style={{ paddingTop: 'clamp(120px,16vw,200px)', paddingBottom: 'clamp(64px,8vw,96px)' }}>
        <div className="wrap">
          <div className="eyebrow on-dark reveal">Umów darmową rozmowę — Discovery Session</div>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(52px,7.2vw,112px)', lineHeight: 0.98, letterSpacing: '-0.02em', margin: '24px 0 24px', color: '#fff', textWrap: 'balance' } as React.CSSProperties} className="reveal" data-delay="1">
            {d.heroH1Line1}<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>{d.heroH1Line2}</span>
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: '46ch', margin: 0 }} className="reveal" data-delay="2">
            {d.heroDesc}
          </p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="disc-cols reveal">
            {d.discoveryCols.map((col, i) => (
              <div key={i} className="disc-col">
                <div className="eyebrow">{col.label}</div>
                <p>{col.desc}</p>
              </div>
            ))}
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
                {d.contactPlaceholder}
              </p>
              <a href={`mailto:${d.contactEmail}`} className="btn btn-teal" style={{ marginTop: '8px' }}>
                {d.contactCtaText}
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
