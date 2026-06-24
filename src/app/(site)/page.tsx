import type { Metadata } from 'next'
import Link from 'next/link'
import VideoTrigger from '@/components/VideoTrigger'
import TestimonialsCarousel, { type Slide } from '@/components/TestimonialsCarousel'
import YouTubeGrid from '@/components/YouTubeGrid'
import FinaleForm from '@/components/FinaleForm'
import JsonLd from '@/components/JsonLd'
import { client } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'Krzysztof Wnęk — Coach PQ, Mówca, Mentor | Positive Intelligence®',
  description: 'Pomagam liderom i menedżerom odzyskać radość i efektywność bez wypalenia. Certyfikowany Coach Positive Intelligence® (Stanford). 7-tygodniowy program PQ, coaching 1:1, prelekcje dla firm.',
  openGraph: {
    title: 'Krzysztof Wnęk — Coach PQ, Mówca, Mentor',
    description: 'Pomagam liderom odzyskać radość i efektywność. Certyfikowany Coach Positive Intelligence® (Stanford).',
    url: '/',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'Krzysztof Wnęk — Coach PQ' }],
  },
  alternates: { canonical: '/' },
}

/* ── Sanity types ── */

interface AuthCell { num: string; label: string }
interface SabStep  { num: string; title: string; desc: string }
interface Path     { tag: string; title: string; desc: string; price: string; priceSub?: string; ctaLabel: string; ctaHref: string }

interface HomepageData {
  heroLine1?: string; heroLine2Italic?: string; heroLine3?: string
  heroSub?: string; heroCtaText?: string; heroFreeTag?: string
  authority?: AuthCell[]
  problemHeading?: string; problemCards?: string[]
  transBefore?: string[]; transAfter?: string[]
  mainVideoId?: string; mainVideoDuration?: string
  sabHeading?: string; sabDesc?: string; sabSteps?: SabStep[]
  aboutQuote?: string; aboutBio1?: string; aboutBio2?: string
  paths?: Path[]
  finaleHeading?: string; finaleLead?: string; finaleNote?: string
}

/* ── Fallback content ── */

