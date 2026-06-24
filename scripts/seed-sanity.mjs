#!/usr/bin/env node
// Seed script — wypełnia Sanity Studio domyślną treścią ze strony
// Użycie:
//   SANITY_WRITE_TOKEN=xxx node scripts/seed-sanity.mjs
//
// Token: manage.sanity.io → projekt khvta4ou → API → Tokens → Add API token (Editor)

import { createClient } from '@sanity/client'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error('❌  Brak SANITY_WRITE_TOKEN. Ustaw zmienną środowiskową i spróbuj ponownie.')
  process.exit(1)
}

const client = createClient({
  projectId: 'khvta4ou',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const docs = [
  /* ── SETTINGS ── */
  {
    _id: 'singleton-settings',
    _type: 'settings',
    siteTitle: 'Krzysztof Wnęk — Mówca, Mentor, Coach PQ',
    siteDescription: 'Pomagam liderom odzyskać radość — bez rezygnacji ze sprawczości. Program PQ, coaching 1:1, prelekcje dla firm.',
    emailContact: 'krzysztof@pozytywnainteligencja.pl',
    convertkitFormId: '',
    youtubeUrl: 'https://www.youtube.com/@PozytywnaInteligencja',
    youtubeChannelId: 'UC49dTdbJNVs5NmYVdEGGrXw',
    linkedinUrl: 'https://www.linkedin.com/in/krzysztof-wnek/',
    facebookUrl: '',
    instagramUrl: '',
  },

  /* ── TESTIMONIALS ── */
  {
    _id: 'testimonial-pawel-bereska',
    _type: 'testimonial',
    order: 1,
    name: 'Paweł Bereska',
    role: 'Przedsiębiorca, AZYMUT.clothing',
    quote: '„Łatwiej mi zrozumieć konflikty w domu i w pracy. Dodatkowo łatwiej panuję nad lękami."',
    vimeoId: '1199662481',
  },
  {
    _id: 'testimonial-michal-caba',
    _type: 'testimonial',
    order: 2,
    name: 'Michał Caba',
    role: 'Przedsiębiorca, Auraflux',
    quote: '„Udział w programie pomógł mi być bardziej skupionym w codziennym życiu, w tym co robię. Praca z Krzysztofem, jego umiejętność zadawania dobrych, konkretnych pytań i uważność były bardzo pomocne."',
    vimeoId: '1199662483',
  },
  {
    _id: 'testimonial-marek-rybiec',
    _type: 'testimonial',
    order: 3,
    name: 'Marek Rybiec',
    role: '',
    quote: '„Krzyśka znam 20 lat. Jest to niesamowity człowiek, niesamowity obserwator i fantastyczny prowadzący."',
    vimeoId: '1199662482',
  },
  {
    _id: 'testimonial-pawel-marciniec',
    _type: 'testimonial',
    order: 4,
    name: 'Paweł Marciniec',
    role: '',
    quote: '„Wydłużył mi się „krótki lont" — jest mi się łatwiej opanować. Jestem spokojniejszy i bardziej skupiony na zadaniach."',
    vimeoId: '1199662539',
  },
  {
    _id: 'testimonial-marcin-szambelan',
    _type: 'testimonial',
    order: 5,
    name: 'Marcin Szambelan',
    role: '',
    quote: '„W wyniku stosowania poznanych technik w trakcie programu domownicy mi mówili: „Tata, jaka zmiana! Zupełnie inaczej reagujesz niż dotychczas." (…) Polecam i ufam, że ty również zmienisz swoje życie na lepsze."',
    vimeoId: '1199662480',
  },

  /* ── HOMEPAGE ── */
  {
    _id: 'singleton-homepage',
    _type: 'homepage',
    heroLine1: 'Wymieniasz',
    heroLine2Italic: 'stres',
    heroLine3: 'na sukces?',
    heroSub: 'Pomagam mężczyznom odzyskać radość i budować zdrowe relacje z bliskimi — bez rezygnowania z ambicji.',
    heroCtaText: 'Poznaj swoich Sabotażystów',
    heroFreeTag: 'darmowy test · 5 minut',
    authority: [
      { _key: 'a1', num: '500 tys', label: 'Absolwentów Positive Intelligence®' },
      { _key: 'a2', num: '52',      label: 'Odcinków na YouTube' },
      { _key: 'a3', num: 'WSB-NLU', label: 'Wykładowca' },
      { _key: 'a4', num: 'PQ',      label: 'Positive Intelligence® Coach' },
    ],
    problemHeading: 'Czy to brzmi znajomo?',
    problemCards: [
      'Osiągnąłeś, co chciałeś. Radości nie ma.',
      'Pracę zabierasz do domu. Dom „nosisz" w pracy.',
      'Osiągasz coraz więcej. Spełnienia brak…',
      'Obowiązki wypierają relacje. Chcesz, ale nie potrafisz.',
    ],
    transBefore: [
      'Przewlekły stres, reaktywność, rozdrażnienie',
      'Późne noce, wczesne pobudki',
      'Zaniedbane relacje',
      '„Będę szczęśliwy gdy…"',
    ],
    transAfter: [
      'Spokój mimo presji',
      'Głęboka praca, prawdziwy odpoczynek',
      'Uważność w domu i w pracy',
      'Radość „w standardzie" codzienności',
    ],
    mainVideoId: 'J_yUIu3ARmw',
    mainVideoDuration: '2:14',
    sabHeading: 'Zanim zaczniesz walczyć — poznaj wroga.',
    sabDesc: 'Test Sabotażystów Mentalnych opracowany przez Shirzada Chamine\'a wykładowcę Stanford University. Identyfikuje Twoje przekonania i nawyki, które sabotują Twoją efektywność, relacje i spokój.',
    sabSteps: [
      { _key: 's1', num: 'I',   title: 'Szybki test',          desc: '5 min · online · 100% prywatnie' },
      { _key: 's2', num: 'II',  title: 'Otrzymasz wyniki',      desc: 'Spersonalizowany profil sabotażystów na mail' },
      { _key: 's3', num: 'III', title: 'Umów bezpłatną sesję', desc: '30-minutowe omówienie wyników na żywo' },
    ],
    aboutQuote: '„Nie prowadzę warsztatów. Rozpalam ludzi. Potem daję im narzędzia, żeby płonęli dalej."',
    aboutBio1: 'Trener fitnessu mentalnego i propagator Pozytywnej Inteligencji. Wspieram mężczyzn w budowaniu „antykruchości" — większego spokoju, odporności psychicznej i lepszych relacji, bez udawania twardziela w dynamicznych czasach.',
    aboutBio2: 'Od ponad 20 lat zgłębiam mechanizmy lęku i napięcia, ucząc się, jak nie pozwolić im przejąć kontroli nad życiem. Prywatnie szczęśliwy mąż jednej żony i ojciec 3 synów.',
    paths: [
      { _key: 'p1', tag: 'Program PQ · Premium',       title: '7-tygodniowy program',     desc: 'Dla osób znających angielski. Pełna metodologia PQ. Najgłębsza, najbardziej trwała transformacja.', price: '4 000 — 5 000 PLN', priceSub: 'lub 12 × 300 PLN', ctaLabel: 'Dowiedz się więcej →', ctaHref: '/dla-ciebie' },
      { _key: 'p2', tag: 'Coaching 1:1 · Indywidualny', title: 'Minimum 5 sesji',           desc: 'Bez angielskiego lub po programie. Narzędzia proaktywnego coachingu + metodologia PQ dopasowana do Twojej sytuacji.', price: 'Do ustalenia', ctaLabel: 'Zapytaj o sesję →', ctaHref: '/umow-rozmowe' },
      { _key: 'p3', tag: 'Prelekcje · B2B · Zespoły',  title: 'Przemówienia i Warsztaty', desc: 'Dla konferencji i zespołów korporacyjnych. Język biznesu — odporność decyzyjna, efektywność pod presją, mierzalne rezultaty.', price: 'Wycena indywidualna', ctaLabel: 'Zapytaj →', ctaHref: '/dla-firm' },
    ],
    finaleHeading: 'Gotowy na rozmowę, która zmienia wszystko?',
    finaleLead: 'Odbierz prezent — bezpłatny test Sabotażystów.',
    finaleNote: 'Bezpłatne · Wyniki na Twój e-mail · Test opracowany przez Shirzada Chamine\'a ze Stanford',
  },

  /* ── PAGE: DLA CIEBIE ── */
  {
    _id: 'singleton-dla-ciebie',
    _type: 'pageDlaCiebie',
    heroH1: 'Zapewniasz\nwszystkim.\nKto zapewnia\nTobie?',
    heroLead: '7-tygodniowy program PQ dla liderów i menedżerów, którzy chcą osiągać na najwyższym poziomie — bez wypalania.',
    aboutHeading: 'Positive Intelligence® to nie pozytywne myślenie.',
    aboutP1: 'Opracowany przez Shirzada Chamine na Stanfordzie — Positive Intelligence® to naukowo udowodniony system, który uczy Twój mózg działania z mądrości zamiast reaktywności.',
    aboutP2: 'Zamiast walczyć ze sobą — uczysz się rozpoznawać sabotażystów i aktywować Sage. Program działa na poziomie neurologicznym. Dlatego efekty są trwałe.',
    aboutP3: 'Pracowałem z ponad 200 liderami. Widzę tę różnicę u każdego z nich.',
    steps: [
      { _key: 'st1', num: '01', title: 'Zrób test',           desc: 'Poznaj swoich głównych Sabotażystów mentalnych w bezpłatnym 5-minutowym teście. Zrozum działanie swoich wewnętrznych wrogów.' },
      { _key: 'st2', num: '02', title: 'Dołącz do programu', desc: '7 tygodni intensywnej pracy z aplikacją PQ, cotygodniowe sesje grupowe i indywidualne wsparcie po polsku.' },
      { _key: 'st3', num: '03', title: 'Poczuj zmianę',       desc: 'Buduj trwałe ścieżki neuronalne dla spokoju i jasności umysłu oraz najwyższej efektywności. Mierzalna poprawa, nie motywacja.' },
    ],
    priceLabel: 'Program PQ · 7 tygodni',
    priceText: 'Cenę omawiamy indywidualnie.',
    faq: [
      { _key: 'f1', q: 'Czy muszę znać angielski?',               a: 'Program PQ jest prowadzony w oparciu o aplikację PQ po angielsku, ale materiały można powtarzać i są w pełni zrozumiałe nawet przy średniej znajomości języka (wystarczy znajomość bierna). Poza aplikacją pracuję z Tobą po polsku przez całe 7 tygodni.' },
      { _key: 'f2', q: 'Ile czasu zajmuje program tygodniowo?',    a: 'Potrzebujesz dziennie 15 minut na wykonanie ćwiczeń z aplikacją. Poza tym 1 raz w tygodniu masz do obejrzenia webinar (~1h). Również 1 raz w tygodniu mamy cotygodniowe sesje grupowe (do 1h). To nie jest kurs — to codzienność.' },
      { _key: 'f3', q: 'Czy to jest coaching?',                    a: 'To coś więcej. Program PQ łączy neuronaukę, nauki o efektywności, psychologię behawioralno-poznawczą oraz psychologię pozytywną. Dzięki tej metodzie budujesz dosłownie nowe ścieżki neuronalne. Efekty są mierzalne i trwałe.' },
      { _key: 'f4', q: 'Dla kogo jest Program PQ?',                a: 'Dla liderów, menedżerów i przedsiębiorców, którzy osiągnęli sukces — ale odkryli, że coś im umyka. Radość, spokój, obecność. Umów rozmowę — sprawdzimy razem.' },
      { _key: 'f5', q: 'Czy mogę płacić ratalnie?',               a: 'Tak — jest możliwość płatności ratalnych łącznie do 12 rat. Szczegóły omówimy podczas rozmowy.' },
      { _key: 'f6', q: 'Co to właściwie jest PQ?',                 a: 'PQ (Positive Intelligence® Quotient) to iloraz inteligencji pozytywnej — wskaźnik kondycji psychicznej, który mierzy zdolność radzenia sobie z wyzwaniami z poziomu spokoju i odporności zamiast pod wpływem stresu.' },
    ],
  },

  /* ── PAGE: DLA FIRM ── */
  {
    _id: 'singleton-dla-firm',
    _type: 'pageDlaFirm',
    heroH1: 'Siła zespołu tkwi\nw różnorodności\noraz inteligencji\npozytywnej.',
    heroLead: 'Pomagam kadrze zarządzającej i zespołom działać skuteczniej i spokojniej — nawet w bardzo dynamicznych warunkach.',
    costHeading: 'Najdroższe błędy w firmie zaczynają się w głowie.',
    costP1: 'Gdy liderzy działają z sabotażystami w głowie — każda decyzja kosztuje więcej energii, trwa dłużej i generuje błędy. Konflikty eskalują. Zaangażowanie spada. Rotacja rośnie.',
    costP2: 'Program PQ dla zespołów to nie team building. To zmiana sposobu myślenia — u każdego uczestnika i w dynamice grupy. Nowa kultura skuteczności działania.',
    formats: [
      { _key: 'fm1', label: 'Format A', title: 'Power Speech',       desc: '45–90 minut na scenie konferencyjnej lub dla Twojego zespołu. Inspirujące wystąpienie, które zmienia perspektywę i daje nowe możliwości wzrostu potencjału zespołu. Brief 15 min, wycena 48h.', ctaLabel: 'Wycena indywidualna →' },
      { _key: 'fm2', label: 'Format B', title: 'Program Zespołowy', desc: '7-tygodniowy program PQ dla zespołu (10–30 osób). Cotygodniowe sesje, aplikacja PQ, wsparcie coachingowe. Efekty po pierwszym tygodniu.', ctaLabel: 'Wycena indywidualna →' },
    ],
    roiStats: [
      { _key: 'r1', num: '↑ 37%', label: 'Poprawa wydajności\npod presją' },
      { _key: 'r2', num: '↑ 54%', label: 'Lepsza komunikacja\nw zespołach' },
      { _key: 'r3', num: '↑ 31%', label: 'Jakość podejmowania\ndecyzji' },
      { _key: 'r4', num: '↑ 3×',  label: 'Zaangażowanie\npo programie' },
    ],
    roiSource: 'Dane z badań Positive Intelligence® · próba 50 000+ uczestników',
  },

  /* ── PAGE: O MNIE ── */
  {
    _id: 'singleton-o-mnie',
    _type: 'pageOMnie',
    heroH1: 'To nie historia \nsukcesu. \nTo historia \nprzebudzenia.',
    bioQuote: '„Nie prowadzę warsztatów.\nDam Ci ogień.\nPotem dam Ci też narzędzia,\nżebyś płonął dalej."',
    bioP1: 'Krzysztof Wnęk to inspirator, coach PQ, wykładowca WSB i mówca konferencyjny, który od ponad 25 lat pracuje w dynamicznych środowiskach projektowych z wieloma liderami w Polsce.',
    bioP2: 'Łączy energię prelekcji ze sceny z uważnością coacha PQ rozmów indywidualnych. Interesuje go praktyka, a nie teoria w myśl przekonania, że „skuteczność jest miarą prawdy".',
    values: [
      { _key: 'v1', label: 'Wiara',           title: 'Wiara',          desc: 'W człowieka. W jego zdolność do zmiany. W to, że każdy ma w sobie Mędrca.' },
      { _key: 'v2', label: 'Honor',           title: 'Mów co myślisz', desc: 'Rób, co mówisz. Bez skrótów.' },
      { _key: 'v3', label: 'Odwaga',          title: 'Zmierz się',     desc: 'Gotowość do zmierzenia się z tym, co niewygodne — najpierw w sobie.' },
      { _key: 'v4', label: 'Lojalność',       title: 'Wobec prawdy',   desc: 'Wobec ludzi, którzy Ci ufają. Wobec procesu. Wobec prawdy.' },
      { _key: 'v5', label: 'Odpowiedzialność', title: 'Jesteś autorem', desc: 'Nie jesteś ofiarą okoliczności. Jesteś autorem swojego życia.' },
    ],
  },

  /* ── PAGE: UMÓW ROZMOWĘ ── */
  {
    _id: 'singleton-umow-rozmowe',
    _type: 'pageUmowRozmowe',
    heroH1Line1: '30 minut.',
    heroH1Line2: 'Bez zobowiązań.',
    heroDesc: 'To nie jest rozmowa sprzedażowa. To 30-minutowa mapa tego, gdzie jesteś i gdzie są Twoje blokady.',
    discoveryCols: [
      { _key: 'd1', label: 'Twoja sytuacja',   desc: 'Mapujemy, gdzie jesteś — zawodowo, osobowo, energetycznie. Luźno i szczerze.' },
      { _key: 'd2', label: 'Twoi sabotażyści', desc: 'Jeśli zrobiłeś test, razem omówimy Twoje wyniki i pomogę Ci zobaczyć, gdzie najbardziej utrudniają Twoje życie.' },
      { _key: 'd3', label: 'Twoja decyzja',    desc: 'Jasna rekomendacja — program, coaching lub nic z tego. Mówię wprost i nie obiecuję na wyrost.' },
    ],
    contactEmail: 'krzysztof@pozytywnainteligencja.pl',
    contactPlaceholder: 'Tymczasem napisz bezpośrednio — odpowiem w ciągu 24 godzin i razem znajdziemy termin.',
    contactCtaText: 'Napisz do mnie →',
  },
]

console.log(`\n🌱 Seedowanie ${docs.length} dokumentów do Sanity (projekt: khvta4ou)...\n`)

const tx = client.transaction()
for (const doc of docs) {
  tx.createOrReplace(doc)
}

try {
  await tx.commit()
  console.log('✅ Wszystkie dokumenty utworzone/zaktualizowane pomyślnie!')
  console.log('\nOtwórz Studio i odśwież — znajdziesz wszystkie treści gotowe do edycji.')
} catch (err) {
  console.error('❌ Błąd:', err.message)
  process.exit(1)
}
