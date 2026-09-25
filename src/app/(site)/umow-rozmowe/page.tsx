import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import ZencalCalendar from '@/components/ZencalCalendar'

export const metadata: Metadata = {
  title: 'Umów Rozmowę Discovery (30 min, Bezpłatnie)',
  description: 'Zarezerwuj bezpłatną 30-minutową rozmowę Discovery. To nie jest rozmowa sprzedażowa — to mapa Twojej sytuacji i blokaży. Bez zobowiązań.',
  openGraph: {
    title: 'Umów Rozmowę Discovery (30 min) | Krzysztof Wnęk',
    description: 'Bezpłatna 30-minutowa rozmowa Discovery. Mapa Twojej sytuacji i blokaży. Zero zobowiązań.',
    url: '/umow-rozmowe',
    images: [{ url: '/krzysztof-wnek.jpg', width: 800, height: 1000, alt: 'Krzysztof Wnęk — umów rozmowę' }],
  },
  alternates: { canonical: '/umow-rozmowe' },
}

interface DiscoveryCol { label: string; desc: string }

interface PageData {
  heroH1Line1?: string; heroH1Line2?: string; heroDesc?: string
  discoveryCols?: DiscoveryCol[]
  contactEmail?: string
}

const F = {
  heroH1Line1: '30 minut.',
  heroH1Line2: 'Bez zobowiązań.',
  heroDesc: 'To nie jest rozmowa sprzedażowa. To 30-minutowa mapa tego, gdzie jesteś i gdzie są Twoje blokady.',
  discoveryCols: [
    { label: 'Twoja sytuacja',   desc: 'Mapujemy, gdzie jesteś — zawodowo, osobowo, energetycznie. Luźno i szczerze.' },
    { label: 'Twoi sabotażyści', desc: 'Jeśli zrobiłeś test, razem omówimy wyniki i pokażę, gdzie najbardziej utrudniają Twoje życie.' },
    { label: 'Twoja decyzja',    desc: 'Jasna rekomendacja — program, coaching lub nic z tego. Mówię wprost i nie obiecuję na wyrost.' },
  ],
  contactEmail: 'do@krzysztofwnek.pl',
} satisfies Required<PageData>

export default async function UmowRozmowePage() {
  const raw = await client.fetch<PageData | null>(
    `*[_type == "pageUmowRozmowe"][0]`, {}, { next: { revalidate: 60 } }
  ).catch(() => null)

  const d = {
    heroH1Line1:   raw?.heroH1Line1   ?? F.heroH1Line1,
    heroH1Line2:   raw?.heroH1Line2   ?? F.heroH1Line2,
    heroDesc:      raw?.heroDesc      ?? F.heroDesc,
    discoveryCols: raw?.discoveryCols?.length ? raw.discoveryCols : F.discoveryCols,
    contactEmail:  raw?.contactEmail  ?? F.contactEmail,
  }

  return (
    <>
      <div className="umow-split">

        {/* LEFT TOP — heading + desc (spans left col on desktop, top on mobile) */}
        <div className="umow-left-top">
          <div className="eyebrow on-dark reveal">Bezpłatna sesja Discovery</div>
          <h1
            style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(44px,5.5vw,80px)', lineHeight: 0.98, letterSpacing: '-0.02em', color: '#fff', margin: '24px 0 24px', textWrap: 'balance' } as React.CSSProperties}
            className="reveal"
            data-delay="1"
          >
            {d.heroH1Line1}<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>{d.heroH1Line2}</span>
          </h1>
          <p
            style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.65, maxWidth: '42ch', margin: 0 }}
            className="reveal"
            data-delay="2"
          >
            {d.heroDesc}
          </p>
        </div>

        {/* RIGHT — calendar (appears after heading on mobile, right col on desktop) */}
        <div className="umow-right">
          <div className="eyebrow">Wybierz termin</div>
          <div className="umow-cal-title">Konsultacja Discovery · 30 min</div>
          <ZencalCalendar />
          <p className="umow-cal-alt">
            Wolisz napisać?{' '}
            <a href={`mailto:${d.contactEmail}`}>{d.contactEmail}</a>
            {' '}— odpowiem w ciągu 24h.
          </p>
        </div>

        {/* LEFT BOTTOM — discovery points (after calendar on mobile) */}
        <div className="umow-left-bottom">
          <div className="umow-disc reveal" data-delay="3">
            {d.discoveryCols.map((col, i) => (
              <div key={i} className="umow-disc-item">
                <div className="eyebrow on-dark">{col.label}</div>
                <p>{col.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <section className="sec dark not-ready">
        <div className="wrap">
          <div className="label reveal">Nadal się wahasz?</div>
          <div className="reveal" data-delay="1">
            <a href="/#umow" className="btn btn-outline-light">
              Najpierw zrób bezpłatny test sabotażystów <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