const F = {
  heroLine1: 'Wymieniasz',
  heroLine2Italic: 'stres',
  heroLine3: 'na sukces?',
  heroSub: 'Pomagam mężczyznom odzyskać radość i budować zdrowe relacje z bliskimi — bez rezygnowania z ambicji.',
  heroCtaText: 'Poznaj swoich Sabotażystów',
  heroFreeTag: 'darmowy test · 5 minut',
  authority: [
    { num: '500 tys', label: 'Absolwentów Positive Intelligence®' },
    { num: '52',      label: 'Odcinków na YouTube' },
    { num: 'WSB-NLU', label: 'Wykładowca' },
    { num: 'PQ',      label: 'Positive Intelligence® Coach' },
  ],
  problemHeading: 'Czy to brzmi znajomo?',
  problemCards: [
    'Osiągnąłeś, co chciałeś. Radości nie ma.',
    'Pracę zabierasz do domu. Dom „nosisz" w pracy.',
    'Osiągasz coraz więcej. Spełnienia brak…',
    'Obowiązki wypierają relacje. Chcesz, ale nie potrafisz.',
  ],
  transBefore: ['Przewlekły stres, reaktywność, rozdrażnienie', 'Późne noce, wczesne pobudki', 'Zaniedbane relacje', '„Będę szczęśliwy gdy…"'],
  transAfter:  ['Spokój mimo presji', 'Głęboka praca, prawdziwy odpoczynek', 'Uważność w domu i w pracy', 'Radość „w standardzie" codzienności'],
  mainVideoId: 'J_yUIu3ARmw',
  mainVideoDuration: '2:14',
  sabHeading: 'Zanim zaczniesz walczyć — poznaj wroga.',
  sabDesc: 'Test Sabotażystów Mentalnych opracowany przez Shirzada Chamine\'a wykładowcę Stanford University. Identyfikuje Twoje przekonania i nawyki, które sabotują Twoją efektywność, relacje i spokój.',
  sabSteps: [
    { num: 'I',   title: 'Szybki test',          desc: '5 min · online · 100% prywatnie' },
    { num: 'II',  title: 'Otrzymasz wyniki',      desc: 'Spersonalizowany profil sabotażystów na mail' },
    { num: 'III', title: 'Umów bezpłatną sesję', desc: '30-minutowe omówienie wyników na żywo' },
  ],
  aboutQuote: '„Nie prowadzę warsztatów. Rozpalam ludzi. Potem daję im narzędzia, żeby płonęli dalej."',
  aboutBio1: 'Trener fitnessu mentalnego i propagator Pozytywnej Inteligencji. Wspieram mężczyzn w budowaniu „antykruchości" — większego spokoju, odporności psychicznej i lepszych relacji, bez udawania twardziela w dynamicznych czasach.',
  aboutBio2: 'Od ponad 20 lat zgłębiam mechanizmy lęku i napięcia, ucząc się, jak nie pozwolić im przejąć kontroli nad życiem. Prywatnie szczęśliwy mąż jednej żony i ojciec 3 synów.',
  paths: [
    { tag: 'Program PQ · Premium',      title: '7-tygodniowy program',       desc: 'Dla osób znających angielski. Pełna metodologia PQ. Najgłębsza, najbardziej trwała transformacja.', price: '4 000 — 5 000 PLN', priceSub: 'lub 12 × 300 PLN', ctaLabel: 'Dowiedz się więcej →', ctaHref: '/dla-ciebie' },
    { tag: 'Coaching 1:1 · Indywidualny', title: 'Minimum 5 sesji',            desc: 'Bez angielskiego lub po programie. Narzędzia proaktywnego coachingu + metodologia PQ dopasowana do Twojej sytuacji.', price: 'Do ustalenia', ctaLabel: 'Zapytaj o sesję →', ctaHref: '/umow-rozmowe' },
    { tag: 'Prelekcje · B2B · Zespoły', title: 'Przemówienia i Warsztaty',   desc: 'Dla konferencji i zespołów korporacyjnych. Język biznesu — odporność decyzyjna, efektywność pod presją, mierzalne rezultaty.', price: 'Wycena indywidualna', ctaLabel: 'Zapytaj →', ctaHref: '/dla-firm' },
  ],
  finaleHeading: 'Gotowy na rozmowę, która zmienia wszystko?',
  finaleLead: 'Odbierz prezent — bezpłatny test Sabotażystów.',
  finaleNote: 'Bezpłatne · Wyniki na Twój e-mail · Test opracowany przez Shirzada Chamine\'a ze Stanford',
} satisfies Required<HomepageData>

/* ── Data fetching ── */

async function getPageData() {
  const [hp, testimonials] = await Promise.all([
    client.fetch<HomepageData | null>(`*[_type == "homepage"][0]`, {}, { next: { revalidate: 60 } }).catch(() => null),
    client.fetch<Slide[]>(
      `*[_type == "testimonial"] | order(order asc) { name, role, quote, vimeoId, "thumbnailUrl": thumbnail.asset->url }`,
      {},
      { next: { revalidate: 60 } }
    ).catch(() => []),
  ])
  return { hp, testimonials }
}

/* ── Page ── */

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.krzysztofwnek.pl/#person',
      name: 'Krzysztof Wnęk',
      jobTitle: 'Coach Positive Intelligence®, Mówca, Mentor',
      description: 'Certyfikowany Coach Positive Intelligence® (PQ), wykładowca WSB-NLU, mówca konferencyjny. Pomaga liderom i menedżerom odzyskać radość, spokój i efektywność.',
      url: 'https://www.krzysztofwnek.pl',
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
          description: 'Program stworzony przez Shirzada Chamine, wykładowcę Stanford University',
        },
      },
      memberOf: {
        '@type': 'Organization',
        name: 'Wyższa Szkoła Biznesu – National-Louis University',
        url: 'https://wsb.edu.pl',
      },
      knowsAbout: ['Positive Intelligence', 'Mental Fitness', 'Leadership Coaching', 'PQ Coaching', 'Mindfulness'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.krzysztofwnek.pl/#service',
      name: 'Positive Intelligence Coaching — Krzysztof Wnęk',
      description: 'Program PQ (7-tygodniowy trening mentalny), coaching 1:1 i prelekcje B2B dla liderów, menedżerów i firm. Metodologia Positive Intelligence® opracowana przez Shirzada Chamine ze Stanford.',
      url: 'https://www.krzysztofwnek.pl',
      provider: { '@id': 'https://www.krzysztofwnek.pl/#person' },
      serviceType: ['Mental Fitness Coaching', 'Executive Coaching', 'Keynote Speaking'],
      areaServed: { '@type': 'Country', name: 'Poland' },
      inLanguage: 'pl',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.krzysztofwnek.pl/#website',
      url: 'https://www.krzysztofwnek.pl',
      name: 'Krzysztof Wnęk — Coach PQ, Mówca, Mentor',
      inLanguage: 'pl',
      publisher: { '@id': 'https://www.krzysztofwnek.pl/#person' },
    },
  ],
}

