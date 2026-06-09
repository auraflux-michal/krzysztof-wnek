import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { client } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'Program PQ — 7-tygodniowy Trening Mentalny',
  description: 'Positive Intelligence® to nie pozytywne myślenie. Naukowo udowodniony program dla liderów, który buduje trwałe ścieżki neuronalne. Certyfikowany przez Shirzada Chamine (Stanford). Mierzalna zmiana w 7 tygodniach.',
  openGraph: {
    title: 'Program PQ — 7-tygodniowy Trening Mentalny | Krzysztof Wnęk',
    description: 'Naukowo udowodniony system Positive Intelligence® dla liderów. Buduje trwałe ścieżki neuronalne. Mierzalna zmiana w 7 tygodniach.',
    url: '/dla-ciebie',
    images: [{ url: '/krzysztof-wnek.jpg', width: 800, height: 1000, alt: 'Krzysztof Wnęk — Coach PQ' }],
  },
  alternates: { canonical: '/dla-ciebie' },
}

interface Step { num: string; title: string; desc: string }
interface FaqItem { q: string; a: string }

interface PageData {
  heroH1?: string
  heroLead?: string
  aboutHeading?: string
  aboutP1?: string; aboutP2?: string; aboutP3?: string
  steps?: Step[]
  priceLabel?: string; priceText?: string
  faq?: FaqItem[]
}

const F = {
  heroH1: 'Zapewniasz\nwszystkim.\nKto zapewnia\nTobie?',
  heroLead: '7-tygodniowy program PQ dla liderów i menedżerów, którzy chcą osiągać na najwyższym poziomie — bez wypalania.',
  aboutHeading: 'Positive Intelligence® to nie pozytywne myślenie.',
  aboutP1: 'Opracowany przez Shirzada Chamine na Stanfordzie — Positive Intelligence® to naukowo udowodniony system, który uczy Twój mózg działania z mądrości zamiast reaktywności.',
  aboutP2: 'Zamiast walczyć ze sobą — uczysz się rozpoznawać sabotażystów i aktywować Sage. Program działa na poziomie neurologicznym. Dlatego efekty są trwałe.',
  aboutP3: 'Pracowałem z ponad 200 liderami. Widzę tę różnicę u każdego z nich.',
  steps: [
    { num: '01', title: 'Zrób test', desc: 'Poznaj swoich głównych Sabotażystów mentalnych w bezpłatnym 5-minutowym teście. Zrozum działanie swoich wewnętrznych wrogów.' },
    { num: '02', title: 'Dołącz do programu', desc: '7 tygodni intensywnej pracy z aplikacją PQ, cotygodniowe sesje grupowe i indywidualne wsparcie po polsku.' },
    { num: '03', title: 'Poczuj zmianę', desc: 'Buduj trwałe ścieżki neuronalne dla spokoju i jasności umysłu oraz najwyższej efektywności. Mierzalna poprawa, nie motywacja.' },
  ],
  priceLabel: 'Program PQ · 7 tygodni',
  priceText: 'Cenę omawiamy indywidualnie.',
  faq: [
    { q: 'Czy muszę znać angielski?', a: 'Program PQ jest prowadzony w oparciu o aplikację PQ po angielsku, ale materiały można powtarzać i są w pełni zrozumiałe nawet przy średniej znajomości języka (wystarczy znajomość bierna). Poza aplikacją pracuję z Tobą po polsku przez całe 7 tygodni.' },
    { q: 'Ile czasu zajmuje program tygodniowo?', a: 'Potrzebujesz dziennie 15 minut na wykonanie ćwiczeń z aplikacją. Poza tym 1 raz w tygodniu (między piątkiem, a niedzielą) masz do obejrzenia webinar, który trwa około 1h. Również 1 raz w tygodniu (w poniedziałek) mamy cotygodniowe sesje grupowe, które trwają do 1h. To nie jest kurs — to codzienność.' },
    { q: 'Czy to jest coaching?', a: 'To coś więcej. Program PQ łączy neuronaukę, nauki o efektywności, psychologię behawioralno-poznawczą oraz psychologię pozytywną. Dzięki tej unikalnej i praktycznej metodzie fitnessu mentalnego budujesz dosłownie nowe ścieżki neuronalne. Efekty są mierzalne i trwałe.' },
    { q: 'Dla kogo jest Program PQ?', a: 'Dla liderów, menedżerów i przedsiębiorców, którzy osiągnęli sukces — ale odkryli, że coś im umyka. Radość, spokój, obecność. Umów rozmowę — sprawdzimy razem.' },
    { q: 'Czy mogę płacić ratalnie?', a: 'Mam świadomość, że czasami płynność nie pozwala na jednorazowe obciążenie budżetu domowego, dlatego jest też możliwość skorzystania z płatności ratalnych — łącznie do 12 rat. Szczegóły możemy omówić podczas rozmowy — umów spotkanie w moim kalendarzu lub napisz.' },
    { q: 'Co to właściwie jest PQ?', a: 'PQ w koncepcji Positive Intelligence® oznacza Positive Intelligence® Quotient, czyli iloraz inteligencji pozytywnej. Jest to wskaźnik tzw. kondycji psychicznej (ang. mental fitness), który mierzy zdolność radzenia sobie z wyzwaniami życiowymi z poziomu spokoju i odporności, zamiast pod wpływem stresu czy negatywnych emocji.' },
  ],
} satisfies Required<PageData>

