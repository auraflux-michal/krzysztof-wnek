import { defineType, defineField, defineArrayMember } from 'sanity'

/* ── Shared helper types ── */

const authCell = defineArrayMember({
  type: 'object',
  name: 'authCell',
  title: 'Komórka',
  fields: [
    defineField({ name: 'num', title: 'Wartość (np. "500 tys")', type: 'string' }),
    defineField({ name: 'label', title: 'Opis', type: 'string' }),
  ],
  preview: { select: { title: 'num', subtitle: 'label' } },
})

const stringItem = defineArrayMember({ type: 'string' })

const sabStep = defineArrayMember({
  type: 'object',
  name: 'sabStep',
  title: 'Krok',
  fields: [
    defineField({ name: 'num', title: 'Numer (I / II / III)', type: 'string' }),
    defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
    defineField({ name: 'desc', title: 'Opis', type: 'string' }),
  ],
  preview: { select: { title: 'title', subtitle: 'num' } },
})

/* ── Settings (global) ── */

const settings = defineType({
  name: 'settings',
  title: 'Ustawienia strony',
  type: 'document',
  groups: [
    { name: 'general', title: 'Ogólne' },
    { name: 'social', title: 'Social media' },
    { name: 'forms', title: 'Formularze' },
  ],
  fields: [
    defineField({ name: 'siteTitle', title: 'Tytuł strony', type: 'string', group: 'general' }),
    defineField({ name: 'siteDescription', title: 'Opis strony (SEO)', type: 'text', group: 'general' }),
    defineField({ name: 'emailContact', title: 'E-mail kontaktowy', type: 'string', group: 'general' }),
    defineField({ name: 'convertkitFormId', title: 'ConvertKit Form ID', type: 'string', group: 'forms' }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url', group: 'social' }),
    defineField({ name: 'youtubeChannelId', title: 'YouTube Channel ID', type: 'string', group: 'social' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url', group: 'social' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url', group: 'social' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url', group: 'social' }),
  ],
})

/* ── Testimonial ── */

const testimonial = defineType({
  name: 'testimonial',
  title: 'Opinia',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Imię i nazwisko', type: 'string' }),
    defineField({ name: 'role', title: 'Stanowisko', type: 'string' }),
    defineField({ name: 'quote', title: 'Cytat', type: 'text' }),
    defineField({ name: 'vimeoId', title: 'Vimeo Video ID', type: 'string' }),
    defineField({
      name: 'thumbnail',
      title: 'Miniatura (jeśli puste, użyty zostanie automatyczny kadr z Vimeo)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'order', title: 'Kolejność', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'thumbnail' } },
})

/* ── Homepage ── */

const homepage = defineType({
  name: 'homepage',
  title: 'Strona główna',
  type: 'document',
  groups: [
    { name: 'hero', title: '🦸 Hero' },
    { name: 'authority', title: '📊 Autorytety' },
    { name: 'problem', title: '❓ Problem' },
    { name: 'transformation', title: '🔄 Transformacja' },
    { name: 'video', title: '🎬 Główny film' },
    { name: 'saboteurs', title: '👹 Sabotażyści' },
    { name: 'about', title: '👤 O mnie' },
    { name: 'paths', title: '🛤️ Ścieżki' },
    { name: 'youtube', title: '📺 YouTube' },
    { name: 'finale', title: '🎯 Finale' },
  ],
  fields: [
    /* Hero */
    defineField({ name: 'heroLine1', title: 'Hero · linia 1 (np. "Wymieniasz")', type: 'string', group: 'hero' }),
    defineField({ name: 'heroLine2Italic', title: 'Hero · linia 2 italic (np. "stres")', type: 'string', group: 'hero' }),
    defineField({ name: 'heroLine3', title: 'Hero · linia 3 (np. "na sukces?")', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSub', title: 'Hero · podnagłówek', type: 'text', group: 'hero' }),
    defineField({ name: 'heroCtaText', title: 'Hero · tekst przycisku CTA', type: 'string', group: 'hero' }),
    defineField({ name: 'heroFreeTag', title: 'Hero · tekst przy przycisku', type: 'string', group: 'hero' }),

    /* Authority */
    defineField({
      name: 'authority',
      title: 'Komórki autorytetu',
      type: 'array',
      group: 'authority',
      of: [authCell],
      validation: (r) => r.max(4),
    }),

    /* Problem */
    defineField({ name: 'problemHeading', title: 'Nagłówek problemu', type: 'string', group: 'problem' }),
    defineField({
      name: 'problemCards',
      title: 'Karty problemów',
      type: 'array',
      group: 'problem',
      of: [stringItem],
      validation: (r) => r.max(4),
    }),

    /* Transformation */
    defineField({
      name: 'transBefore',
      title: 'Transformacja — PRZED (lista)',
      type: 'array',
      group: 'transformation',
      of: [stringItem],
    }),
    defineField({
      name: 'transAfter',
      title: 'Transformacja — PO (lista)',
      type: 'array',
      group: 'transformation',
      of: [stringItem],
    }),

    /* Video */
    defineField({ name: 'videoHeading', title: 'Film · nagłówek sekcji (np. "Jak Program PQ® może Ci pomóc?")', type: 'string', group: 'video' }),
    defineField({ name: 'mainVimeoId', title: 'Film · Vimeo ID (np. 1213568679)', type: 'string', group: 'video' }),
    defineField({ name: 'mainVideoDuration', title: 'Film · czas trwania (np. "2:14")', type: 'string', group: 'video' }),
    defineField({
      name: 'mainVideoThumbnail',
      title: 'Film · miniatura (jeśli puste — domyślny placeholder)',
      type: 'image',
      options: { hotspot: true },
      group: 'video',
    }),
    defineField({ name: 'mainVideoId', title: 'Film · stare pole YT (nieużywane)', type: 'string', group: 'video', hidden: true }),

    /* Saboteurs */
    defineField({ name: 'sabHeading', title: 'Sabotażyści · nagłówek', type: 'string', group: 'saboteurs' }),
    defineField({ name: 'sabDesc', title: 'Sabotażyści · opis', type: 'array', group: 'saboteurs', of: [defineArrayMember({ type: 'block' })] }),
    defineField({ name: 'sabSteps', title: 'Sabotażyści · kroki', type: 'array', group: 'saboteurs', of: [sabStep] }),
    defineField({ name: 'sabCtaText', title: 'Sabotażyści · tekst przycisku CTA', type: 'string', group: 'saboteurs' }),
    defineField({ name: 'sabCtaNote', title: 'Sabotażyści · tekst pod przyciskiem', type: 'string', group: 'saboteurs' }),

    /* About */
    defineField({ name: 'aboutQuote', title: 'O mnie · cytat', type: 'text', group: 'about' }),
    defineField({ name: 'aboutBio1', title: 'O mnie · bio paragraf 1', type: 'array', group: 'about', of: [defineArrayMember({ type: 'block' })] }),
    defineField({ name: 'aboutCtaText', title: 'O mnie · tekst linku "Przeczytaj historię"', type: 'string', group: 'about' }),

    /* Paths */
    defineField({ name: 'pathsHeading', title: 'Ścieżki · nagłówek (np. "Trzy ścieżki.")', type: 'string', group: 'paths' }),
    defineField({ name: 'pathsSubheading', title: 'Ścieżki · podnagłówek (zdanie pod nagłówkiem)', type: 'string', group: 'paths' }),
    defineField({
      name: 'paths',
      title: 'Ścieżki współpracy',
      type: 'array',
      group: 'paths',
      of: [defineArrayMember({
        type: 'object',
        name: 'path',
        title: 'Ścieżka',
        fields: [
          defineField({ name: 'tag', title: 'Tag (np. "Program PQ · Premium")', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
          defineField({ name: 'price', title: 'Cena', type: 'string' }),
          defineField({ name: 'priceSub', title: 'Podpis ceny (opcjonalne)', type: 'string' }),
          defineField({ name: 'ctaLabel', title: 'Tekst linku CTA', type: 'string' }),
          defineField({ name: 'ctaHref', title: 'Link CTA (np. /dla-ciebie)', type: 'string' }),
        ],
        preview: { select: { title: 'title', subtitle: 'price' } },
      })],
      validation: (r) => r.max(3),
    }),

    /* YouTube */
    defineField({ name: 'ytHeading', title: 'YouTube · nagłówek sekcji (np. "Bezpłatnie. Na YouTube.")', type: 'string', group: 'youtube' }),
    defineField({
      name: 'ytVideos',
      title: 'YouTube · konkretne filmy (opcjonalne, nadpisuje RSS)',
      type: 'array',
      group: 'youtube',
      of: [defineArrayMember({
        type: 'object',
        name: 'ytVideo',
        title: 'Film',
        fields: [
          defineField({ name: 'label', title: 'Etykieta (np. "NAJNOWSZE")', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'url', title: 'URL YouTube (np. https://youtu.be/...)', type: 'url' }),
        ],
        preview: { select: { title: 'title', subtitle: 'label' } },
      })],
      validation: (r) => r.max(3),
    }),

    /* Finale */
    defineField({ name: 'finaleHeading', title: 'Finale · nagłówek', type: 'string', group: 'finale' }),
    defineField({ name: 'finaleLead', title: 'Finale · lead', type: 'string', group: 'finale' }),
    defineField({ name: 'finaleNote', title: 'Finale · mała nota', type: 'string', group: 'finale' }),
  ],
})

/* ── Page: Dla Ciebie ── */

const pageDlaCiebie = defineType({
  name: 'pageDlaCiebie',
  title: 'Strona: Dla Ciebie',
  type: 'document',
  groups: [
    { name: 'hero', title: '🦸 Hero' },
    { name: 'about', title: '📖 Co to jest' },
    { name: 'formats', title: '🔀 Dwa formaty' },
    { name: 'steps', title: '📋 Kroki' },
    { name: 'faq', title: '❓ FAQ' },
    { name: 'cta', title: '🎯 CTA' },
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · nagłówek H1 (4 linie, każda nową linią)', type: 'text', group: 'hero' }),
    defineField({ name: 'heroLead', title: 'Hero · lead', type: 'text', group: 'hero' }),
    defineField({ name: 'aboutHeading', title: 'Co to jest · nagłówek', type: 'string', group: 'about' }),
    defineField({ name: 'aboutP1', title: 'Co to jest · paragraf 1', type: 'array', group: 'about', of: [defineArrayMember({ type: 'block' })] }),
    defineField({ name: 'formatsHeading', title: 'Dwa formaty · nagłówek', type: 'string', group: 'formats' }),
    defineField({
      name: 'formats',
      title: 'Dwa formaty (karty)',
      type: 'array',
      group: 'formats',
      of: [defineArrayMember({
        type: 'object',
        name: 'dcFormat',
        title: 'Format',
        fields: [
          defineField({ name: 'label', title: 'Label (np. "Program PQ · Premium")', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł (możesz użyć \\n by złamać linię)', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
          defineField({ name: 'ctaLabel', title: 'Tekst linku', type: 'string' }),
          defineField({ name: 'ctaHref', title: 'Link (np. "#kroki" lub "/umow-rozmowe")', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'title' } },
      })],
    }),
    defineField({ name: 'stepsHeading', title: 'Trzy kroki · nagłówek', type: 'string', group: 'steps' }),
    defineField({
      name: 'steps',
      title: 'Kroki (01, 02, 03)',
      type: 'array',
      group: 'steps',
      of: [defineArrayMember({
        type: 'object',
        name: 'step',
        title: 'Krok',
        fields: [
          defineField({ name: 'num', title: 'Numer (01/02/03)', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
        ],
        preview: { select: { title: 'title', subtitle: 'num' } },
      })],
    }),
    defineField({
      name: 'faq',
      title: 'Pytania i odpowiedzi',
      type: 'array',
      group: 'faq',
      of: [defineArrayMember({
        type: 'object',
        name: 'faqItem',
        title: 'Pytanie',
        fields: [
          defineField({ name: 'q', title: 'Pytanie', type: 'string' }),
          defineField({ name: 'a', title: 'Odpowiedź', type: 'text' }),
        ],
        preview: { select: { title: 'q' } },
      })],
    }),
    defineField({ name: 'testHeading', title: 'Sekcja test · nagłówek', type: 'string', group: 'cta' }),
    defineField({ name: 'testNote', title: 'Sekcja test · podpis (np. "5 minut · bezpłatnie · wyniki na e-mail")', type: 'string', group: 'cta' }),
    defineField({ name: 'testButtonText', title: 'Sekcja test · tekst przycisku', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHeading', title: 'Końcowy CTA · nagłówek', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaButtonText', title: 'Końcowy CTA · tekst przycisku', type: 'string', group: 'cta' }),
  ],
})

/* ── Page: Dla Firm ── */

const pageDlaFirm = defineType({
  name: 'pageDlaFirm',
  title: 'Strona: Dla Firm',
  type: 'document',
  groups: [
    { name: 'hero', title: '🦸 Hero' },
    { name: 'cost', title: '💸 Koszt' },
    { name: 'formats', title: '📋 Formaty' },
    { name: 'roi', title: '📈 ROI' },
    { name: 'dowody', title: '🎬 Dowody' },
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · H1', type: 'text', group: 'hero' }),
    defineField({ name: 'heroLead', title: 'Hero · lead', type: 'text', group: 'hero' }),
    defineField({ name: 'costHeading', title: 'Koszt · nagłówek', type: 'string', group: 'cost' }),
    defineField({ name: 'costP1', title: 'Koszt · paragraf 1', type: 'array', group: 'cost', of: [defineArrayMember({ type: 'block' })] }),
    defineField({ name: 'formatsHeading', title: 'Formaty · nagłówek', type: 'string', group: 'formats' }),
    defineField({
      name: 'formats',
      title: 'Formaty (A i B)',
      type: 'array',
      group: 'formats',
      of: [defineArrayMember({
        type: 'object',
        name: 'format',
        title: 'Format',
        fields: [
          defineField({ name: 'label', title: 'Etykieta (np. "Format A")', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
          defineField({ name: 'ctaLabel', title: 'Tekst linku', type: 'string' }),
        ],
        preview: { select: { title: 'title', subtitle: 'label' } },
      })],
    }),
    defineField({ name: 'roiHeading', title: 'ROI · nagłówek', type: 'string', group: 'roi' }),
    defineField({
      name: 'roiStats',
      title: 'Statystyki ROI',
      type: 'array',
      group: 'roi',
      of: [defineArrayMember({
        type: 'object',
        name: 'roiStat',
        title: 'Statystyka',
        fields: [
          defineField({ name: 'num', title: 'Wartość (np. "↑ 37%")', type: 'string' }),
          defineField({ name: 'label', title: 'Opis', type: 'string' }),
        ],
        preview: { select: { title: 'num', subtitle: 'label' } },
      })],
    }),
    defineField({ name: 'roiSource', title: 'ROI · źródło danych', type: 'string', group: 'roi' }),
    defineField({ name: 'dowodyHeading', title: 'Dowody · nagłówek', type: 'string', group: 'dowody' }),
    defineField({ name: 'dowodyVimeoId', title: 'Dowody · Vimeo ID (np. 1213568679)', type: 'string', group: 'dowody' }),
    defineField({
      name: 'dowodyThumbnail',
      title: 'Dowody · miniatura (jeśli puste — automatyczny kadr z Vimeo)',
      type: 'image',
      options: { hotspot: true },
      group: 'dowody',
    }),
    defineField({ name: 'dowodyQuote', title: 'Dowody · cytat', type: 'text', group: 'dowody' }),
    defineField({ name: 'dowodyName', title: 'Dowody · imię i nazwisko', type: 'string', group: 'dowody' }),
    defineField({ name: 'dowodyRole', title: 'Dowody · stanowisko', type: 'string', group: 'dowody' }),
  ],
})

/* ── Page: O Mnie ── */

const pageOMnie = defineType({
  name: 'pageOMnie',
  title: 'Strona: O Mnie',
  type: 'document',
  groups: [
    { name: 'hero', title: '🦸 Hero' },
    { name: 'bio', title: '👤 Bio' },
    { name: 'timeline', title: '📅 Oś czasu' },
    { name: 'values', title: '⚔️ Wartości' },
    { name: 'media', title: '🎬 Media (filmy)' },
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · H1', type: 'text', group: 'hero' }),
    defineField({ name: 'bioQuote', title: 'Bio · cytat', type: 'text', group: 'bio' }),
    defineField({ name: 'bioP1', title: 'Bio · paragraf 1', type: 'array', group: 'bio', of: [defineArrayMember({ type: 'block' })] }),
    defineField({
      name: 'timeline',
      title: 'Oś czasu',
      type: 'array',
      group: 'timeline',
      of: [defineArrayMember({
        type: 'object',
        name: 'tlItem',
        title: 'Wydarzenie',
        fields: [
          defineField({ name: 'year', title: 'Rok', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
        ],
        preview: { select: { title: 'title', subtitle: 'year' } },
      })],
    }),
    defineField({ name: 'sceneVimeoId', title: 'Film 1 · Vimeo ID (Scena / Konferencja)', type: 'string', group: 'media' }),
    defineField({ name: 'sceneLabel', title: 'Film 1 · etykieta (np. "Scena · Konferencja")', type: 'string', group: 'media' }),
    defineField({
      name: 'sceneThumbnail',
      title: 'Film 1 · miniatura (jeśli puste — automatyczny kadr z Vimeo)',
      type: 'image',
      options: { hotspot: true },
      group: 'media',
    }),
    defineField({ name: 'studioVimeoId', title: 'Film 2 · Vimeo ID (Studio WSB)', type: 'string', group: 'media' }),
    defineField({ name: 'studioLabel', title: 'Film 2 · etykieta (np. "Studio WSB")', type: 'string', group: 'media' }),
    defineField({
      name: 'studioThumbnail',
      title: 'Film 2 · miniatura (jeśli puste — automatyczny kadr z Vimeo)',
      type: 'image',
      options: { hotspot: true },
      group: 'media',
    }),
    defineField({ name: 'valuesHeading', title: 'Wartości · nagłówek (np. "Kodeks rycerza.")', type: 'string', group: 'values' }),
    defineField({
      name: 'values',
      title: 'Wartości (kodeks rycerza)',
      type: 'array',
      group: 'values',
      of: [defineArrayMember({
        type: 'object',
        name: 'valueCell',
        title: 'Wartość',
        fields: [
          defineField({ name: 'label', title: 'Label (np. "Wiara")', type: 'string' }),
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
        ],
        preview: { select: { title: 'label' } },
      })],
    }),
  ],
})

/* ── Page: Umów Rozmowę ── */

const pageUmowRozmowe = defineType({
  name: 'pageUmowRozmowe',
  title: 'Strona: Umów Rozmowę',
  type: 'document',
  groups: [
    { name: 'hero', title: '🦸 Hero' },
    { name: 'discovery', title: '🔍 Discovery' },
    { name: 'contact', title: '📩 Kontakt' },
  ],
  fields: [
    defineField({ name: 'heroH1Line1', title: 'Hero · linia 1 (np. "30 minut.")', type: 'string', group: 'hero' }),
    defineField({ name: 'heroH1Line2', title: 'Hero · linia 2 italic (np. "Bez zobowiązań.")', type: 'string', group: 'hero' }),
    defineField({ name: 'heroDesc', title: 'Hero · opis', type: 'text', group: 'hero' }),
    defineField({
      name: 'discoveryCols',
      title: 'Kolumny Discovery',
      type: 'array',
      group: 'discovery',
      of: [defineArrayMember({
        type: 'object',
        name: 'discCol',
        title: 'Kolumna',
        fields: [
          defineField({ name: 'label', title: 'Label (np. "Twoja sytuacja")', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
        ],
        preview: { select: { title: 'label' } },
      })],
    }),
    defineField({ name: 'contactEmail', title: 'Kontakt · e-mail (do mailto:)', type: 'string', group: 'contact' }),
    defineField({ name: 'contactPlaceholder', title: 'Kontakt · tekst zastępczy dla kalendarza', type: 'text', group: 'contact' }),
    defineField({ name: 'contactCtaText', title: 'Kontakt · tekst przycisku', type: 'string', group: 'contact' }),
  ],
})

export const schemaTypes = [
  settings,
  testimonial,
  homepage,
  pageDlaCiebie,
  pageDlaFirm,
  pageOMnie,
  pageUmowRozmowe,
]
