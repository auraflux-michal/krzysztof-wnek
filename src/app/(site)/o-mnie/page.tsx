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
  '@id': 'https://www.krzysztofwnek.pl/#person',
  name: 'Krzysztof Wnęk',
  jobTitle: 'Coach Positive Intelligence®, Mówca, Mentor',
  description: 'Certyfikowany Coach Positive Intelligence® (PQ), wykładowca WSB-NLU, mówca konferencyjny z ponad 25-letnim doświadczeniem.',
  url: 'https://www.krzysztofwnek.pl/o-mnie',
  image: 'https://www.krzysztofwnek.pl/krzysztof-wnek.jpg',
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
interface Trial { title: string; desc: string }

interface PageData {
  heroH1?: string
  bioQuote?: string; bioP1?: string; bioP2?: string
  crackQuote?: string; crackBody?: string
  trials?: Trial[]
  awakenQuote?: string; awakenBody?: string
  todayQuote?: string; todayBody?: string
  coda?: string
  values?: ValueCell[]
}

const F = {
  heroH1: 'To nie historia \nsukcesu. \nTo historia \nprzebudzenia.',
  bioQuote: '„Żyłem poprawnie, ale nie swoim życiem."',
  bioP1: 'Jestem szczęśliwym mężem jednej żony od 25 lat i ojcem trzech synów — 22, 17 i 14 lat. Rodzina i wiara są dla mnie fundamentem. Ale nie zawsze żyłem w zgodzie ze sobą.',
  bioP2: 'Przez prawie 10 lat pracowałem w prestiżowej korporacji finansowej. Dobre pieniądze, bezpieczeństwo, perspektywy. Z zewnątrz wszystko wyglądało dobrze. A jednak coraz częściej miałem wrażenie, że żyję poprawnie, ale nie swoim życiem.',
  crackQuote: '„Co się ze mną dzieje?"',
  crackBody: '22 lata temu mój organizm powiedział „dość". Upadłość dewelopera budującego nasze wymarzone mieszkanie. Zagrożona ciąża naszego pierwszego dziecka. Problemy zdrowotne żony. Presja „domowego żywiciela" i poczucie uwięzienia w złotych kajdanach korporacji — razem uruchomiły nerwicę lękową. Dalej próbowałem być silny. Pracować. Zarabiać. Nie zawieść rodziny. Nie szukałem wtedy wielkich życiowych lekcji — chciałem po prostu normalnie żyć.',
  trials: [
    { title: 'Odejście z bankowości', desc: 'Po latach w złotych kajdanach korporacji odszedłem z bezpiecznej pracy, by zacząć od nowa.' },
    { title: 'Park technologiczny', desc: '7 lat tworzenia młodego zespołu i prowadzenia budowy parku technologicznego dla branży IT — od wizji do gotowego obiektu.' },
    { title: 'Firma rodzinna', desc: 'Po niespodziewanej śmierci taty przejąłem rodzinną firmę budowlaną. 8 lat odpowiedzialności, pokory i lekcji, których nie da się przeczytać w żadnej książce.' },
  ],
  awakenQuote: '„Zostałem stworzony nie do budowania budynków. Do budowania ludzi."',
  awakenBody: 'Przez ponad 20 lat uczyłem się, jak żyć z lękiem, nie pozwalając mu prowadzić mojego życia. Zrozumiałem, że przez większość życia bardziej spełniałem oczekiwania niż odkrywałem swoje powołanie. Kilka lat temu zdobyłem się na odwagę, żeby zacząć od nowa — odkryłem Positive Intelligence. Nie jako kolejną metodę rozwoju osobistego, ale jako praktyczne narzędzia do trenowania umysłu, budowania odporności psychicznej i większego pokoju w głowie.',
  todayQuote: '„Nie jestem guru. Jestem człowiekiem, który nauczył się wracać."',
  todayBody: 'Dziś pracuję z liderami, przedsiębiorcami i mężczyznami, którzy — tak jak ja kiedyś — niosą na barkach odpowiedzialność za rodzinę i innych ludzi. Wierzę, że dobre relacje są ważniejsze niż sukces, którego nie ma z kim świętować. I że szczęśliwe życie nie zaczyna się, gdy wszystko się ułoży — zaczyna się, gdy przestajemy odkładać życie na później.',
  coda: 'Żyj. Tak naprawdę. Bo tu, na ziemi, masz tylko jedno życie.',
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
    bioP2:       raw?.bioP2       ?? F.bioP2,
    crackQuote:  raw?.crackQuote  ?? F.crackQuote,
    crackBody:   raw?.crackBody   ?? F.crackBody,
    trials:      raw?.trials?.length ? raw.trials : F.trials,
    awakenQuote: raw?.awakenQuote ?? F.awakenQuote,
    awakenBody:  raw?.awakenBody  ?? F.awakenBody,
    todayQuote:  raw?.todayQuote  ?? F.todayQuote,
    todayBody:   raw?.todayBody   ?? F.todayBody,
    coda:        raw?.coda        ?? F.coda,
    values:      raw?.values?.length ? raw.values : F.values,
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
          <div className="kim-grid">
            <div className="kim-photos reveal">
              <div className="kim-photo-main" style={{ backgroundImage: 'url(/krzysztof-wnek.jpg)' }} aria-label="Portret — Krzysztof Wnęk" />
              <div className="kim-photo-secondary" style={{ backgroundImage: 'url(/hero.jpg)' }} aria-label="Krzysztof Wnęk z książką Positive Intelligence" />
            </div>
            <div className="reveal" data-delay="1">
              <div className="eyebrow">01 <span className="em">—</span> Kim jestem</div>
              <div style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.18, color: 'var(--text)', letterSpacing: '-0.005em', margin: '22px 0 36px', textWrap: 'pretty', whiteSpace: 'pre-line' } as React.CSSProperties}>
                {d.bioQuote}
              </div>
              <div className="kim-text-cols">
                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Krzysztof Wnęk</strong> {d.bioP1.replace(/^Krzysztof Wnęk (to )?/, '')}
                </p>
                <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{d.bioP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-tight dark">
        <div className="wrap-narrow">
          <div className="eyebrow on-dark reveal">02 <span className="em">—</span> Pierwsze pęknięcie</div>
          <div className="crack-quote reveal" data-delay="1">{d.crackQuote}</div>
          <p className="crack-body reveal" data-delay="2">{d.crackBody}</p>
        </div>
      </section>

      <section className="sec light">
        <div className="wrap">
          <div className="eyebrow reveal">03 <span className="em">—</span> Droga prób</div>
          <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 'clamp(40px,5vw,72px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '18px 0 0', textWrap: 'balance' } as React.CSSProperties} className="reveal" data-delay="1">
            Trzy rozdziały, które mnie ukształtowały.
          </h2>
          <div className="steps-row reveal" data-delay="2">
            {d.trials.map((trial, i) => (
              <div key={i} className="step-col">
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <div className="title">{trial.title}</div>
                <div className="desc">{trial.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tight light">
        <div className="wrap">
          <div className="story-row">
            <div className="story-photo reveal" style={{ backgroundImage: 'url(/krzysztof-wnek.jpg)' }} aria-label="Portret — Krzysztof Wnęk" />
            <div className="reveal" data-delay="1">
              <div className="eyebrow">04 <span className="em">—</span> Przebudzenie</div>
              <div className="story-quote">{d.awakenQuote}</div>
              <p className="story-body">{d.awakenBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-tight light" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="story-row reverse">
            <div className="story-photo reveal" style={{ backgroundImage: 'url(/hero.jpg)' }} aria-label="Krzysztof Wnęk z książką Positive Intelligence" />
            <div className="reveal" data-delay="1">
              <div className="eyebrow">05 <span className="em">—</span> Dziś</div>
              <div className="story-quote">{d.todayQuote}</div>
              <p className="story-body">{d.todayBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="coda-text reveal" data-delay="1">{d.coda}</div>
        </div>
      </section>

      <section className="dark sec-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow on-dark reveal">06 <span className="em">—</span> Wartości</div>
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
