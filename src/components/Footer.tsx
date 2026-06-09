import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="row">
              <div className="mono-kw">KW</div>
              <div className="nav-brand-name">
                Krzysztof Wnęk<span className="small">Inspirator · PQ Coach · Mentor</span>
              </div>
            </div>
            <p>Pomagam mężczyznom odzyskać codzienną radość życia — bez rezygnowania z tego, co dla nich ważne.</p>
          </div>
          <div className="foot-col">
            <h5>Nawigacja</h5>
            <ul>
              <li><Link href="/dla-ciebie">Dla Ciebie</Link></li>
              <li><Link href="/dla-firm">Dla Firm</Link></li>
              <li><Link href="/o-mnie">O Mnie</Link></li>
              <li><Link href="/#umow">Test Sabotażystów</Link></li>
              <li><Link href="/umow-rozmowe">Umów Rozmowę</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Obserwuj</h5>
            <ul>
              <li><a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://www.linkedin.com/in/krzysztofwnek" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 Krzysztof Wnęk · Wszelkie prawa zastrzeżone</div>
          <div className="foot-credit">
            Created with love by{' '}
            <a href="https://auraflux.pl" target="_blank" rel="noreferrer">auraflux.pl</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
