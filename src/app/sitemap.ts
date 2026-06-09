import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pozytywnainteligencja.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                      lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/dla-ciebie`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/dla-firm`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/o-mnie`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/umow-rozmowe`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
