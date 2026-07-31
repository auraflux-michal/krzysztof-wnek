#!/usr/bin/env node
// Dodaje filmy YouTube do homepage w Sanity
// Użycie:
//   SANITY_WRITE_TOKEN=xxx node scripts/add-yt-videos.mjs
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

const ytVideos = [
  {
    _key: 'yt1',
    label: 'NAJNOWSZE',
    title: 'Film 1 — edytuj tytuł w Sanity Studio',
    url: 'https://youtu.be/KPPhOcUWP5U',
  },
  {
    _key: 'yt2',
    label: 'POPULARNE',
    title: 'Film 2 — edytuj tytuł w Sanity Studio',
    url: 'https://youtu.be/Ei6Ulk1bliw',
  },
  {
    _key: 'yt3',
    label: 'POLECANE',
    title: 'Film 3 — edytuj tytuł w Sanity Studio',
    url: 'https://youtu.be/MLLp9KK7SmU',
  },
]

const existing = await client.fetch(`*[_type == "homepage"][0]._id`)

if (!existing) {
  console.error('❌  Nie znaleziono dokumentu homepage w Sanity. Uruchom najpierw seed-sanity.mjs.')
  process.exit(1)
}

await client
  .patch(existing)
  .set({ ytVideos })
  .commit()

console.log('✅  Filmy YouTube dodane do Sanity! Zaktualizuj tytuły w Sanity Studio.')
