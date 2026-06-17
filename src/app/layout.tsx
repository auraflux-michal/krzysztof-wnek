import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Manrope } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.krzysztofwnek.pl'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Krzysztof Wnęk — Coach PQ, Mówca, Mentor | Positive Intelligence®',
    template: '%s | Krzysztof Wnęk',
  },
  description: 'Pomagam liderom i menedżerom odzyskać radość i efektywność. Certyfikowany Coach Positive Intelligence® (Stanford). Program PQ, coaching 1:1, prelekcje dla firm.',
  openGraph: {
    siteName: 'Krzysztof Wnęk',
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: '/open-graph.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/open-graph.jpg'] },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  )
}
