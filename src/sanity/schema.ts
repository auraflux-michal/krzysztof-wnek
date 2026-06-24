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
    { name: 'video', title: '🎬 Wideo' },
    { name: 'saboteurs', title: '👹 Sabotażyści' },
    { name: 'about', title: '👤 O mnie' },
    { name: 'paths', title: '🛤️ Ścieżki' },
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
    defineField({ name: 'mainVideoId', title: 'Główny film · YouTube ID', type: 'string', group: 'video' }),
    defineField({ name: 'mainVideoDuration', title: 'Główny film · czas trwania (np. "2:14")', type: 'string', group: 'video' }),

    /* Saboteurs */
    defineField({ name: 'sabHeading', title: 'Sabotażyści · nagłówek', type: 'string', group: 'saboteurs' }),
    defineField({ name: 'sabDesc', title: 'Sabotażyści · opis', type: 'text', group: 'saboteurs' }),
    defineField({ name: 'sabSteps', title: 'Sabotażyści · kroki', type: 'array', group: 'saboteurs', of: [sabStep] }),

    /* About */
    defineField({ name: 'aboutQuote', title: 'O mnie · cytat', type: 'text', group: 'about' }),
    defineField({ name: 'aboutBio1', title: 'O mnie · bio paragraf 1', type: 'text', group: 'about' }),
    defineField({ name: 'aboutBio2', title: 'O mnie · bio paragraf 2', type: 'text', group: 'about' }),

    /* Paths */
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
    { name: 'steps', title: '📋 Kroki' },
    { name: 'price', title: '💰 Cena' },
    { name: 'faq', title: '❓ FAQ' },
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · nagłówek H1 (4 linie, każda nową linią)', type: 'text', group: 'hero' }),
    defineField({ name: 'heroLead', title: 'Hero · lead', type: 'text', group: 'hero' }),
    defineField({ name: 'aboutHeading', title: 'Co to jest · nagłówek', type: 'string', group: 'about' }),
    defineField({ name: 'aboutP1', title: 'Co to jest · paragraf 1', type: 'text', group: 'about' }),
    defineField({ name: 'aboutP2', title: 'Co to jest · paragraf 2', type: 'text', group: 'about' }),
    defineField({ name: 'aboutP3', title: 'Co to jest · paragraf 3', type: 'text', group: 'about' }),
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
    defineField({ name: 'priceLabel', title: 'Inwestycja · label', type: 'string', group: 'price' }),
    defineField({ name: 'priceText', title: 'Inwestycja · tekst ceny', type: 'string', group: 'price' }),
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
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · H1', type: 'text', group: 'hero' }),
    defineField({ name: 'heroLead', title: 'Hero · lead', type: 'text', group: 'hero' }),
    defineField({ name: 'costHeading', title: 'Koszt · nagłówek', type: 'string', group: 'cost' }),
    defineField({ name: 'costP1', title: 'Koszt · paragraf 1', type: 'text', group: 'cost' }),
    defineField({ name: 'costP2', title: 'Koszt · paragraf 2', type: 'text', group: 'cost' }),
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
    { name: 'values', title: '⚔️ Wartości' },
  ],
  fields: [
    defineField({ name: 'heroH1', title: 'Hero · H1', type: 'text', group: 'hero' }),
    defineField({ name: 'bioQuote', title: 'Bio · cytat', type: 'text', group: 'bio' }),
    defineField({ name: 'bioP1', title: 'Bio · paragraf 1', type: 'text', group: 'bio' }),
    defineField({ name: 'bioP2', title: 'Bio · paragraf 2', type: 'text', group: 'bio' }),
    defineField({ name: 'crackQuote', title: 'Rozdział 02 (Pierwsze pęknięcie) · cytat', type: 'string', group: 'bio' }),
    defineField({ name: 'crackBody', title: 'Rozdział 02 (Pierwsze pęknięcie) · tekst', type: 'text', group: 'bio' }),
    defineField({
      name: 'trials',
      title: 'Rozdział 03 (Droga prób) · trzy etapy',
      type: 'array',
      group: 'bio',
      of: [defineArrayMember({
        type: 'object',
        name: 'trialItem',
        title: 'Etap',
        fields: [
          defineField({ name: 'title', title: 'Tytuł', type: 'string' }),
          defineField({ name: 'desc', title: 'Opis', type: 'text' }),
        ],
        preview: { select: { title: 'title' } },
      })],
    }),
    defineField({ name: 'awakenQuote', title: 'Rozdział 04 (Przebudzenie) · cytat', type: 'string', group: 'bio' }),
    defineField({ name: 'awakenBody', title: 'Rozdział 04 (Przebudzenie) · tekst', type: 'text', group: 'bio' }),
    defineField({ name: 'todayQuote', title: 'Rozdział 05 (Dziś) · cytat', type: 'string', group: 'bio' }),
    defineField({ name: 'todayBody', title: 'Rozdział 05 (Dziś) · tekst', type: 'text', group: 'bio' }),
    defineField({ name: 'coda', title: 'Zdanie zamykające (przed Wartościami)', type: 'text', group: 'bio' }),
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