const COURSE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Program Positive Intelligence® — 7-tygodniowy trening mentalny',
  description: '7-tygodniowy program PQ dla liderów i menedżerów. Metodologia Positive Intelligence® opracowana przez Shirzada Chamine na Stanford University. Buduje trwałe ścieżki neuronalne dla spokoju, odporności i efektywności.',
  url: 'https://pozytywnainteligencja.pl/dla-ciebie',
  provider: {
    '@type': 'Person',
    name: 'Krzysztof Wnęk',
    url: 'https://pozytywnainteligencja.pl',
    '@id': 'https://pozytywnainteligencja.pl/#person',
  },
  isBasedOn: {
    '@type': 'CreativeWork',
    name: 'Positive Intelligence® by Shirzada Chamine',
    url: 'https://www.positiveintelligence.com',
  },
  educationalLevel: 'Professional',
  inLanguage: 'pl',
  timeRequired: 'P7W',
  teaches: ['Positive Intelligence', 'Saboteur Recognition', 'Sage Activation', 'Mental Fitness', 'Leadership Resilience'],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'blended',
    inLanguage: 'pl',
    courseWorkload: 'PT15M/day',
  },
}

export default async function DlaCiebiePage() {
  const raw = await client.fetch<PageData | null>(
    `*[_type == "pageDlaCiebie"][0]`, {}, { next: { revalidate: 60 } }
  ).catch(() => null)

  const d = {
    heroLines:     (raw?.heroH1     ?? F.heroH1).split('\n'),
    heroLead:      raw?.heroLead    ?? F.heroLead,
    aboutHeading:  raw?.aboutHeading ?? F.aboutHeading,
    aboutP1:       raw?.aboutP1     ?? F.aboutP1,
    aboutP2:       raw?.aboutP2     ?? F.aboutP2,
    aboutP3:       raw?.aboutP3     ?? F.aboutP3,
    steps:         raw?.steps?.length ? raw.steps : F.steps,
    priceLabel:    raw?.priceLabel  ?? F.priceLabel,
    priceText:     raw?.priceText   ?? F.priceText,
    faq:           raw?.faq?.length  ? raw.faq   : F.faq,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <JsonLd schema={COURSE_SCHEMA} />
      <JsonLd schema={faqSchema} />
      <section className="sub-hero dark">
        <div className="sub-hero-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow on-dark reveal">Dla Ciebie <span className="em">—</span> Program PQ</div>
          <h1 className="reveal" data-delay="1">
            {d.heroLines.map((line, i) => (
              <span key={i}>
                {i === d.heroLines.length - 1 ? <span className="it">{line}</span> : line}
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
              <div className="eyebrow">01 <span className="em">—</span> Co to jest</div>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(36px,4.8vw,68px)', lineHeight: 1.02, letterSpacing: '-0.018em', margin: '18px 0 32px', textWrap: 'balance' } as React.CSSProperties}>
                {d.aboutHeading}
              </h2>
            </div>
            <div className="reveal" data-delay="1" style={{ paddingTop: '8px' }}>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}>{d.aboutP1}</p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 16px', maxWidth: '52ch' }}
                dangerouslySetInnerHTML={{ __html: d.aboutP2.replace('rozpoznawać sabotażystów', '<strong>rozpoznawać sabotażystów</strong>') }} />
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: '52ch' }}>{d.aboutP3}</p>
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
            {d.steps.map((step, i) => (
              <div key={i} className="step-col">
                <div className="num">{step.num}</div>
                <div className="title">{step.title}</div>
                <div className="desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark sec-tight">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow on-dark reveal">03 <span className="em">—</span> Pierwszy krok</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px auto 16px', maxWidth: '16ch', textWrap: 'balance', color: '#fff' } as React.CSSProperties} className="reveal" data-delay="1">
            Zacznij od <em>testu</em>.
          </h2>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 40px' }} className="reveal" data-delay="2">
            5 minut · bezpłatnie · wyniki na e-mail
          </p>
          <div className="reveal" data-delay="3">
            <a href="https://www.positiveintelligence.com/saboteurs/" target="_blank" rel="noreferrer" className="btn btn-teal">Zrób bezpłatny test</a>
          </div>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow reveal">04 <span className="em">—</span> Pytania</div>
            <h2 style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(48px,6vw,88px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 64px' } as React.CSSProperties} className="reveal" data-delay="1">FAQ</h2>
          </div>
          <FaqAccordion items={d.faq} />
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
