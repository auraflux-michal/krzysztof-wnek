/* sections.jsx — UI section components for KW homepage */

const { useState, useEffect, useRef } = React;

/* ───────────────── NAV ───────────────── */
function Nav({ onCTAClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const navStyles = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    padding: scrolled ? '14px 0' : '22px 0',
    background: scrolled ? 'rgba(10,13,20,.78)' : 'transparent',
    backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
    borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    transition: 'all .25s ease',
  };
  return (
    <nav style={navStyles}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 24 }}>
        <a href="#top" style={{ color:'var(--paper)', textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontFamily:'"Archivo"', fontWeight:900, letterSpacing:'-.02em', fontSize:18 }}>KRZYSZTOF&nbsp;WNĘK</span>
          <span className="mono" style={{ fontSize:10, color:'var(--paper-faint)', textTransform:'uppercase', letterSpacing:'.16em' }}>PQ • Mentor</span>
        </a>
        <div className="nav-links" style={{ display:'flex', gap:32, alignItems:'center' }}>
          {[
            ['Mechanizm', '#mechanizm'],
            ['Indywidualnie', '#sciezki'],
            ['Dla firm', '#sciezki'],
            ['Scena', '#medrzec'],
          ].map(([label, href]) => (
            <a key={label} href={href}
               style={{ color:'var(--paper)', textDecoration:'none', fontSize:13.5, fontWeight:500, letterSpacing:'.02em' }}>
              {label}
            </a>
          ))}
          <button className="btn btn-primary" onClick={onCTAClick} style={{ padding:'12px 18px', fontSize:12.5 }}>
            Test Sabotażystów <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px){
          .nav-links a{display:none}
        }
      `}</style>
    </nav>
  );
}

/* ───────────────── HERO ───────────────── */
function Hero() {
  return (
    <section data-screen-label="01 Hero" style={{
      position:'relative', minHeight:'100vh',
      paddingTop:160, paddingBottom:80,
      background:'radial-gradient(120% 80% at 20% 0%, #142042 0%, #0a0d14 60%, #06080d 100%)',
      overflow:'hidden',
    }}>
      {/* Video / stage photo placeholder — full bleed bg */}
      <div className="ph" data-label="VIDEO_BG · KW na scenie, slow-mo, ciemne tło, snopy światła"
        style={{
          position:'absolute', inset:0,
          background:`
            radial-gradient(60% 50% at 70% 40%, rgba(80,120,255,.18) 0%, transparent 60%),
            radial-gradient(50% 50% at 30% 70%, rgba(0,255,170,.10) 0%, transparent 60%),
            repeating-linear-gradient(135deg, rgba(255,255,255,.035) 0 18px, rgba(255,255,255,.005) 18px 36px),
            linear-gradient(180deg, #0c1428 0%, #06080d 100%)
          `,
          border:'none',
        }}>
      </div>
      {/* Vignette */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'linear-gradient(180deg, rgba(6,8,13,0) 30%, rgba(6,8,13,.92) 100%), radial-gradient(80% 60% at 50% 40%, transparent 0%, rgba(6,8,13,.4) 100%)'
      }} />

      <div className="wrap" style={{ position:'relative', zIndex:2 }}>
        {/* Eyebrow */}
        <div className="eyebrow" style={{ marginBottom:36 }}>
          <span className="dot" />
          <span>Mentor &nbsp;/&nbsp; trener mentalny PQ &nbsp;/&nbsp; mówca</span>
        </div>

        {/* Headline */}
        <h1 className="display" style={{
          fontSize:'clamp(56px, 10.5vw, 168px)',
          margin:'0 0 28px',
          maxWidth:'18ch',
        }}>
          Od <em style={{
            fontStyle:'normal', fontFamily:'"Archivo"', fontWeight:400,
            color:'var(--paper-faint)', textDecoration:'line-through',
            textDecorationColor:'color-mix(in oklab, var(--paper-faint) 60%, transparent)',
            textDecorationThickness:'4px',
          }}>muszę</em>
          {' '}do{' '}
          <span style={{ color:'var(--accent)', position:'relative' }}>
            chcę
            <span style={{
              position:'absolute', left:0, right:0, bottom:'-4px', height:'8px',
              background:'var(--accent)', opacity:.18, borderRadius:1,
            }} />
          </span>.
          <br/>
          W&nbsp;6&nbsp;tygodni. Bez&nbsp;terapii.
        </h1>

        {/* Sub */}
        <p style={{
          maxWidth:'62ch', fontSize:'clamp(17px, 1.4vw, 21px)', lineHeight:1.55,
          color:'var(--paper-dim)', margin:'0 0 44px', fontWeight:400,
        }}>
          Pracuję z liderami, przedsiębiorcami i top‑managementem, którzy mają już
          wszystko — oprócz spokoju, sensu i wieczorów z&nbsp;rodziną.
          Jeżeli to brzmi znajomo, jesteś we właściwym miejscu.
        </p>

        {/* CTA */}
        <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:64 }}>
          <a href="#finish" className="btn btn-primary">
            Zrób Test Sabotażystów <span className="arrow">→</span>
          </a>
          <a href="#finish" className="btn btn-ghost">
            Discovery Call &nbsp;·&nbsp; 30 min
          </a>
        </div>

        {/* Stats / proof bar */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:'1px',
          background:'var(--line)', border:'1px solid var(--line)',
          maxWidth:920,
        }}>
          {[
            ['43', 'odcinki podcastu'],
            ['1 200+', 'godzin mentoringu'],
            ['6 tyg.', 'mierzalna zmiana'],
            ['10', 'sabotażystów do złapania'],
          ].map(([n, l]) => (
            <div key={l} style={{ background:'rgba(10,13,20,.7)', padding:'22px 22px' }}>
              <div className="display" style={{ fontSize:32, lineHeight:1, marginBottom:6 }}>{n}</div>
              <div className="mono" style={{ fontSize:10.5, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--paper-faint)' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute', right:56, bottom:0, display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
          <span className="mono" style={{ fontSize:10, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--paper-faint)', writingMode:'vertical-rl' }}>
            scroll · diagnoza
          </span>
          <span style={{ width:1, height:80, background:'linear-gradient(180deg, var(--paper-faint), transparent)' }} />
        </div>
      </div>

      {/* UX comment for dev */}
      <DevNote pos={{ top: 180, right: 56 }}>
        UX: tło = pętla wideo 6–10 s, KW na scenie, slow-mo, lekka parallaksa na scroll. Vignette + delikatne ziarno. Headline z efektem split-reveal przy wejściu (mask-clip).
      </DevNote>
    </section>
  );
}

/* ───────────────── LUSTRO ───────────────── */
function Lustro() {
  const mirrors = [
    {
      n: '01',
      title: 'Konto rośnie. Ty się kurczysz.',
      body: 'Wyniki finansowe wyglądają jak sukces. Twój kalendarz, sen i wieczne napięcie w szczęce mówią coś innego.',
    },
    {
      n: '02',
      title: 'Córka mówi „tato" do innego mężczyzny. Twojego telefonu.',
      body: 'Wracasz do domu obecny ciałem, nieobecny głową. Zoom skończony. Drugi etat dopiero się zaczyna.',
    },
    {
      n: '03',
      title: 'Twoja żona już nie pyta, jak było w pracy.',
      body: 'Bo nauczyła się, że odpowiesz „normalnie" i wrócisz do laptopa. To nie kryzys związku. To kryzys obecności.',
    },
    {
      n: '04',
      title: '„Jeszcze tylko ten kwartał." Powtarzasz to od ośmiu lat.',
      body: 'Każdy szczyt odsłania kolejny szczyt. Pytanie nie brzmi „ile to jest dosyć?". Pytanie brzmi: kto Ci to kiedykolwiek zdefiniował?',
    },
  ];

  return (
    <section data-screen-label="02 Lustro" className="pad" id="lustro" style={{
      background:'var(--ink)', position:'relative',
    }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, marginBottom:84 }} className="lustro-head">
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" />
              <span>Lustro · S2</span>
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 5.8vw, 92px)', margin:0 }}>
              Jeśli&nbsp;to siebie tu&nbsp;widzisz —
              <br/>
              <span style={{ color:'var(--paper-faint)' }}>to&nbsp;nie&nbsp;jest&nbsp;przypadek.</span>
            </h2>
          </div>
          <div style={{ alignSelf:'end' }}>
            <p style={{ fontSize:19, color:'var(--paper-dim)', maxWidth:'40ch', margin:0, lineHeight:1.55 }}>
              Cztery zdania, które niedawno wypowiedział głośno mężczyzna zarabiający ponad
              milion złotych rocznie. Zanim podjął decyzję, żeby zacząć ze mną pracować.
            </p>
          </div>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px',
          background:'var(--line)', border:'1px solid var(--line)',
        }} className="mirror-grid">
          {mirrors.map((m, i) => (
            <article key={m.n} style={{
              background:'var(--ink)', padding:'48px 44px 44px',
              position:'relative', minHeight: 280,
            }}>
              <div style={{
                display:'flex', justifyContent:'space-between', alignItems:'flex-start',
                marginBottom:26,
              }}>
                <span className="mono" style={{ color:'var(--paper-faint)', fontSize:12, letterSpacing:'.14em' }}>
                  {m.n} / 04
                </span>
                <span style={{ width:24, height:1, background:'var(--paper-ghost)', marginTop:10 }} />
              </div>
              <h3 className="display" style={{
                fontSize:'clamp(24px, 2.4vw, 34px)', lineHeight:1.05, margin:'0 0 18px',
                letterSpacing:'-.02em',
              }}>
                {m.title}
              </h3>
              <p style={{ color:'var(--paper-dim)', fontSize:16.5, lineHeight:1.6, margin:0, maxWidth:'48ch' }}>
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <div style={{
          marginTop:64, paddingTop:40, borderTop:'1px solid var(--line)',
          display:'flex', justifyContent:'space-between', gap:48, alignItems:'baseline', flexWrap:'wrap',
        }}>
          <p className="display" style={{ fontSize:'clamp(22px, 2.4vw, 32px)', lineHeight:1.15, margin:0, maxWidth:'24ch' }}>
            To nie wypalenie. To system, który Cię tu doprowadził —
            <br/>
            <span style={{ color:'var(--accent)' }}>i&nbsp;który nie zaprowadzi Cię dalej.</span>
          </p>
          <a href="#mechanizm" style={{
            color:'var(--paper)', textDecoration:'none', fontSize:13.5, fontWeight:600,
            letterSpacing:'.04em', textTransform:'uppercase',
            display:'inline-flex', alignItems:'center', gap:10,
          }}>
            Zobacz mechanizm <span style={{ display:'inline-block' }}>↓</span>
          </a>
        </div>
      </div>

      <DevNote pos={{ top: 24, right: 24 }}>
        UX: każda karta lustra fade-in + lekki x-translate przy wejściu w viewport. Numer 01–04 monospaced. Brak ikon — siła w typografii i pustce.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .lustro-head,.mirror-grid{grid-template-columns:1fr !important; gap:32px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────────── MECHANIZM ───────────────── */
function Mechanizm() {
  const cols = [
    {
      tag: 'DIAGNOZA',
      title: 'Sabotażyści',
      body: 'Mierzymy 10 wewnętrznych sabotażystów, którzy podejmują za Ciebie 70% decyzji. Sędzia, Hyper-Achiever, Kontroler, Please-r. Nie domysł — test oparty na 25 latach badań Stanforda.',
      meta: '15 min · darmowe · w jęz. polskim',
    },
    {
      tag: 'OPERATOR',
      title: 'Mędrzec',
      body: 'Aktywujemy część mózgu (PFC + insula), która generuje spokój, kreatywność i zdecydowane działanie zamiast paniki, kontroli i odkładania. Pięć mocy: Empatia, Eksploracja, Innowacja, Nawigacja, Aktywacja.',
      meta: '5 mocy · mierzalne · neuroplastyczne',
    },
    {
      tag: 'TRENING',
      title: 'Reps',
      body: '6 tygodni × 15 minut dziennie w aplikacji + cotygodniowy mentoring 1:1 ze mną. Tak buduje się nawyk i nowy nawyk myślenia. Nie inaczej. Nie szybciej. Nie magicznie.',
      meta: '6 tyg. · ~15 min/dzień · 1:1 weekly',
    },
  ];
  return (
    <section data-screen-label="03 Mechanizm" id="mechanizm" className="pad" style={{
      background:'linear-gradient(180deg, var(--ink) 0%, #0c1226 50%, var(--ink) 100%)',
      position:'relative',
    }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'end', marginBottom:80 }} className="mech-head">
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" />
              <span>Mechanizm · most między biznesem a głową</span>
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 5.6vw, 88px)', margin:0 }}>
              PQ — czyli dlaczego
              <br/>
              <span style={{ color:'var(--accent)' }}>terapia&nbsp;Cię&nbsp;nudzi,</span>
              <br/>
              a&nbsp;coaching&nbsp;Cię irytuje.
            </h2>
          </div>
          <div>
            <p style={{ fontSize:18, color:'var(--paper-dim)', margin:'0 0 16px', lineHeight:1.6 }}>
              <strong style={{ color:'var(--paper)' }}>Positive Intelligence</strong> to system treningu
              mięśni mentalnych zbudowany przez Shirzada Chamine'a na 25 latach badań Stanforda,
              CalTech i danych z 500 tys. liderów.
            </p>
            <p style={{ fontSize:15.5, color:'var(--paper-faint)', margin:0, lineHeight:1.6 }}>
              Mierzalny. Powtarzalny. Działa nawet wtedy, gdy nie wierzysz, że zadziała —
              bo nie pracuje na wierze. Pracuje na neuroplastyczności.
            </p>
          </div>
        </div>

        {/* Three columns */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'1px',
          background:'var(--line)', border:'1px solid var(--line)',
        }} className="mech-grid">
          {cols.map((c, i) => (
            <article key={c.tag} style={{ background:'#0c1226', padding:'44px 36px 36px', position:'relative' }}>
              <div className="mono" style={{
                fontSize:10.5, letterSpacing:'.18em', color:'var(--accent)',
                textTransform:'uppercase', marginBottom:24,
              }}>
                Krok {String(i+1).padStart(2,'0')} · {c.tag}
              </div>
              <h3 className="display" style={{ fontSize:46, lineHeight:1, margin:'0 0 22px', letterSpacing:'-.025em' }}>
                {c.title}
              </h3>
              <p style={{ color:'var(--paper-dim)', fontSize:15.5, lineHeight:1.6, margin:'0 0 24px' }}>
                {c.body}
              </p>
              <div className="mono" style={{
                fontSize:11, color:'var(--paper-faint)', letterSpacing:'.06em',
                paddingTop:18, borderTop:'1px solid var(--line)',
              }}>
                {c.meta}
              </div>
            </article>
          ))}
        </div>

        {/* Logic line */}
        <div style={{
          marginTop:56, padding:'32px 36px', border:'1px solid var(--line)',
          display:'flex', justifyContent:'space-between', gap:24, alignItems:'center', flexWrap:'wrap',
          background:'rgba(255,255,255,.02)',
        }}>
          <div className="display" style={{ fontSize:'clamp(20px, 2.1vw, 28px)', lineHeight:1.15, letterSpacing:'-.015em' }}>
            Logika inżyniera.&nbsp;
            <span style={{ color:'var(--paper-faint)' }}>Energia mentora.</span>&nbsp;
            <span style={{ color:'var(--accent)' }}>Wynik mierzalny w 6 tygodni.</span>
          </div>
          <a href="#sciezki" className="btn btn-primary" style={{ fontSize:13 }}>
            Wybierz ścieżkę <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <DevNote pos={{ bottom: 24, right: 24 }}>
        UX: 3 kolumny scroll-snap przy wąskich viewportach. Numery kroków animują countup. Linia logiki – sticky CTA na desktop.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .mech-head,.mech-grid{grid-template-columns:1fr !important; gap:32px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────────── DWIE ŚCIEŻKI ───────────────── */
function Sciezki() {
  return (
    <section data-screen-label="04 Ścieżki" id="sciezki" className="pad" style={{
      background:'var(--ink)', position:'relative',
    }}>
      <div className="wrap">
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:32, marginBottom:64, flexWrap:'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" />
              <span>Wybierz ścieżkę · S4</span>
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 5.6vw, 84px)', margin:0 }}>
              Dwa światy. <span style={{ color:'var(--paper-faint)' }}>Jedna metoda.</span>
            </h2>
          </div>
          <p className="mono" style={{ fontSize:12, color:'var(--paper-faint)', letterSpacing:'.12em', textTransform:'uppercase', maxWidth:'30ch' }}>
            Dla Ciebie / dla zarządu Twojej firmy
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }} className="sciezki-grid">

          {/* B2C */}
          <article style={{
            border:'1px solid var(--line)', padding:'44px 40px 40px',
            background:'linear-gradient(180deg, #0e1730 0%, #0a0d14 100%)',
            display:'flex', flexDirection:'column', position:'relative', overflow:'hidden',
          }}>
            <div style={{
              position:'absolute', top:0, left:0, right:0, height:4,
              background:'var(--accent)',
            }} />
            <div className="mono" style={{ fontSize:11, letterSpacing:'.18em', color:'var(--accent)', marginBottom:28, textTransform:'uppercase' }}>
              Ścieżka A · Indywidualnie
            </div>
            <h3 className="display" style={{ fontSize:'clamp(28px, 3.4vw, 48px)', lineHeight:1.02, margin:'0 0 20px' }}>
              Wróć do domu człowiekiem, którego sam chciałbyś mieć za&nbsp;ojca.
            </h3>
            <p style={{ color:'var(--paper-dim)', fontSize:16, lineHeight:1.6, margin:'0 0 28px' }}>
              Sześć tygodni głębokiej pracy 1:1 ze mną i z aplikacją PQ.
              Energia, radość, obecność. Pierwsza zmiana — zauważalna w 14 dni.
              Pełna — w 6 tygodni. Trwała — w 6 miesięcy.
            </p>

            <ul style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'grid', gap:10 }}>
              {[
                '6-tygodniowy program PQ (Mental Fitness Bootcamp)',
                'Cotygodniowy mentoring 1:1 ze mną (60 min)',
                'Aplikacja PQ + 5 mocy Mędrca, codzienne reps',
                'Zamknięta grupa absolwentów (akredytacja Pozytywnej Inteligencji)',
              ].map(li => (
                <li key={li} style={{ display:'flex', gap:14, fontSize:15, color:'var(--paper)', lineHeight:1.5 }}>
                  <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono', fontSize:13 }}>▸</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>

            <div style={{
              marginTop:'auto', paddingTop:28, borderTop:'1px solid var(--line)',
              display:'flex', justifyContent:'space-between', alignItems:'center', gap:16,
            }}>
              <div>
                <div className="mono" style={{ fontSize:10.5, color:'var(--paper-faint)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:6 }}>
                  Inwestycja od
                </div>
                <div className="display" style={{ fontSize:28, lineHeight:1 }}>
                  na rozmowie
                </div>
              </div>
              <a href="#finish" className="btn btn-primary" style={{ fontSize:12.5 }}>
                Program indywidualny <span className="arrow">→</span>
              </a>
            </div>
          </article>

          {/* B2B */}
          <article style={{
            border:'1px solid var(--line)', padding:'44px 40px 40px',
            background:'linear-gradient(180deg, #11151f 0%, #0a0d14 100%)',
            display:'flex', flexDirection:'column', position:'relative', overflow:'hidden',
          }}>
            <div style={{
              position:'absolute', top:0, left:0, right:0, height:4,
              background:'var(--paper)',
            }} />
            <div className="mono" style={{ fontSize:11, letterSpacing:'.18em', color:'var(--paper)', marginBottom:28, textTransform:'uppercase' }}>
              Ścieżka B · Dla&nbsp;firm
            </div>
            <h3 className="display" style={{ fontSize:'clamp(28px, 3.4vw, 48px)', lineHeight:1.02, margin:'0 0 20px' }}>
              Top management nie pęka. Albo&nbsp;pęka po&nbsp;cichu — i&nbsp;drogo.
            </h3>
            <p style={{ color:'var(--paper-dim)', fontSize:16, lineHeight:1.6, margin:'0 0 28px' }}>
              Program PQ dla C‑level, zarządów i kluczowych liderów.
              Mierzalna redukcja kosztów blokad decyzyjnych, wypalenia
              i rotacji w warstwie sukcesyjnej. ROI w 90 dni od startu.
            </p>

            <ul style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'grid', gap:10 }}>
              {[
                'Diagnoza Sabotażystów dla zespołu (raport zbiorczy + indywidualny)',
                'Program 6–12 tyg. dla kadry (on-site + asynchronicznie)',
                'Sesje prelekcji / keynote / off-site retreats',
                'Raport HR: wpływ na produktywność, retencję, decyzyjność',
              ].map(li => (
                <li key={li} style={{ display:'flex', gap:14, fontSize:15, color:'var(--paper)', lineHeight:1.5 }}>
                  <span style={{ color:'var(--paper)', fontFamily:'JetBrains Mono', fontSize:13 }}>▸</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>

            <div style={{
              marginTop:'auto', paddingTop:28, borderTop:'1px solid var(--line)',
              display:'flex', justifyContent:'space-between', alignItems:'center', gap:16,
            }}>
              <div>
                <div className="mono" style={{ fontSize:10.5, color:'var(--paper-faint)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:6 }}>
                  Wycena
                </div>
                <div className="display" style={{ fontSize:28, lineHeight:1 }}>
                  pod skalę
                </div>
              </div>
              <a href="#finish" className="btn btn-ghost" style={{ fontSize:12.5 }}>
                One-pager B2B <span className="arrow">↓</span>
              </a>
            </div>
          </article>
        </div>
      </div>

      <DevNote pos={{ top: 24, left: 24 }}>
        UX: na hover karta lekko unosi się (translateY -4px) i akcentowa belka na górze pulsuje. Na mobile karty stackują się pionowo.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .sciezki-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────────── MĘDRZEC ───────────────── */
function Medrzec() {
  const speeches = [
    { t: 'Architekci Spokoju · #43', d: 'Dlaczego dyscyplina Cię zabija. Rozmowa z prof. Janem K.', kind: 'PODCAST' },
    { t: 'TEDx Kraków', d: 'Sabotażysta w garniturze: 10 ról, które gramy zamiast siebie.', kind: 'KEYNOTE' },
    { t: 'Infoshare 2025', d: 'Decyzyjność liderów AI: jak nie pęknąć pod presją tempa.', kind: 'KEYNOTE' },
    { t: 'Architekci Spokoju · #38', d: 'Mąż, ojciec, prezes. Wybierz dwa. (A potem wybierz wszystkie trzy.)', kind: 'PODCAST' },
  ];
  return (
    <section data-screen-label="05 Mędrzec" id="medrzec" className="pad" style={{
      background:'#0c1226', position:'relative',
    }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:80, alignItems:'center', marginBottom:80 }} className="med-head">
          {/* Portrait placeholder */}
          <div className="ph" data-label="PORTRAIT · KW · half-body, ciepłe światło, granat tło" style={{
            aspectRatio:'4 / 5', width:'100%',
          }} />

          {/* About copy */}
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" />
              <span>Mędrzec ze sceny · o&nbsp;mnie</span>
            </div>
            <h2 className="display" style={{ fontSize:'clamp(36px, 5vw, 76px)', margin:'0 0 28px' }}>
              Płonę, żeby
              <br/>
              <span style={{ color:'var(--accent)' }}>zapalać&nbsp;innych.</span>
            </h2>
            <p style={{ fontSize:18, color:'var(--paper)', lineHeight:1.6, margin:'0 0 18px', maxWidth:'52ch' }}>
              Krzysztof Wnęk. 20 lat w biznesie. Ostatnie 8 — w bardzo konkretnej pracy
              nad sobą i nad ludźmi, którzy z zewnątrz wyglądają, jakby nic im nie&nbsp;dolegało.
            </p>
            <p style={{ fontSize:16, color:'var(--paper-dim)', lineHeight:1.6, margin:'0 0 28px', maxWidth:'56ch' }}>
              Certyfikowany trener Positive Intelligence. Twórca podcastu
              <em style={{ fontStyle:'normal', color:'var(--paper)' }}> „Architekci Spokoju"</em> (43 odcinki, ponad
              180 tys. odsłuchań). Mówca na scenach TEDx, Infoshare, EEC.
              Mentor, nie terapeuta. Mędrzec, nie kaznodzieja.
            </p>
            <div style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
              {[
                ['43', 'odcinki'],
                ['180k', 'odsłuchań'],
                ['12', 'wystąpień / rok'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="display" style={{ fontSize:36, lineHeight:1, color:'var(--accent)' }}>{n}</div>
                  <div className="mono" style={{ fontSize:10.5, color:'var(--paper-faint)', letterSpacing:'.14em', textTransform:'uppercase', marginTop:6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media grid */}
        <div className="mono" style={{
          display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'24px 0',
          borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', marginBottom:24,
          fontSize:11.5, color:'var(--paper-faint)', letterSpacing:'.16em', textTransform:'uppercase',
        }}>
          <span>Power Speeches &amp; Architekci Spokoju</span>
          <span>4 / 43</span>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1px',
          background:'var(--line)',
        }} className="speeches-grid">
          {speeches.map((s, i) => (
            <a key={i} href="#" style={{ background:'#0c1226', padding:'0', textDecoration:'none', color:'inherit', display:'block' }}>
              <div className="ph" data-label={s.kind} style={{ aspectRatio:'16/10', width:'100%' }} />
              <div style={{ padding:'22px 22px 26px' }}>
                <div className="mono" style={{ fontSize:10.5, letterSpacing:'.14em', color:'var(--accent)', textTransform:'uppercase', marginBottom:12 }}>
                  {s.kind} ▸ play
                </div>
                <div className="display" style={{ fontSize:18, lineHeight:1.15, margin:'0 0 8px', letterSpacing:'-.015em' }}>
                  {s.t}
                </div>
                <p style={{ fontSize:14, color:'var(--paper-dim)', margin:0, lineHeight:1.5 }}>
                  {s.d}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:80,
        }} className="quotes-grid">
          {[
            {
              q: 'Z Krzysztofa wychodzi się innym człowiekiem. Nie „lepszym pracownikiem" — innym człowiekiem. Po sześciu tygodniach przestałem się budzić o 4:00 z głową w spreadsheetach.',
              who: 'Marek W.', role: 'CEO, scale-up SaaS, B+',
            },
            {
              q: 'Pierwszy mentor, który nie próbował mi sprzedać medytacji. Sprzedał mi konkretny system, którego użyłbym do wdrożenia procesu w firmie. Tylko że ten proces to byłam ja.',
              who: 'Anna G.', role: 'COO, FMCG, 1200+ osób',
            },
          ].map((q, i) => (
            <blockquote key={i} style={{
              margin:0, padding:'36px 36px', border:'1px solid var(--line)',
              background:'rgba(255,255,255,.015)', position:'relative',
            }}>
              <span className="display" style={{
                position:'absolute', top:-8, left:24, fontSize:80, lineHeight:1, color:'var(--accent)', opacity:.8,
              }}>"</span>
              <p style={{ fontSize:17, lineHeight:1.55, margin:'0 0 24px', color:'var(--paper)' }}>
                {q.q}
              </p>
              <footer style={{ display:'flex', alignItems:'center', gap:14 }}>
                <span className="ph" data-label="" style={{ width:40, height:40, borderRadius:'50%' }} />
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>{q.who}</div>
                  <div className="mono" style={{ fontSize:11, color:'var(--paper-faint)', letterSpacing:'.06em' }}>{q.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <DevNote pos={{ bottom: 24, left: 24 }}>
        UX: tile'e YouTube z osadzonym embeddingiem lazy-load (klik → iframe). Portrait — jeśli będzie wideo loop, ten sam slot.
      </DevNote>

      <style>{`
        @media (max-width: 1100px){
          .speeches-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media (max-width: 900px){
          .med-head{grid-template-columns:1fr !important; gap:32px !important}
          .speeches-grid{grid-template-columns:1fr !important}
          .quotes-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────────── FINISH ───────────────── */
function Finish({ result, onTestClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section data-screen-label="06 Finish" id="finish" className="pad" style={{
      background:`radial-gradient(80% 60% at 80% 20%, color-mix(in oklab, var(--accent) 12%, transparent) 0%, transparent 60%), var(--ink)`,
      position:'relative', borderTop:'1px solid var(--line)',
    }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom:24 }}>
          <span className="dot" />
          <span>Banalnie prosty start · S6</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'start' }} className="finish-grid">
          <div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 6vw, 96px)', margin:'0 0 36px' }}>
              Trzy kroki.
              <br/>
              <span style={{ color:'var(--accent)' }}>Pierwszy darmowy.</span>
              <br/>
              <span style={{ color:'var(--paper-faint)' }}>Bez listy mailingowej.</span>
            </h2>

            <ol style={{ listStyle:'none', padding:0, margin:'0 0 40px', display:'grid', gap:18, counterReset:'s' }}>
              {[
                ['Zrób darmowy Test Sabotażystów.', '15 minut, online, w języku polskim. Dostajesz raport z 10 sabotażystów + wskazaniem dwóch dominujących.'],
                ['Umów 30 min Discovery Call.', 'Bez sprzedaży, bez slajdów. Omawiam z Tobą raport i mówię uczciwie, czy moja praca jest tym, czego potrzebujesz.'],
                ['Decyzja należy do Ciebie.', 'Wchodzisz w 6-tygodniowy program, dostajesz materiały do samodzielnej pracy, albo idziesz dalej z tym, czego się dowiedziałeś.'],
              ].map(([t, b], i) => (
                <li key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:24, alignItems:'baseline' }}>
                  <span className="display" style={{ fontSize:36, color:'var(--accent)', lineHeight:1, minWidth:64 }}>
                    {String(i+1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="display" style={{ fontSize:'clamp(20px, 2vw, 26px)', lineHeight:1.15, margin:'0 0 8px', letterSpacing:'-.015em' }}>
                      {t}
                    </div>
                    <p style={{ fontSize:15.5, color:'var(--paper-dim)', margin:0, lineHeight:1.6, maxWidth:'52ch' }}>
                      {b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <button className="btn btn-primary" onClick={onTestClick}>
                Zacznij od testu <span className="arrow">→</span>
              </button>
              <a className="btn btn-ghost" href="#">Discovery Call · Zencal</a>
            </div>
          </div>

          {/* Centrum Akceptacji card preview */}
          <AcceptanceCard result={result} hovered={hovered} setHovered={setHovered} onClick={onTestClick} />
        </div>

        <div style={{
          marginTop:96, paddingTop:32, borderTop:'1px solid var(--line)',
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:24, alignItems:'baseline',
        }}>
          <p className="display" style={{ fontSize:'clamp(28px, 3.4vw, 48px)', lineHeight:1.05, margin:0, maxWidth:'22ch' }}>
            Nie musisz być gotowy. Musisz tylko zacząć.
          </p>
          <p className="mono" style={{ fontSize:11.5, color:'var(--paper-faint)', letterSpacing:'.14em', textTransform:'uppercase', maxWidth:'28ch', textAlign:'right' }}>
            Test trwa 15 min. <br/> Discovery Call 30 min. <br/> Reszta to Twoja decyzja.
          </p>
        </div>
      </div>

      <DevNote pos={{ top: 24, right: 24 }}>
        UX: karta „Centrum Akceptacji" – interaktywny mock testu (klik = animacja postępu + pseudo-wynik). Discovery Call CTA podpięty pod Zencal w realu.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .finish-grid{grid-template-columns:1fr !important; gap:48px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────────── Acceptance Card widget ───────────────── */
function AcceptanceCard({ result, hovered, setHovered, onClick }) {
  const sabos = [
    { name: 'Sędzia',         score: 0.84, hint: 'Twój główny krytyk.' },
    { name: 'Hyper-Achiever', score: 0.72, hint: 'Wartość = wynik.' },
    { name: 'Kontroler',      score: 0.68, hint: 'Plan jako lek.' },
    { name: 'Please-r',       score: 0.41, hint: 'Tak. Tak. Tak.' },
    { name: 'Ofiara',         score: 0.18, hint: '—' },
  ];
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'#0a0d14',
        border:'1px solid var(--line)',
        padding:'28px 28px 24px',
        position:'relative',
        boxShadow: hovered
          ? '0 30px 80px -20px var(--accent-glow), 0 1px 0 rgba(255,255,255,.06) inset'
          : '0 20px 50px -20px rgba(0,0,0,.5), 0 1px 0 rgba(255,255,255,.04) inset',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition:'all .25s ease',
      }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
        <div>
          <div className="mono" style={{ fontSize:10.5, letterSpacing:'.16em', color:'var(--paper-faint)', textTransform:'uppercase' }}>
            Centrum Akceptacji
          </div>
          <div className="display" style={{ fontSize:22, marginTop:6, letterSpacing:'-.02em' }}>
            Twój raport · podgląd
          </div>
        </div>
        <span className="mono" style={{
          fontSize:10, padding:'5px 8px', border:'1px solid var(--accent)', color:'var(--accent)',
          letterSpacing:'.14em', textTransform:'uppercase',
        }}>
          DEMO
        </span>
      </div>

      <div style={{ display:'grid', gap:10, marginBottom:24 }}>
        {sabos.map((s, i) => (
          <div key={s.name} style={{ display:'grid', gridTemplateColumns:'140px 1fr 48px', gap:14, alignItems:'center' }}>
            <span style={{ fontSize:14, fontWeight:500 }}>{s.name}</span>
            <div style={{ height:6, background:'rgba(255,255,255,.06)', borderRadius:0, overflow:'hidden' }}>
              <div style={{
                height:'100%',
                width:`${s.score * 100}%`,
                background: i < 2 ? 'var(--accent)' : 'var(--paper-faint)',
                transition:'width .8s cubic-bezier(.6,.2,.2,1)',
              }} />
            </div>
            <span className="mono" style={{ fontSize:11, color:'var(--paper-faint)', textAlign:'right' }}>
              {Math.round(s.score * 100)}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        padding:'16px 18px', background:'rgba(255,255,255,.03)', border:'1px solid var(--line)',
        marginBottom:20,
      }}>
        <div className="mono" style={{ fontSize:10.5, color:'var(--accent)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:8 }}>
          Twoja diagnoza →
        </div>
        <p style={{ margin:0, fontSize:14, lineHeight:1.55, color:'var(--paper)' }}>
          <strong>Sędzia + Hyper-Achiever.</strong> Klasyczny duet polskiego przedsiębiorcy.
          Wynik: imponujący na zewnątrz. W środku — wyczerpanie i ciche poczucie, że nigdy nie jest dosyć.
        </p>
      </div>

      <button className="btn btn-primary" onClick={onClick} style={{ width:'100%', justifyContent:'center', fontSize:13 }}>
        Zrób swój test · 15 min <span className="arrow">→</span>
      </button>

      <div className="mono" style={{ fontSize:10, color:'var(--paper-faint)', letterSpacing:'.12em', textTransform:'uppercase', textAlign:'center', marginTop:14 }}>
        Bez zapisu do newslettera · bez karty · bez triggerów
      </div>
    </div>
  );
}

/* ───────────────── FOOTER ───────────────── */
function Footer() {
  return (
    <footer style={{
      background:'#06080d', borderTop:'1px solid var(--line)', padding:'64px 0 48px',
    }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:48, marginBottom:64 }} className="foot-grid">
          <div>
            <div className="display" style={{ fontSize:24, letterSpacing:'-.02em', marginBottom:14 }}>
              KRZYSZTOF&nbsp;WNĘK
            </div>
            <p style={{ color:'var(--paper-dim)', fontSize:14, margin:0, lineHeight:1.55, maxWidth:'36ch' }}>
              Mentor PQ. Trener mentalny dla&nbsp;liderów i&nbsp;ich zespołów.
              Bo terapia nudzi, a coaching irytuje.
            </p>
          </div>
          {[
            ['Praca', ['Indywidualnie', 'Dla firm', 'Discovery Call', 'Test Sabotażystów']],
            ['Scena', ['Architekci Spokoju', 'Power Speeches', 'TEDx', 'Press']],
            ['Kontakt', ['krzysztof@auraflux.pl', 'LinkedIn', 'YouTube', 'Instagram']],
          ].map(([h, items]) => (
            <div key={h}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'.16em', color:'var(--paper-faint)', textTransform:'uppercase', marginBottom:18 }}>{h}</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:10 }}>
                {items.map(x => (
                  <li key={x}><a href="#" style={{ color:'var(--paper)', textDecoration:'none', fontSize:14 }}>{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16,
          paddingTop:28, borderTop:'1px solid var(--line)',
          color:'var(--paper-faint)', fontSize:12,
        }}>
          <span className="mono" style={{ letterSpacing:'.06em' }}>© 2026 Krzysztof Wnęk · wszystkie prawa zastrzeżone</span>
          <span className="mono" style={{ letterSpacing:'.06em' }}>auraflux.pl · made for the ones who already have everything</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          .foot-grid{grid-template-columns:1fr 1fr !important; gap:32px !important}
        }
      `}</style>
    </footer>
  );
}

/* ───────────────── Floating UX dev-note tag ───────────────── */
function DevNote({ pos, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-devnote style={{
      position:'absolute', ...pos, zIndex:5,
      maxWidth: open ? 320 : 36, transition:'max-width .25s ease',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        title="Komentarz UX dla devów"
        style={{
          appearance:'none', border:'1px dashed var(--accent)',
          background:'rgba(0,0,0,.4)', color:'var(--accent)',
          fontFamily:'JetBrains Mono', fontSize:11, letterSpacing:'.08em',
          padding: open ? '12px 14px' : '6px 8px',
          cursor:'pointer', textAlign:'left', borderRadius:0, width:'100%',
          backdropFilter:'blur(8px)',
        }}>
        {open
          ? <span style={{ display:'block', lineHeight:1.4 }}>{children}</span>
          : <span>UX ↗</span>}
      </button>
    </div>
  );
}

/* Export to window so app.jsx (separate Babel scope) can use these */
Object.assign(window, {
  Nav, Hero, Lustro, Mechanizm, Sciezki, Medrzec, Finish, Footer, DevNote,
});
