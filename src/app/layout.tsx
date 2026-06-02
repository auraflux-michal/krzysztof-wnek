import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Manrope } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import VideoModal from '@/components/VideoModal'

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

export const metadata: Metadata = {
  title: 'Krzysztof Wnęk — Mówca, Mentor, Coach PQ',
  description: 'Pomagam liderom odzyskać radość — bez rezygnacji ze sprawczości. Program PQ, coaching 1:1, prelekcje dla firm.',
  openGraph: {
    title: 'Krzysztof Wnęk — Mówca, Mentor, Coach PQ',
    description: 'Pomagam liderom odzyskać radość — bez rezygnacji ze sprawczości.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${inter.variable} ${manrope.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <VideoModal />
        <RevealObserver />
      </body>
    </html>
  )
}
