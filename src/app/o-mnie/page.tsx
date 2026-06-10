import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { client } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'O Mnie — Certyfikowany Coach PQ',
  description: 'Krzysztof Wnęk — certyfikowany Coach Positive Intelligence® (Stanford), wykładowca WSB-NLU, mówca konferencyjny. Ponad 200 absolwentów programu PQ w Polsce.',
  openGraph: {
    title: 'O Mnie — Krzysztof Wnęk | Certyfikowany Coach PQ',
    description: 'Coach PQ certyfikowany przez Positive Intelligence (Stanford), wykładowca WSB-NLU, mówca konferencyjny. Ponad 200 absolwentów programu PQ.',
    url: '/o-mnie',
    images: [{ url: '/krzysztof-wnek.jpg', width: 800, height: 1000, alt: 'Krzysztof Wnęk — portret' }],
  },
  alternates: { canonical: '/o-mnie' },
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://pozytywnainteligencja.pl/#person',
  name: 'Krzysztof Wnęk',
  jobTitle: 'Coach Positive Intelligence®, Mówca, Mentor',
  description: 'Certyfikowany Coach Positive Intelligence® (PQ), wykładowca WSB-NLU, mówca konferencyjny z ponad 25-letnim doświadczeniem.',
  url: 'https://pozytywnainteligencja.pl/o-mnie',
  image: 'https://pozytywnainteligencja.pl/krzysztof-wnek.jpg',
  sameAs: [
    'https://www.linkedin.com/in/krzysztof-wnek/',
    'https://www.youtube.com/@PozytywnaInteligencja',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certified Positive Intelligence Coach (PQ)',
    credentialCategory: 'Professional Certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Positive Intelligence, Inc.',
      url: 'https://www.positiveintelligence.com',
      description: 'Program opracowany przez Shirzada Chamine, wykładowcę Stanford University',
    },
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Wyższa Szkoła Biznesu – National-Louis University',
    url: 'https://wsb.edu.pl',
    roleName: 'Wykładowca',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Positive Intelligence, Inc.',
    url: 'https://www.positiveintelligence.com',
  },
}

interface ValueCell { label: string; title: string; desc: string }

interface PageData {
  heroH1?: string
  bioQuote?: string; bioP1?: string; bioP2?: string
  values?: ValueCell[]
}

const F = {
  heroH1: 'To nie historia \nsukcesu. \nTo historia \nprzebudzenia.',
  bioQuote: '„Nie prowadzę warsztatów.\nDam Ci ogień.\nPotem dam Ci też narzędzia,\nżebyś płonął dalej."',
  bioP1: 'Krzysztof Wnęk to inspirator, coach PQ, wykładowca WSB i mówca konferencyjny, który od ponad 25 lat pracuje w dynamicznych środowiskach projektowych z wieloma liderami w Polsce.',
  bioP2: 'Łączy energię prelekcji ze sceny z uważnością coacha PQ rozmów indywidualnych. Interesuje go praktyka, a nie teoria w myśl przekonania, że „skuteczność jest miarą prawdy".',
  values: [
    { label: 'Wiara',           title: 'Wiara',          desc: 'W człowieka. W jego zdolność do zmiany. W to, że każdy ma w sobie Mędrca.' },
    { label: 'Honor',           title: 'Mów co myślisz', desc: 'Rób, co mówisz. Bez skrótów.' },
    { label: 'Odwaga',          title: 'Zmierz się',     desc: 'Gotowość do zmierzenia się z tym, co niewygodne — najpierw w sobie.' },
    { label: 'Lojalność',       title: 'Wobec prawdy',   desc: 'Wobec ludzi, którzy Ci ufają. Wobec procesu. Wobec prawdy.' },
    { label: 'Odpowiedzialność', title: 'Jesteś autorem', desc: 'Nie jesteś ofiarą okoliczności. Jesteś autorem swojego życia.' },
  ],
} satisfies Required<PageData>

export default async function OMniePage() {
  const raw = await client.fetch<PageData | null>(
    `*[_type == "pageOMnie"][0]`, {}, { next: { revalidate: 60 } }
  ).catch(() => null)

  const d = {
    heroLines: (raw?.heroH1  ?? F.heroH1).split('\n'),
    bioQuote:  raw?.bioQuote ?? F.bioQuote,
    bioP1:     raw?.bioP1    ?? F.bioP1,
    bioP2:     raw?.bioP2    ?? F.bioP2,
    values:    raw?.values?.length ? raw.values : F.values,
  }

  return (
    <>
      <JsonLd schema={PERSON_SCHEMA} />
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">O Mnie</div>
          <h1 className="reveal" data-delay="1">
            {d.heroLines.map((line, i) => (
              <span key={i}>
                {i === d.heroLines.length - 1 ? <span className="it">{line}</span> : line}
                {i < d.heroLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="content-2col" style={{ alignItems: 'center' }}>
            <div className="reveal" style={{ aspectRatio: '4/5', backgroundImage: 'url(/krzysztof-wnek.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', width: '100%' }} aria-label="Portret — Krzysztof Wnęk" />
            <div className="reveal" data-delay="1">
              <div className="eyebrow">01 <span className="em">—</span> Kim jestem</div>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.18, color: 'var(--text)', letterSpacing: '-0.005em', margin: '22px 0 36px', textWrap: 'pretty', whiteSpace: 'pre-line' } as React.CSSProperties}>
                {d.bioQuote}
              </div>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '54ch' }}>
                <strong>Krzysztof Wnęk</strong> {d.bioP1.replace(/^Krzysztof Wnęk (to )?/, '')}
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '54ch' }}>{d.bioP2}</p>
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
            {d.values.map((val, i) => (
              <div key={i} className="value-cell">
                <div className="label">{val.label}</div>
                <div className="title">{val.title}</div>
                <div className="desc">{val.desc}</div>
              </div>
            ))}
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
