import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.krzysztofwnek.pl'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*',              allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  }
}
