// shared.jsx — Nav, Footer, Icons, hooks shared across all pages

function useReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Ic = {
  Down: () => (<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 2v12M3 9l5 5 5-5" strokeLinecap="round"/></svg>),
  Play: () => (<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2v12l10-6z"/></svg>),
  Arr:  () => (<span style={{ display: "inline-block" }}>→</span>),
  Yt:   () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.3 5 12 5 12 5s-6.3 0-7.9.5c-.8.2-1.5.8-1.7 1.7C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.5 1.7 1.7C5.7 19 12 19 12 19s6.3 0 7.9-.5c.8-.2 1.5-.8 1.7-1.7.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z"/></svg>),
  In:   () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v16H4zM6 1.5C4.6 1.5 3.5 2.6 3.5 4S4.6 6.5 6 6.5 8.5 5.4 8.5 4 7.4 1.5 6 1.5zM20 12.5c0-2.7-1.5-4.5-4-4.5-1.5 0-2.4.8-2.8 1.6V8H10v12h3.5v-6.3c0-1.5.5-2.5 1.9-2.5s1.8 1 1.8 2.5V20H20v-7.5z"/></svg>),
  Fb:   () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V6.5c0-.6.4-1 1-1h2V2h-3a4 4 0 00-4 4v3H7v4h3v9h4v-9h3l1-4h-4z"/></svg>),
  Ig:   () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>),
};

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <a className="nav-brand" href="index.html">
          <div className="mono-kw">KW</div>
          <div className="nav-brand-name">
            Krzysztof Wnęk
            <span className="small">Mówca · Mentor</span>
          </div>
        </a>
        <div className="nav-links">
          <a href="dla-ciebie.html">Dla Ciebie</a>
          <a href="dla-firm.html">Dla Firm</a>
          <a href="o-mnie.html">O Mnie</a>
          <a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <div className="nav-cta-wrap">
          <a href="umow-rozmowe.html" className="btn btn-teal" style={{ padding: "12px 20px" }}>
            Umów rozmowę
            <span className="arrow">→</span>
          </a>
          <button className="nav-burger" aria-label="Menu"><span /></button>
        </div>
      </div>
    </nav>
  );
}

function Foot() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="row">
              <div className="mono-kw">KW</div>
              <div className="nav-brand-name">
                Krzysztof Wnęk
                <span className="small">Mówca · Mentor · Coach PQ</span>
              </div>
            </div>
            <p>
              Pomagam liderom odzyskać radość — bez rezygnacji ze sprawczości.
              Z metodą Positive Intelligence i językiem, który nie owija rzeczywistości w bawełnę.
            </p>
          </div>
          <div className="foot-col">
            <h5>Nawigacja</h5>
            <ul>
              <li><a href="dla-ciebie.html">Dla Ciebie</a></li>
              <li><a href="dla-firm.html">Dla Firm</a></li>
              <li><a href="o-mnie.html">O Mnie</a></li>
              <li><a href="index.html#test">Test Sabotażystów</a></li>
              <li><a href="umow-rozmowe.html">Umów Rozmowę</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Obserwuj</h5>
            <ul>
              <li><a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://www.linkedin.com/in/krzysztofwnek" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 Krzysztof Wnęk · Wszelkie prawa zastrzeżone</div>
          <div className="social">
            <a href="https://www.youtube.com/@PozytywnaInteligencja" target="_blank" rel="noreferrer" aria-label="YouTube"><Ic.Yt /></a>
            <a href="#" aria-label="LinkedIn"><Ic.In /></a>
            <a href="#" aria-label="Facebook"><Ic.Fb /></a>
            <a href="#" aria-label="Instagram"><Ic.Ig /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, Ic, Nav, Foot });
