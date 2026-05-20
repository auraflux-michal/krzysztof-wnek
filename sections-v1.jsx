// sections.jsx — section components for Krzysztof Wnęk homepage
// All components attached to window at the end so app.jsx can use them.

// ── Reveal-on-scroll helper ──────────────────────────────────────────────
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Icon: simple line icons used in problem cards ────────────────────────
const Ic = {
  Coin: () => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="18" cy="18" r="13.5" />
      <path d="M18 9v18 M14 13.5h6.5a2.5 2.5 0 010 5h-5a2.5 2.5 0 000 5H22" strokeLinecap="round" />
    </svg>
  ),
  Door: () => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 30V8h20v22" />
      <path d="M4 30h28" />
      <circle cx="23" cy="19" r="1" fill="currentColor" />
      <path d="M14 8v22" />
    </svg>
  ),
  Hourglass: () => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M11 5h14M11 31h14" strokeLinecap="round" />
      <path d="M12 5c0 7 12 7 12 13s-12 6-12 13M24 5c0 7-12 7-12 13s12 6 12 13" />
    </svg>
  ),
  HeartLine: () => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 18h7l3-7 5 14 4-8 3 5h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: () => (
    <svg viewBox="0 0 56 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 12h50M44 4l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Play: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3v18l16-9z" />
    </svg>
  ),
  ChevL: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M15 5l-7 7 7 7" strokeLinecap="round" /></svg>),
  ChevR: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M9 5l7 7-7 7" strokeLinecap="round" /></svg>),
  Yt: () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.3 5 12 5 12 5s-6.3 0-7.9.5c-.8.2-1.5.8-1.7 1.7C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.5 1.7 1.7C5.7 19 12 19 12 19s6.3 0 7.9-.5c.8-.2 1.5-.8 1.7-1.7.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z"/></svg>),
  In: () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v16H4zM6 1.5C4.6 1.5 3.5 2.6 3.5 4S4.6 6.5 6 6.5 8.5 5.4 8.5 4 7.4 1.5 6 1.5zM20 12.5c0-2.7-1.5-4.5-4-4.5-1.5 0-2.4.8-2.8 1.6V8H10v12h3.5v-6.3c0-1.5.5-2.5 1.9-2.5s1.8 1 1.8 2.5V20H20v-7.5z"/></svg>),
  Fb: () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V6.5c0-.6.4-1 1-1h2V2h-3a4 4 0 00-4 4v3H7v4h3v9h4v-9h3l1-4h-4z"/></svg>),
  Ig: () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>),
};

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")} data-screen-label="Nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#">
          <div className="mono-kw">KW</div>
          <div className="nav-name">Krzysztof Wnęk</div>
        </a>
        <div className="nav-links">
          <a href="#dla-ciebie">Dla Ciebie</a>
          <a href="#dla-firm">Dla Firm</a>
          <a href="#o-mnie">O mnie</a>
          <a href="#youtube">YouTube</a>
        </div>
        <div className="nav-cta-wrap">
          <a href="#umow" className="btn btn-gold btn-sm">
            Umów rozmowę
            <span className="arrow">→</span>
          </a>
          <button className="nav-burger" aria-label="Menu"><span /></button>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function Hero({ treatment }) {
  if (treatment === "split") return <HeroSplit />;
  if (treatment === "type") return <HeroType />;
  return <HeroCinematic />;
}

