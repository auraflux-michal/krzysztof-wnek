import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { client } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'Coaching B2B i Power Speech dla Firm',
  description: 'Power Speech (45–90 min) i 7-tygodniowe programy PQ dla zespołów. Odporność decyzyjna, wydajność pod presją, mierzalne ROI. Metodologia Positive Intelligence® dla kadry zarządzającej.',
  openGraph: {
    title: 'Coaching B2B i Power Speech dla Firm | Krzysztof Wnęk',
    description: 'Power Speech i programy PQ dla zespołów. Mierzalny ROI: ↑37% wydajności, ↑54% komunikacji. Wycena 48h.',
    url: '/dla-firm',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'Krzysztof Wnęk — Prelekcje i Coaching B2B' }],
  },
  alternates: { canonical: '/dla-firm' },
}

interface Format { label: string; title: string; desc: string; ctaLabel: string }
interface RoiStat { num: string; label: string }

interface PageData {
  heroH1?: string; heroLead?: string
  costHeading?: string; costP1?: string; costP2?: string
  formats?: Format[]
  roiStats?: RoiStat[]; roiSource?: string
}

const F = {
  heroH1: 'Siła zespołu tkwi\nw różnorodności\noraz inteligencji\npozytywnej.',
  heroLead: 'Pomagam kadrze zarządzającej i zespołom działać skuteczniej i spokojniej — nawet w bardzo dynamicznych warunkach.',
  costHeading: 'Najdroższe błędy w firmie zaczynają się w głowie.',
  costP1: 'Gdy liderzy działają z sabotażystami w głowie — każda decyzja kosztuje więcej energii, trwa dłużej i generuje błędy. Konflikty eskalują. Zaangażowanie spada. Rotacja rośnie.',
  costP2: 'Program PQ dla zespołów to nie team building. To zmiana sposobu myślenia — u każdego uczestnika i w dynamice grupy. Nowa kultura skuteczności działania.',
  formats: [
    { label: 'Format A', title: 'Power Speech', desc: '45–90 minut na scenie konferencyjnej lub dla Twojego zespołu. Inspirujące wystąpienie, które zmienia perspektywę i daje nowe możliwości wzrostu potencjału zespołu. Brief 15 min, wycena 48h.', ctaLabel: 'Wycena indywidualna →' },
    { label: 'Format B', title: 'Program Zespołowy', desc: '7-tygodniowy program PQ dla zespołu (10–30 osób). Cotygodniowe sesje, aplikacja PQ, wsparcie coachingowe. Efekty po pierwszym tygodniu.', ctaLabel: 'Wycena indywidualna →' },
  ],
  roiStats: [
    { num: '↑ 37%', label: 'Poprawa wydajności\npod presją' },
    { num: '↑ 54%', label: 'Lepsza komunikacja\nw zespołach' },
    { num: '↑ 31%', label: 'Jakość podejmowania\ndecyzji' },
    { num: '↑ 3×',  label: 'Zaangażowanie\npo programie' },
  ],
  roiSource: 'Dane z badań Positive Intelligence® · próba 50 000+ uczestników',
} satisfies Required<PageData>

export default async function DlaFirmPage() {
  const raw = await client.fetch<PageData | null>(
    `*[_type == "pageDlaFirm"][0]`, {}, { next: { revalidate: 60 } }
  ).catch(() => null)

  const d = {
    heroLines:   (raw?.heroH1      ?? F.heroH1).split('\n'),
    heroLead:    raw?.heroLead     ?? F.heroLead,
    costHeading: raw?.costHeading  ?? F.costHeading,
    costP1:      raw?.costP1       ?? F.costP1,
    costP2:      raw?.costP2       ?? F.costP2,
    formats:     raw?.formats?.length  ? raw.formats  : F.formats,
    roiStats:    raw?.roiStats?.length ? raw.roiStats : F.roiStats,
    roiSource:   raw?.roiSource    ?? F.roiSource,
  }

  return (
    <>
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">Dla Firm <span className="em">—</span> B2B</div>
          <h1 className="reveal" data-delay="1">
            {d.heroLines.map((line, i) => (
              <span key={i}>
                {i === 2 ? <span className="it">{line}</span> : line}
                {i < d.heroLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="lead reveal" data-delay="2">{d.heroLead}</p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="content-2col">
            <div className="reveal">
              <div className="eyebrow">01 <span className="em">—</span> Koszt</div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(36px,4.8vw,64px)', lineHeight: 1.02, letterSpacing: '-0.018em', margin: '18px 0 0', textWrap: 'balance' } as React.CSSProperties}>
                {d.costHeading}
              </h2>
            </div>
            <div className="reveal" data-delay="1">
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}>{d.costP1}</p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '52ch' }}
                dangerouslySetInnerHTML={{ __html: d.costP2.replace('zmiana sposobu myślenia', '<strong>zmiana sposobu myślenia</strong>') }} />
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
            {d.formats.map((fmt, i) => (
              <div key={i} className="format-col">
                <div className="eyebrow">{fmt.label}</div>
                <h3>{fmt.title}</h3>
                <p>{fmt.desc}</p>
                <a href="#kontakt" className="link-text amber">{fmt.ctaLabel}</a>
              </div>
            ))}
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
            {d.roiStats.map((stat, i) => (
              <div key={i} className="roi-cell">
                <div className="roi-num">{stat.num}</div>
                <div className="roi-label" style={{ whiteSpace: 'pre-line' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginTop: '32px' }}>
            {d.roiSource}
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