export default async function HomePage() {
  const { hp, testimonials } = await getPageData()

  const h = {
    heroLine1:       hp?.heroLine1       ?? F.heroLine1,
    heroLine2Italic: hp?.heroLine2Italic ?? F.heroLine2Italic,
    heroLine3:       hp?.heroLine3       ?? F.heroLine3,
    heroSub:         hp?.heroSub         ?? F.heroSub,
    heroCtaText:     hp?.heroCtaText     ?? F.heroCtaText,
    heroFreeTag:     hp?.heroFreeTag     ?? F.heroFreeTag,
    authority:       hp?.authority?.length ? hp.authority : F.authority,
    problemHeading:  hp?.problemHeading  ?? F.problemHeading,
    problemCards:    hp?.problemCards?.length ? hp.problemCards : F.problemCards,
    transBefore:     hp?.transBefore?.length  ? hp.transBefore  : F.transBefore,
    transAfter:      hp?.transAfter?.length   ? hp.transAfter   : F.transAfter,
    mainVideoId:     hp?.mainVideoId     ?? F.mainVideoId,
    mainVideoDuration: hp?.mainVideoDuration ?? F.mainVideoDuration,
    sabHeading:      hp?.sabHeading      ?? F.sabHeading,
    sabDesc:         hp?.sabDesc         ?? F.sabDesc,
    sabSteps:        hp?.sabSteps?.length ? hp.sabSteps : F.sabSteps,
    aboutQuote:      hp?.aboutQuote      ?? F.aboutQuote,
    aboutBio1:       hp?.aboutBio1       ?? F.aboutBio1,
    aboutBio2:       hp?.aboutBio2       ?? F.aboutBio2,
    paths:           hp?.paths?.length   ? hp.paths   : F.paths,
    finaleHeading:   hp?.finaleHeading   ?? F.finaleHeading,
    finaleLead:      hp?.finaleLead      ?? F.finaleLead,
    finaleNote:      hp?.finaleNote      ?? F.finaleNote,
  }

  const slides = testimonials.length > 0 ? testimonials : undefined

  return (
    <>
      <JsonLd schema={PERSON_SCHEMA} />
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="display">
              {h.heroLine1} <br /><span className="it">{h.heroLine2Italic}</span> <br />{h.heroLine3}
            </h1>
            <p className="hero-sub">{h.heroSub}</p>
            <div className="hero-ctas">
              <div className="hero-cta-group">
                <a href="#umow" className="btn btn-teal">{h.heroCtaText}</a>
                <p className="hero-free-tag">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" />
                    <path d="M8 5v3.2l2.2 1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h.heroFreeTag}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="authority">
        <div className="wrap">
          <div className="authority-row">
            {h.authority.map((cell, i) => (
              <div key={i} className="auth-cell reveal" data-delay={String(i)}>
                <div className="auth-num">{cell.num}</div>
                <div className="auth-label">{cell.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec light">
        <div className="wrap">
          <div className="problem-head reveal">
            <div>
              <div className="eyebrow">01 <span className="em">—</span> Wyzwanie</div>
              <h2 className="display">
                {h.problemHeading.includes('brzmi')
                  ? <>Czy to <span className="it">brzmi</span> znajomo?</>
                  : h.problemHeading}
              </h2>
            </div>
          </div>
          <div className="problem-rule reveal" />
          <div className="problem-grid">
            {h.problemCards.map((text, i) => (
              <div key={i} className="problem-card reveal" data-delay={String(i)}>
                <div className="num">0{i + 1}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="sec dark">
        <div className="wrap-narrow">
          <div className="trans-grid">
            <div className="trans-col before reveal">
              <h3>Przed</h3>
              <ul>{h.transBefore.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="trans-col after reveal" data-delay="1">
              <h3>Po</h3>
              <ul>{h.transAfter.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
          <div className="trans-cta reveal">
            <Link href="/dla-ciebie" className="btn btn-outline-light">Sprawdź, czy to dla Ciebie</Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec dark" id="video">
        <div className="wrap-narrow">
          <div className="video-eyebrow reveal">
            <div className="eyebrow on-dark">02 <span className="em">—</span> Zobacz sam</div>
          </div>
          <h2 className="video-headline reveal" data-delay="1">
            <span className="nowrap">Jak Program PQ<sup>®</sup></span><br />
            <span className="it">może Ci pomóc?</span>
          </h2>
          <VideoTrigger videoId={h.mainVideoId} duration={h.mainVideoDuration} />
        </div>
      </section>

      {/* SABOTEURS */}
      <section className="sec light sabo" id="test">
        <div className="wrap">
          <div className="sabo-grid">
            <div className="reveal">
              <div className="eyebrow">03 <span className="em">—</span> Pierwszy krok zmiany</div>
              <h2>
                {h.sabHeading.includes('wroga')
                  ? <>Zanim zaczniesz walczyć — <br />poznaj <span className="it">wroga</span>.</>
                  : h.sabHeading}
              </h2>
              <p className="desc">{h.sabDesc}</p>
              <a href="#umow" className="btn btn-dark">Odbierz bezpłatny test</a>
              <p className="note">Zapisz się niżej · Wyniki dostaniesz na e-mail</p>
            </div>
            <div className="sabo-steps reveal" data-delay="2">
              {h.sabSteps.map((step, i) => (
                <div key={i} className="sabo-step">
                  <div className="n">{step.num}</div>
                  <div>
                    <div className="t">{step.title}</div>
                    <div className="d">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec light" id="o-mnie">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-portrait reveal" aria-label="Portret — Krzysztof Wnęk" />
            <div className="about-body reveal" data-delay="1">
              <div className="eyebrow">04 <span className="em">—</span> Kim jestem</div>
              <div className="about-quote">{h.aboutQuote}</div>
              <p className="about-bio">{h.aboutBio1}</p>
              <p className="about-bio">{h.aboutBio2}</p>
              <div className="about-cta">
                <Link href="/o-mnie" className="link-text">Przeczytaj pełną historię →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec dark" id="testimonials">
        <div className="wrap">
          <div className="testi-head reveal">
            <div className="eyebrow on-dark">05 <span className="em">—</span> Dlaczego warto</div>
            <h2>Dowody.</h2>
          </div>
        </div>
        <TestimonialsCarousel slides={slides} />
      </section>

      {/* PATHS */}
      <section className="sec light">
        <div className="wrap">
          <div className="paths-head reveal">
            <div className="eyebrow">06 <span className="em">—</span> Jak możemy współpracować</div>
            <h2>Trzy ścieżki.</h2>
            <p>Wszystkie drogi prowadzą do tego samego miejsca — jasności, energii i obecności.</p>
          </div>
          <div className="paths-grid">
            {h.paths.map((path, i) => (
              <div key={i} className="path reveal" data-delay={String(i)}>
                <div className="tag">{path.tag}</div>
                <div className="title">{path.title}</div>
                <p className="desc">{path.desc}</p>
                <div className="path-cta">
                  <Link href={path.ctaHref} className="link-text">{path.ctaLabel}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="sec dark" id="youtube">
        <div className="wrap">
          <div className="yt-head reveal">
            <div className="eyebrow on-dark">07 <span className="em">—</span> YouTube</div>
            <h2>Bezpłatnie. Na YouTube.</h2>
          </div>
          <YouTubeGrid />
          <div className="yt-foot reveal">
            <a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer" className="btn btn-outline-light">
              Zobacz wszystkie
            </a>
          </div>
        </div>
      </section>

      {/* FINALE */}
      <section className="light finale" id="umow">
        <div className="finale-inner">
          <div className="eyebrow reveal">08 <span className="em">—</span> Decyzja</div>
          <h2 className="reveal" data-delay="1">
            {h.finaleHeading.includes('rozmowę')
              ? <>Gotowy na <span className="it">rozmowę</span>,<br />która zmienia wszystko?</>
              : h.finaleHeading}
          </h2>
          <p className="finale-lead reveal" data-delay="2">{h.finaleLead}</p>
          <FinaleForm />
          <p className="finale-note reveal" data-delay="3">{h.finaleNote}</p>
        </div>
      </section>
    </>
  )
}