function HeroCinematic() {
  return (
    <section className="hero" data-screen-label="01 Hero — Cinematic">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-frame-meta">
        <span className="pulse" /> Na żywo · Mówca · Mentor · Coach PQ
      </div>
      <div className="hero-tag">PHOTO · KRZYSZTOF NA SCENIE · 16:9</div>
      <div className="hero-inner">
        <div className="hero-eyebrow eyebrow gold">
          <span className="line" />
          <span>Power Speech &nbsp;·&nbsp; Program PQ &nbsp;·&nbsp; Coaching 1:1</span>
        </div>
        <h1 className="display">
          Zamieniasz <span className="it">sukces</span><br/>
          na stres.<br/>
          <span className="stroke">Czas to zmienić.</span>
        </h1>
        <p className="hero-sub">
          Pomagam liderom odzyskać radość życia — bez rezygnacji ze sprawczości.
          Z metodą Positive Intelligence, narzędziami z Harvardu i językiem, który nie owija
          rzeczywistości w bawełnę.
        </p>
        <div className="hero-ctas">
          <a href="#test" className="btn btn-gold">
            Zrób bezpłatny test sabotażystów
            <span className="arrow">→</span>
          </a>
          <a href="#video" className="hero-listen">
            <span className="play">▶</span>
            Posłuchaj mojej historii
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="hero" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} data-screen-label="01 Hero — Split">
      <div style={{ position: "relative", padding: "120px 64px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="hero-eyebrow eyebrow gold" style={{ marginBottom: 28 }}>
          <span className="line" />
          <span>Mówca &nbsp;·&nbsp; Mentor &nbsp;·&nbsp; Coach PQ</span>
        </div>
        <h1 className="display" style={{ fontSize: "clamp(40px, 5.4vw, 88px)", margin: "0 0 28px", maxWidth: "13ch" }}>
          Zamieniasz sukces na <span className="it">stres</span>.
          Czas to zmienić.
        </h1>
        <p className="hero-sub" style={{ margin: "0 0 36px" }}>
          Pomagam liderom odzyskać radość życia — bez rezygnacji ze sprawczości.
        </p>
        <div className="hero-ctas">
          <a href="#test" className="btn btn-gold">Zrób test sabotażystów<span className="arrow">→</span></a>
          <a href="#video" className="hero-listen"><span className="play">▶</span>Moja historia</a>
        </div>
      </div>
      <div style={{ position: "relative", background: "#0a0907" }}>
        <div className="ph" style={{ position: "absolute", inset: 0 }}>
          <div className="ph-corner">STAGE · WARSZAWA 2025</div>
          <div className="ph-label"><span className="tag">Photo — Krzysztof on stage</span><span>4032×6048</span></div>
        </div>
      </div>
    </section>
  );
}

function HeroType() {
  return (
    <section className="hero" style={{ display: "grid", placeItems: "center" }} data-screen-label="01 Hero — Type-led">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner" style={{ textAlign: "center", padding: "140px 32px" }}>
        <div className="hero-eyebrow eyebrow gold" style={{ justifyContent: "center" }}>
          <span className="line" /><span>Krzysztof Wnęk</span><span className="line" />
        </div>
        <h1 className="display" style={{
          fontSize: "clamp(56px, 10vw, 168px)",
          margin: "32px auto",
          maxWidth: "12ch",
          letterSpacing: "-0.02em",
        }}>
          Zamieniasz <span className="it">sukces</span> na stres.
        </h1>
        <p className="hero-sub" style={{ margin: "0 auto 40px" }}>
          Pomagam liderom odzyskać radość życia — bez rezygnacji ze sprawczości.
        </p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <a href="#test" className="btn btn-gold">Zrób bezpłatny test sabotażystów<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ── Authority bar ─────────────────────────────────────────────────────────
function Authority() {
  const items = [
    { num: "200", plus: "+", label: "absolwentów\nprogramu PQ" },
    { num: "43", label: "odcinki\non YouTube" },
    { num: "WSB", label: "wykładowca\nakademicki" },
    { num: "PQ", label: "certyfikowany\ncoach Positive Intelligence" },
  ];
  return (
    <section className="authority" data-screen-label="02 Authority">
      <div className="wrap">
        <div className="authority-row">
          {items.map((it, i) => (
            <div className="auth-cell reveal" data-delay={i} key={i}>
              <div className="auth-num">
                {it.num}{it.plus && <span className="plus">{it.plus}</span>}
              </div>
              <div className="auth-label">{it.label.split("\n").map((l, j) => <div key={j}>{l}</div>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Problem ──────────────────────────────────────────────────────────────
function Problem() {
  const cards = [
    { ico: <Ic.Coin />, text: "Zarobiłeś tyle, ile chciałeś. Radości wciąż brak." },
    { ico: <Ic.Door />, text: "Praca wkrada się do domu. Dom wkrada się do pracy." },
    { ico: <Ic.Hourglass />, text: "Osiągasz coraz więcej — i wciąż jest za mało." },
    { ico: <Ic.HeartLine />, text: "Twoje relacje z bliskimi to ostatni punkt na liście." },
  ];
  return (
    <section className="sec light" data-screen-label="03 Problem">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow gold">01 / Diagnoza</div>
            <h2>Rozpoznajesz <span className="it">siebie?</span></h2>
          </div>
          <p className="lead">
            Cztery historie, które słyszę najczęściej. Jeśli choć jedna z nich brzmi
            znajomo — nie jesteś sam. I są na to konkretne narzędzia.
          </p>
        </div>
        <div className="problem-grid">
          {cards.map((c, i) => (
            <div className="problem-card reveal" data-delay={i} key={i}>
              <div className="num">0{i + 1}</div>
              <div className="ico">{c.ico}</div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Transformation ───────────────────────────────────────────────────────
function Transformation() {
  const before = [
    "Stres i reaktywność",
    "Praca po nocach",
    "Zaniedbane relacje",
    "„Ile to jest dosyć?”",
  ];
  const after = [
    "Spokój i sprawczość",
    "Głęboka praca w skupieniu",
    "Obecność w domu i pracy",
    "Codzienna radość życia",
  ];
  return (
    <section className="sec dark" data-screen-label="04 Transformation">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow gold">02 / Transformacja</div>
            <h2>Od „<span className="it">muszę</span>” — do „<span className="it">chcę</span>”</h2>
          </div>
          <p className="lead">
            Nie chodzi o to, żeby przestać działać. Chodzi o to, żeby działać
            z innego miejsca — z wyboru, nie z przymusu.
          </p>
        </div>

        <div className="trans reveal">
          <div className="trans-col before">
            <h3>Przed</h3>
            <ul>{before.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </div>
          <div className="trans-arrow"><Ic.Arrow /></div>
          <div className="trans-col after">
            <h3>Po</h3>
            <ul>{after.map((t, i) => <li key={i}>{t}</li>)}</ul>
          </div>
        </div>

        <div className="trans-cta">
          <a href="#test" className="link gold">Sprawdź, czy to dla Ciebie<span>→</span></a>
        </div>
      </div>
    </section>
  );
}

// ── Video ────────────────────────────────────────────────────────────────
function Video() {
  return (
    <section className="sec paper" id="video" data-screen-label="05 Video">
      <div className="wrap-narrow">
        <div className="video-eyebrow reveal">
          <div className="eyebrow gold">03 / 2 minuty</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "16px 0 0", lineHeight: 1.05 }}>
            <span className="it">2 minuty.</span> Zdecyduj, czy to jest dla Ciebie.
          </h2>
        </div>
        <div className="video-wrap reveal" style={{ marginTop: 56 }}>
          <div className="ph">
            <div className="ph-corner">REEL · 2:14</div>
            <div className="ph-label"><span className="tag">Video — Manifest Krzysztofa</span><span>YouTube embed</span></div>
          </div>
          <div className="video-meta">
            <span>● REC</span><span>2:14</span><span>1080p</span>
          </div>
          <div className="video-play"><Ic.Play /></div>
          <div className="video-cap">
            „Nie jestem warsztatowcem.<br/>
            Jestem człowiekiem, który zapala.”
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Saboteurs CTA ────────────────────────────────────────────────────────
function Saboteurs() {
  return (
    <section className="sec dark sabo" id="test" data-screen-label="06 Saboteurs CTA">
      <div className="wrap sabo-inner">
        <div className="reveal">
          <div className="eyebrow gold">04 / Test sabotażystów</div>
          <h2>
            Zanim zaczniesz walczyć —<br/>
            poznaj <span className="it">przeciwnika</span>.
          </h2>
          <p className="desc">
            Test sabotażystów to narzędzie opracowane przez <strong>Shirzada Chamine</strong>
            z Harvardu. Identyfikuje wewnętrzne głosy, które sabotują Twoje wyniki, relacje
            i spokój. <strong>Bezpłatny.</strong> Zajmuje 5 minut.
          </p>
          <a href="#" className="btn btn-gold">
            Zrób test teraz — to nic nie kosztuje
            <span className="arrow">→</span>
          </a>
        </div>
        <div className="sabo-steps reveal" data-delay="2">
          {[
            { n: "I",   t: "Wypełnij test",                 m: "5 min" },
            { n: "II",  t: "Odbierz spersonalizowane wyniki", m: "Mail" },
            { n: "III", t: "Umów bezpłatną sesję omówienia", m: "30 min" },
          ].map((s, i) => (
            <div className="sabo-step" key={i}>
              <div className="n">{s.n}</div>
              <div className="t">{s.t}</div>
              <div className="meta">{s.m}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="sec light" id="o-mnie" data-screen-label="07 About">
      <div className="wrap about">
        <div className="about-portrait reveal">
          <div className="ph ph-light">
            <div className="ph-corner">PORTRAIT · 4:5</div>
            <div className="ph-label">
              <span className="tag" style={{ color: "rgba(0,0,0,0.6)" }}>Portret studyjny — Krzysztof</span>
              <span>3200×4000</span>
            </div>
          </div>
        </div>
        <div className="reveal" data-delay="1">
          <div className="eyebrow gold">05 / Kim jestem</div>
          <h2>
            „Nie jestem warsztatowcem. Jestem człowiekiem,
            który <span className="it">zapala</span> — i daje narzędzia
            do trwałej zmiany.”
          </h2>
          <p>
            Od ponad dekady pracuję z ludźmi, którzy osiągnęli wszystko, czego
            chcieli — i odkryli, że to nie wystarcza. Łączę metodę Positive
            Intelligence z mentalnością człowieka, który sam przeszedł przez wypalenie
            i wrócił z innego miejsca.
          </p>
          <p>
            Wykładam w WSB. Prowadzę cotygodniowy kanał na YouTube. Pracowałem
            z liderami biznesu, sportu i administracji. I wciąż uczę się każdego dnia
            — bo zmiana, której uczę, zaczyna się ode mnie.
          </p>
          <div style={{ marginTop: 36 }}>
            <a href="#" className="link">Poznaj moją historię<span>→</span></a>
          </div>
          <div className="signature">
            <div className="sig-mark">K. Wnęk</div>
            <div className="sig-name">
              Krzysztof Wnęk<br/>
              Mówca · Mentor · Coach PQ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    q: "Krzysztof nie sprzedaje teorii. Sprzedaje pytania, które po programie zadawałem sobie jeszcze tygodniami. Mój zespół widzi różnicę zanim widzę ją sam.",
    name: "Tomasz K.",
    role: "CEO, firma produkcyjna 300+ osób",
  },
  {
    q: "Spodziewałam się coachingu. Dostałam towarzyszenie. Po 8 tygodniach po raz pierwszy od lat nie wracam wieczorem do laptopa — i firma działa lepiej, nie gorzej.",
    name: "Marta L.",
    role: "Dyrektorka operacyjna",
  },
  {
    q: "Power Speech Krzysztofa na naszej konwencji odpalił dyskusje, których nie potrafiliśmy zacząć od lat. Nie był to motywacyjny pop. To była robota.",
    name: "Piotr S.",
    role: "Head of People, scaleup IT",
  },
];

function Testimonials() {
  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  React.useEffect(() => {
    const id = setInterval(next, 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="sec paper testi" data-screen-label="08 Testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow gold">06 / Głosy</div>
            <h2>Co mówią ci, którzy przeszli przez <span className="it">zmianę</span></h2>
          </div>
          <p className="lead">
            Trzy historie z ostatnich kohort. Imiona zmienione, branże zachowane —
            bo cyfry mówią mniej niż jedno celne zdanie.
          </p>
        </div>

        <div className="testi-stage reveal">
          {TESTIMONIALS.map((t, i) => (
            <div className={"testi-card" + (i === idx ? " active" : "")} key={i}>
              <div className="testi-portrait ph ph-light">
                <div className="ph-corner">{`0${i + 1}`}</div>
              </div>
              <div>
                <div className="testi-quote">{t.q}</div>
                <div className="testi-attr">
                  <span className="name">{t.name}</span>
                  <span className="div" />
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-controls">
          <div className="testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={i === idx ? "active" : ""} aria-label={`Cytat ${i + 1}`} onClick={() => setIdx(i)} />
            ))}
          </div>
          <div className="testi-arrows">
            <button onClick={prev} aria-label="Poprzedni"><Ic.ChevL /></button>
            <button onClick={next} aria-label="Następny"><Ic.ChevR /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 3 Paths ──────────────────────────────────────────────────────────────
function Paths() {
  const paths = [
    {
      label: "Program PQ",
      tag: "Najpopularniejsza",
      featured: true,
      desc: "Cykl 8 tygodni intensywnej pracy z metodą Positive Intelligence — Shirzad Chamine, Harvard.",
      bullets: [
        "8-tygodniowy program grupowy",
        "Cotygodniowe sesje praktyki + treningi mentalne w aplikacji",
        "Dla osób komunikatywnych po angielsku (materiały)",
        "Wsparcie kohorty + bezpośredni kontakt z prowadzącym",
      ],
      price: "4 000 – 5 000 PLN",
      priceSub: "lub 12 × 300 PLN ratalnie",
      cta: "Dowiedz się więcej",
      id: "dla-ciebie",
    },
    {
      label: "Coaching 1:1",
      desc: "Indywidualny pakiet sesji dla osób, które potrzebują pracy uszytej na miarę.",
      bullets: [
        "Min. 5 sesji indywidualnych",
        "Bez wymagań językowych",
        "Dobry punkt wejścia po programie PQ",
        "Pełna dyskrecja, kontrakt na cele",
      ],
      price: "Cena do ustalenia",
      priceSub: "Ustalamy zakres po rozmowie",
      cta: "Zapytaj o sesję",
    },
    {
      label: "Power Speech",
      tag: "Dla firm",
      desc: "Prelekcja sceniczna dla zespołów, konferencji i wydarzeń liderskich.",
      bullets: [
        "Język efektywności biznesowej",
        "Format 45–90 minut, opcjonalnie warsztat",
        "Materiały dla uczestników na wynos",
        "Możliwy follow-up programem dla zespołu",
      ],
      price: "Wycena indywidualna",
      priceSub: "Brief 15 min — wycena 48 h",
      cta: "Zapytaj o wycenę",
      id: "dla-firm",
    },
  ];
  return (
    <section className="sec dark" data-screen-label="09 Paths">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow gold">07 / Ścieżki</div>
            <h2>Jak możemy <span className="it">pracować razem</span></h2>
          </div>
          <p className="lead">
            Trzy drogi wejścia — w zależności od tego, czy pracujemy z Tobą,
            z Twoim zespołem, czy ze sceną pełną ludzi.
          </p>
        </div>
        <div className="paths">
          {paths.map((p, i) => (
            <div className={"path-card reveal" + (p.featured ? " featured" : "")} data-delay={i} key={i} id={p.id}>
              {p.tag && <div className="path-badge">{p.tag}</div>}
              <div className="path-num">{`0${i + 1}`} &nbsp;/&nbsp; Ścieżka</div>
              <div className="path-title">{p.label}</div>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: "0 0 28px", fontSize: 15 }}>
                {p.desc}
              </p>
              <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <div className="path-price">
                {p.price}
                <span className="small">{p.priceSub}</span>
              </div>
              <a href="#" className="btn btn-ghost-light btn-sm" style={{ alignSelf: "flex-start" }}>
                {p.cta}<span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── YouTube ──────────────────────────────────────────────────────────────
function YT() {
  const eps = [
    { t: "Dlaczego sukces nie smakuje — i co z tym zrobić", d: "14:08", n: "ODC. 43", date: "MAJ 2026" },
    { t: "Sabotażyści w pracy lidera: 4 najczęstsze głosy", d: "11:32", n: "ODC. 42", date: "KWI 2026" },
    { t: "Rozmowa z Karoliną Mikulską o decyzjach pod presją", d: "27:51", n: "ODC. 41", date: "KWI 2026" },
  ];
  return (
    <section className="sec paper" id="youtube" data-screen-label="10 YouTube">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow gold">08 / YouTube</div>
            <h2>Cotygodniowe materiały <span className="it">na YouTube</span></h2>
          </div>
          <p className="lead">
            Co środę nowy odcinek: rozmowa, mikro-warsztat albo komentarz do tego,
            co właśnie boli liderów. Bez planu sprzedażowego. Z planem myślowym.
          </p>
        </div>
        <div className="yt-grid">
          {eps.map((e, i) => (
            <a href="#" className="yt-card reveal" data-delay={i} key={i}>
              <div className="yt-thumb">
                <div className="ph">
                  <div className="ph-corner">{e.n}</div>
                </div>
                <div className="play-mini"><Ic.Play /></div>
                <div className="duration">{e.d}</div>
              </div>
              <div className="yt-meta">
                <span>{e.n}</span><span>{e.date}</span>
              </div>
              <div className="yt-title">{e.t}</div>
            </a>
          ))}
        </div>
        <div className="yt-foot">
          <div className="channel">
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--ink)", color: "var(--gold)", display: "grid", placeItems: "center", fontFamily: "var(--display)", fontSize: 16, fontWeight: 600 }}>KW</div>
            <div>
              <div className="channel-name">Krzysztof Wnęk</div>
              <div>Cotygodniowe odcinki · 43 wideo</div>
            </div>
          </div>
          <a href="#" className="btn btn-ghost-dark">Subskrybuj kanał<span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ────────────────────────────────────────────────────────────
function Finale() {
  return (
    <section className="dark finale" id="umow" data-screen-label="11 Finale">
      <div className="wrap" style={{ position: "relative" }}>
        <div className="eyebrow gold reveal" style={{ marginBottom: 28, display: "block" }}>
          09 / Ostatnie wezwanie
        </div>
        <h2 className="reveal">
          Gotowy na rozmowę,<br/>
          która może <span className="it">zmienić wszystko?</span>
        </h2>
        <div className="finale-ctas reveal" data-delay="1">
          <a href="#" className="btn btn-gold">
            Umów Discovery Call
            <span style={{ opacity: 0.6, fontWeight: 400 }}>· bezpłatna, 30 min</span>
            <span className="arrow">→</span>
          </a>
          <a href="#test" className="btn btn-ghost-light">
            Zrób test sabotażystów
            <span className="arrow">→</span>
          </a>
        </div>
        <div className="finale-marks reveal" data-delay="2">
          <span>Bez zobowiązań</span>
          <span>30 minut na Zencal</span>
          <span>Odpowiedź w 24h</span>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────
function Foot() {
  return (
    <footer className="foot" data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="mono-kw" style={{ width: 44, height: 44 }}>KW</div>
              <div style={{ fontFamily: "var(--display)", fontSize: 19, color: "#fff" }}>Krzysztof Wnęk</div>
            </div>
            <h4>Mówca, mentor, coach PQ.</h4>
            <p>
              Pomagam liderom odzyskać radość życia — bez rezygnacji ze sprawczości.
              Z metodą Positive Intelligence i językiem, który nie owija rzeczywistości w bawełnę.
            </p>
          </div>
          <div className="foot-col">
            <h5>Dla Ciebie</h5>
            <ul>
              <li><a href="#">Program PQ</a></li>
              <li><a href="#">Coaching 1:1</a></li>
              <li><a href="#">Test sabotażystów</a></li>
              <li><a href="#">Discovery Call</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Dla Firm</h5>
            <ul>
              <li><a href="#">Power Speech</a></li>
              <li><a href="#">Program dla zespołu</a></li>
              <li><a href="#">Konsultacja B2B</a></li>
              <li><a href="#">Media kit</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#">O mnie</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Polityka prywatności</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 Krzysztof Wnęk · Wszelkie prawa zastrzeżone</div>
          <div className="social">
            <a href="#" aria-label="YouTube"><Ic.Yt /></a>
            <a href="#" aria-label="LinkedIn"><Ic.In /></a>
            <a href="#" aria-label="Facebook"><Ic.Fb /></a>
            <a href="#" aria-label="Instagram"><Ic.Ig /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  useReveal, Nav, Hero, Authority, Problem, Transformation,
  Video, Saboteurs, About, Testimonials, Paths, YT, Finale, Foot,
});
