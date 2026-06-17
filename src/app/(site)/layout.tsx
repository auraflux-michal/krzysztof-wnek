import '../globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import VideoModal from '@/components/VideoModal'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <VideoModal />
      <RevealObserver />
    </>
  )
}
