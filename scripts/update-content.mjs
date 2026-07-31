#!/usr/bin/env node
// Aktualizuje dane ROI na stronie Dla Firm + dodaje filmy YouTube do strony głównej
//
// Użycie:
//   SANITY_WRITE_TOKEN=xxx node scripts/update-content.mjs
//
// Token: manage.sanity.io → projekt khvta4ou → API → Tokens → Add API token (Editor)

import { createClient } from '@sanity/client'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error('❌  Brak SANITY_WRITE_TOKEN.')
  console.error('    Token: manage.sanity.io → khvta4ou → API → Tokens → Add API token (Editor)')
  process.exit(1)
}

const client = createClient({
  projectId: 'khvta4ou',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

/* ── 1. ROI na stronie Dla Firm ── */

const firmaId = await client.fetch(`*[_type == "pageDlaFirm"][0]._id`)
if (!firmaId) {
  console.error('❌  Nie znaleziono dokumentu pageDlaFirm.')
  process.exit(1)
}

await client.patch(firmaId).set({
  roiStats: [
    { _key: 'roi1', num: '84%', label: 'Lepsze zarządzanie konfliktem' },
    { _key: 'roi2', num: '91%', label: 'Lepsze zarządzanie stresem' },
    { _key: 'roi3', num: '92%', label: 'Lepsza praca zespołowa i współpraca' },
    { _key: 'roi4', num: '85%', label: 'Wzrost szczęścia' },
  ],
  roiSource: 'Badania Positive Intelligence® · próba >2000 uczestników',
}).commit()

console.log('✅  ROI zaktualizowane.')

/* ── 2. YouTube na stronie głównej ── */

const homepageId = await client.fetch(`*[_type == "homepage"][0]._id`)
if (!homepageId) {
  console.error('⚠️  Nie znaleziono dokumentu homepage — pomiń krok YouTube.')
} else {
  await client.patch(homepageId).set({
    ytVideos: [
      { _key: 'yt1', label: 'NAJNOWSZE', title: 'Uzupełnij tytuł w Sanity Studio', url: 'https://youtu.be/KPPhOcUWP5U' },
      { _key: 'yt2', label: 'POLECANE', title: 'Uzupełnij tytuł w Sanity Studio', url: 'https://youtu.be/Ei6Ulk1bliw' },
      { _key: 'yt3', label: 'POPULARNE', title: 'Uzupełnij tytuł w Sanity Studio', url: 'https://youtu.be/MLLp9KK7SmU' },
    ],
  }).commit()
  console.log('✅  Filmy YouTube dodane.')
}

console.log('\n🎉  Gotowe! Strona odświeży się w ciągu ~60 sekund.')
console.log('    Tytuły filmów YT możesz uzupełnić w Sanity Studio → Strona główna → Wideo.')
