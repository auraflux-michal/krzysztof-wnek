/* sections.jsx — UI sections for Krzysztof Wnęk homepage (light minimalist) */

const { useState, useEffect, useRef } = React;

/* ───────────── Photo placeholder helper ───────────── */
function Photo({ label, tag, style, children }) {
  return (
    <div className="photo" style={style}>
      {tag && <div className="tag">{tag}</div>}
      {children}
      {label && <div className="caption">{label}</div>}
    </div>
  );
}

/* ───────────── NAV ───────────── */
function Nav({ onCTAClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener('scroll', on, { passive:true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const navStyles = {
    position:'fixed', top:0, left:0, right:0, zIndex:50,
    padding: scrolled ? '14px 0' : '22px 0',
    background: scrolled ? 'rgba(255,255,255,.82)' : 'transparent',
    backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
    borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    transition:'all .25s ease',
  };
  return (
    <nav style={navStyles}>
      <div className="wrap-wide" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:24 }}>
        <a href="#top" style={{ color:'var(--ink)', textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontFamily:'"Archivo"', fontWeight:900, letterSpacing:'-.02em', fontSize:18 }}>KRZYSZTOF&nbsp;WNĘK</span>
          <span className="mono" style={{ fontSize:10, color:'var(--ink-faint)', textTransform:'uppercase', letterSpacing:'.16em' }}>PQ · Mentor</span>
        </a>
        <div className="nav-links" style={{ display:'flex', gap:32, alignItems:'center' }}>
          {[
            ['Mechanizm', '#mechanizm'],
            ['Indywidualnie', '#sciezki'],
            ['Dla firm', '#sciezki'],
            ['Scena', '#medrzec'],
          ].map(([label, href]) => (
            <a key={label} href={href}
               style={{ color:'var(--ink)', textDecoration:'none', fontSize:13.5, fontWeight:500, letterSpacing:'.02em' }}>
              {label}
            </a>
          ))}
          <button className="btn btn-primary" onClick={onCTAClick} style={{ padding:'12px 18px', fontSize:12 }}>
            Test Sabotażystów <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px){ .nav-links a{display:none} }
      `}</style>
    </nav>
  );
}

/* ───────────── HERO ───────────── */
function Hero({ onTestClick }) {
  return (
    <section data-screen-label="01 Hero" style={{
      position:'relative', paddingTop:160, paddingBottom:120, background:'var(--paper)',
    }}>
      <div className="wrap-wide" style={{ position:'relative' }}>

        {/* Top meta row */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          marginBottom:80, gap:24, flexWrap:'wrap',
        }}>
          <div className="eyebrow"><span className="dot" /> Mentor / trener mentalny PQ / mówca</div>
          <div className="mono" style={{ fontSize:11, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--ink-faint)' }}>
            Kraków · 2026 · auraflux.pl
          </div>
        </div>

        {/* Headline — big and asymmetric */}
        <div style={{ display:'grid', gridTemplateColumns:'1.45fr 1fr', gap:64, alignItems:'end' }} className="hero-grid">
          <div>
            <h1 className="display" style={{
              fontSize:'clamp(56px, 11vw, 184px)',
              margin:'0 0 36px', maxWidth:'14ch',
            }}>
              Od&nbsp;<em style={{
                fontStyle:'normal', fontFamily:'"Archivo"', fontWeight:300,
                color:'var(--ink-faint)', textDecoration:'line-through',
                textDecorationThickness:'3px',
              }}>muszę</em>
              {' '}do{' '}
              <span style={{
                color:'var(--accent)',
                fontStyle:'italic', fontFamily:'"Archivo"', fontWeight:900,
              }}>chcę.</span>
              <br/>
              W&nbsp;6&nbsp;tygodni.<br/>
              <span style={{ color:'var(--ink-faint)' }}>Bez&nbsp;terapii.</span>
            </h1>
          </div>

          {/* Right column — sub + CTA */}
          <div style={{ paddingBottom:24 }}>
            <p style={{
              fontSize:'clamp(17px, 1.4vw, 22px)', lineHeight:1.55,
              color:'var(--ink-soft)', margin:'0 0 36px', maxWidth:'34ch', fontWeight:400,
            }}>
              Pracuję z liderami, przedsiębiorcami i top‑managementem,
              którzy mają już wszystko — oprócz spokoju, sensu
              i wieczorów z&nbsp;rodziną.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:32 }}>
              <button className="btn btn-primary" onClick={onTestClick}>
                Zrób Test Sabotażystów <span className="arrow">→</span>
              </button>
              <a className="btn btn-ghost" href="#finish">
                Discovery Call · 30 min
              </a>
            </div>
            <div className="mono" style={{ fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-faint)' }}>
              Test trwa 15&nbsp;min · bez maila · bez karty
            </div>
          </div>
        </div>

        {/* Big cinematic photo — like a TR hero shot */}
        <Photo
          tag="STAGE · KEYNOTE 2025"
          label="HERO_VIDEO · KW na scenie, slow-mo, snopy światła, audytorium w półcieniu"
          style={{
            marginTop:80, height:'clamp(420px, 62vh, 720px)', width:'100%',
            background:`
              radial-gradient(60% 60% at 30% 30%, rgba(255,180,120,.18) 0%, transparent 60%),
              radial-gradient(50% 70% at 75% 60%, rgba(255,77,46,.25) 0%, transparent 60%),
              radial-gradient(40% 40% at 50% 110%, rgba(255,255,255,.08) 0%, transparent 60%),
              linear-gradient(160deg, #1a1d24 0%, #06080d 100%)
            `,
          }}>
          {/* light beams */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            background:`
              linear-gradient(110deg, transparent 35%, rgba(255,210,180,.05) 38%, transparent 41%),
              linear-gradient(70deg, transparent 50%, rgba(255,255,255,.04) 52%, transparent 55%)
            `,
          }} />
          {/* silhouette suggestion */}
          <div style={{
            position:'absolute', left:'50%', bottom:0, transform:'translateX(-50%)',
            width:'min(40%, 320px)', height:'70%',
            background:'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,.65) 0%, transparent 70%)',
            filter:'blur(6px)',
          }} />
          {/* play / runtime tag */}
          <div style={{
            position:'absolute', right:18, bottom:14, display:'flex', alignItems:'center', gap:10,
            background:'rgba(255,255,255,.95)', color:'var(--ink)', padding:'10px 14px',
            borderRadius:999, fontFamily:'"Archivo"', fontWeight:700, fontSize:12, letterSpacing:'.06em', textTransform:'uppercase',
            cursor:'pointer',
          }}>
            <span style={{
              width:0, height:0, borderLeft:'9px solid var(--ink)',
              borderTop:'6px solid transparent', borderBottom:'6px solid transparent',
            }} />
            Odtwórz · 1:42
          </div>
        </Photo>

        {/* Stat strip */}
        <div style={{
          marginTop:40,
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:0,
          borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)',
        }}>
          {[
            ['43', 'odcinki podcastu'],
            ['1 200+', 'godzin mentoringu'],
            ['6 tyg.', 'mierzalna zmiana'],
            ['10', 'sabotażystów do złapania'],
          ].map(([n, l], i, a) => (
            <div key={l} style={{
              padding:'28px 28px',
              borderRight: i < a.length - 1 ? '1px solid var(--line)' : 'none',
            }}>
              <div className="display" style={{ fontSize:38, lineHeight:1, marginBottom:8 }}>{n}</div>
              <div className="mono" style={{ fontSize:10.5, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink-faint)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <DevNote pos={{ top: 130, right: 56 }}>
        UX: hero zdjęcie/wideo = pętla 6–10 s, parallaksa scroll-linked. Headline ze split-reveal (mask) na entrance. „Odtwórz" otwiera modal wideo (lightbox).
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .hero-grid{grid-template-columns:1fr !important; gap:32px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── LUSTRO ───────────── */
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
    <section data-screen-label="02 Lustro" id="lustro" className="pad" style={{ background:'var(--paper)' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'end', marginBottom:96 }} className="lustro-head">
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" /> Lustro · S2
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 6.2vw, 100px)', margin:0 }}>
              Jeśli to siebie tu widzisz —
              <br/>
              <span style={{ color:'var(--ink-faint)' }}>to nie jest przypadek.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize:19, color:'var(--ink-soft)', maxWidth:'40ch', margin:0, lineHeight:1.6 }}>
              Cztery zdania, które niedawno wypowiedział głośno mężczyzna zarabiający ponad
              milion złotych rocznie — zanim zdecydował się zacząć ze mną pracować.
            </p>
          </div>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:0,
          borderTop:'1px solid var(--line)', borderLeft:'1px solid var(--line)',
        }} className="mirror-grid">
          {mirrors.map((m) => (
            <article key={m.n} style={{
              padding:'56px 48px 52px',
              borderRight:'1px solid var(--line)', borderBottom:'1px solid var(--line)',
              minHeight: 300, background:'var(--paper)',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:32 }}>
                <span className="mono" style={{ color:'var(--ink-faint)', fontSize:12, letterSpacing:'.14em' }}>{m.n} / 04</span>
                <span style={{ width:48, height:1, background:'var(--line-2)' }} />
              </div>
              <h3 className="display" style={{
                fontSize:'clamp(26px, 2.6vw, 38px)', lineHeight:1.05, margin:'0 0 22px',
                letterSpacing:'-.02em',
              }}>
                {m.title}
              </h3>
              <p style={{ color:'var(--ink-soft)', fontSize:16.5, lineHeight:1.7, margin:0, maxWidth:'48ch' }}>
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <div style={{
          marginTop:96,
          display:'flex', justifyContent:'space-between', gap:48, alignItems:'baseline', flexWrap:'wrap',
        }}>
          <p className="display" style={{ fontSize:'clamp(24px, 2.8vw, 38px)', lineHeight:1.15, margin:0, maxWidth:'26ch' }}>
            To nie wypalenie.
            <br/>
            To system, który Cię tu doprowadził —<br/>
            <span style={{ color:'var(--accent)' }}>i&nbsp;który nie zaprowadzi Cię dalej.</span>
          </p>
          <a href="#mechanizm" style={{
            color:'var(--ink)', textDecoration:'none', fontSize:13.5, fontWeight:600,
            letterSpacing:'.04em', textTransform:'uppercase',
            display:'inline-flex', alignItems:'center', gap:10,
          }}>
            Zobacz mechanizm <span>↓</span>
          </a>
        </div>
      </div>

      <DevNote pos={{ top: 24, right: 24 }}>
        UX: każda karta lustra fade-in + lekki y-translate przy wejściu w viewport. Bez ikon — siła w typografii i białej przestrzeni.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .lustro-head,.mirror-grid{grid-template-columns:1fr !important; gap:32px !important}
        }
      `}</style>
    </section>
  );
}


/* ───────────── MECHANIZM ───────────── */
function Mechanizm() {
  const cols = [
    {
      tag: 'DIAGNOZA',
      title: 'Sabotażyści',
      body: 'Mierzymy 10 wewnętrznych sabotażystów, którzy podejmują za Ciebie 70% decyzji. Sędzia, Hyper-Achiever, Kontroler, Please-r. Nie domysł — test oparty na 25 latach badań Stanforda.',
      meta: '15 min · darmowe · w jęz. polskim',
      photo: 'PORTRAIT · KW w studio, czarne tło, profil',
    },
    {
      tag: 'OPERATOR',
      title: 'Mędrzec',
      body: 'Aktywujemy część mózgu, która generuje spokój, kreatywność i zdecydowane działanie zamiast paniki, kontroli i odkładania. Pięć mocy: Empatia, Eksploracja, Innowacja, Nawigacja, Aktywacja.',
      meta: '5 mocy · mierzalne · neuroplastyczne',
      photo: 'CANDID · KW prowadzi sesję 1:1, świetle dziennie',
    },
    {
      tag: 'TRENING',
      title: 'Reps',
      body: '6 tygodni × 15 minut dziennie w aplikacji + cotygodniowy mentoring 1:1 ze mną. Tak buduje się nawyk i nowy nawyk myślenia. Nie inaczej. Nie szybciej. Nie magicznie.',
      meta: '6 tyg. · ~15 min/dzień · 1:1 weekly',
      photo: 'DETAIL · ręce na klawiaturze + aplikacja PQ',
    },
  ];
  return (
    <section data-screen-label="03 Mechanizm" id="mechanizm" className="pad" style={{ background:'var(--paper-2)' }}>
      <div className="wrap-wide">
        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'end', marginBottom:96 }} className="mech-head">
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" /> Mechanizm · most między biznesem a głową
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 6vw, 96px)', margin:0 }}>
              PQ — czyli dlaczego
              <br/>
              <span style={{ color:'var(--accent)' }}>terapia&nbsp;Cię&nbsp;nudzi,</span>
              <br/>
              a&nbsp;coaching&nbsp;Cię&nbsp;irytuje.
            </h2>
          </div>
          <div>
            <p style={{ fontSize:18, color:'var(--ink-soft)', margin:'0 0 16px', lineHeight:1.65 }}>
              <strong style={{ color:'var(--ink)' }}>Positive Intelligence</strong> to system treningu
              mięśni mentalnych Shirzada Chamine'a — 25 lat badań Stanforda i danych
              z 500 tys. liderów.
            </p>
            <p style={{ fontSize:15.5, color:'var(--ink-dim)', margin:0, lineHeight:1.65 }}>
              Mierzalny. Powtarzalny. Działa nawet wtedy, gdy nie wierzysz, że zadziała —
              bo nie pracuje na wierze. Pracuje na neuroplastyczności.
            </p>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32 }} className="mech-grid">
          {cols.map((c, i) => (
            <article key={c.tag} style={{ background:'var(--paper)', border:'1px solid var(--line)', display:'flex', flexDirection:'column' }}>
              <Photo
                tag={`KROK ${String(i+1).padStart(2,'0')}`}
                label={c.photo}
                style={{ aspectRatio:'4/3', width:'100%' }}
              />
              <div style={{ padding:'36px 32px 32px', display:'flex', flexDirection:'column', gap:16, flex:1 }}>
                <div className="mono" style={{ fontSize:10.5, letterSpacing:'.18em', color:'var(--accent)', textTransform:'uppercase' }}>
                  {c.tag}
                </div>
                <h3 className="display" style={{ fontSize:44, lineHeight:1, margin:0, letterSpacing:'-.025em' }}>
                  {c.title}
                </h3>
                <p style={{ color:'var(--ink-soft)', fontSize:15.5, lineHeight:1.65, margin:0 }}>{c.body}</p>
                <div className="mono" style={{
                  marginTop:'auto', paddingTop:18, borderTop:'1px solid var(--line)',
                  fontSize:11, color:'var(--ink-faint)', letterSpacing:'.06em',
                }}>
                  {c.meta}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{
          marginTop:72, padding:'40px 44px', border:'1px solid var(--line)', background:'var(--paper)',
          display:'flex', justifyContent:'space-between', gap:24, alignItems:'center', flexWrap:'wrap',
        }}>
          <div className="display" style={{ fontSize:'clamp(22px, 2.3vw, 32px)', lineHeight:1.15, letterSpacing:'-.015em' }}>
            Logika inżyniera.&nbsp;
            <span style={{ color:'var(--ink-faint)' }}>Energia mentora.</span>&nbsp;
            <span style={{ color:'var(--accent)' }}>Wynik mierzalny w 6 tygodni.</span>
          </div>
          <a href="#sciezki" className="btn btn-primary" style={{ fontSize:13 }}>
            Wybierz ścieżkę <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <DevNote pos={{ bottom: 24, right: 24 }}>
        UX: 3 karty z prawdziwymi zdjęciami → studyjne portrety + candid. Aspect 4:3, lekki paralax na hover.
      </DevNote>

      <style>{`
        @media (max-width: 1000px){
          .mech-grid{grid-template-columns:1fr !important; gap:24px !important}
        }
        @media (max-width: 900px){
          .mech-head{grid-template-columns:1fr !important; gap:32px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── DWIE ŚCIEŻKI ───────────── */
function Sciezki() {
  return (
    <section data-screen-label="04 Ścieżki" id="sciezki" className="pad" style={{ background:'var(--paper)' }}>
      <div className="wrap-wide">
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:32, marginBottom:80, flexWrap:'wrap' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" /> Wybierz ścieżkę · S4
            </div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 6vw, 92px)', margin:0 }}>
              Dwa światy. <span style={{ color:'var(--ink-faint)' }}>Jedna metoda.</span>
            </h2>
          </div>
          <p className="mono" style={{ fontSize:12, color:'var(--ink-faint)', letterSpacing:'.12em', textTransform:'uppercase', maxWidth:'32ch' }}>
            Dla Ciebie / dla zarządu Twojej firmy
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }} className="sciezki-grid">

          {/* B2C */}
          <article style={{
            background:'var(--paper)', border:'1px solid var(--line)',
            display:'flex', flexDirection:'column', position:'relative',
          }}>
            <Photo
              tag="ŚCIEŻKA A · INDYWIDUALNIE"
              label="LIFESTYLE · KW z klientem 1:1, kawa, słońce, kuchnia w domu"
              style={{ aspectRatio:'16/10', width:'100%' }}
            />
            <div style={{ padding:'40px 40px 36px', display:'flex', flexDirection:'column', gap:20 }}>
              <h3 className="display" style={{ fontSize:'clamp(28px, 3.4vw, 48px)', lineHeight:1.02, margin:0 }}>
                Wróć do domu człowiekiem, którego sam chciałbyś mieć za ojca.
              </h3>
              <p style={{ color:'var(--ink-soft)', fontSize:16, lineHeight:1.65, margin:0 }}>
                Sześć tygodni głębokiej pracy 1:1 ze mną i z aplikacją PQ.
                Energia, radość, obecność. Pierwsza zmiana zauważalna w 14 dni.
                Pełna — w 6 tygodni. Trwała — w 6 miesięcy.
              </p>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:10 }}>
                {[
                  '6-tygodniowy program PQ (Mental Fitness Bootcamp)',
                  'Cotygodniowy mentoring 1:1 ze mną (60 min)',
                  'Aplikacja PQ + 5 mocy Mędrca, codzienne reps',
                  'Zamknięta grupa absolwentów (akredytacja PQ)',
                ].map(li => (
                  <li key={li} style={{ display:'flex', gap:14, fontSize:15, color:'var(--ink)', lineHeight:1.5 }}>
                    <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono', fontSize:13 }}>▸</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop:8, paddingTop:24, borderTop:'1px solid var(--line)',
                display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap',
              }}>
                <div>
                  <div className="mono" style={{ fontSize:10.5, color:'var(--ink-faint)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:6 }}>
                    Inwestycja
                  </div>
                  <div className="display" style={{ fontSize:24, lineHeight:1 }}>na rozmowie</div>
                </div>
                <a href="#finish" className="btn btn-primary" style={{ fontSize:12.5 }}>
                  Program indywidualny <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* B2B */}
          <article style={{
            background:'var(--ink)', color:'var(--paper)', border:'1px solid var(--ink)',
            display:'flex', flexDirection:'column', position:'relative',
          }}>
            <Photo
              tag="ŚCIEŻKA B · DLA FIRM"
              label="BOARDROOM · KW prowadzi sesję dla zarządu, duża sala, energia"
              style={{ aspectRatio:'16/10', width:'100%' }}
            />
            <div style={{ padding:'40px 40px 36px', display:'flex', flexDirection:'column', gap:20 }}>
              <h3 className="display" style={{ fontSize:'clamp(28px, 3.4vw, 48px)', lineHeight:1.02, margin:0 }}>
                Top management nie pęka. Albo pęka po cichu — i drogo.
              </h3>
              <p style={{ color:'rgba(255,255,255,.7)', fontSize:16, lineHeight:1.65, margin:0 }}>
                Program PQ dla C-level, zarządów i kluczowych liderów.
                Mierzalna redukcja kosztów blokad decyzyjnych, wypalenia
                i rotacji w warstwie sukcesyjnej. ROI w 90 dni od startu.
              </p>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:10 }}>
                {[
                  'Diagnoza Sabotażystów dla zespołu (raport zbiorczy + indywidualny)',
                  'Program 6–12 tyg. dla kadry (on-site + asynchronicznie)',
                  'Sesje keynote, off-site retreats, warsztaty zarządu',
                  'Raport HR: wpływ na produktywność, retencję, decyzyjność',
                ].map(li => (
                  <li key={li} style={{ display:'flex', gap:14, fontSize:15, color:'rgba(255,255,255,.92)', lineHeight:1.5 }}>
                    <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono', fontSize:13 }}>▸</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop:8, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.12)',
                display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap',
              }}>
                <div>
                  <div className="mono" style={{ fontSize:10.5, color:'rgba(255,255,255,.5)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:6 }}>
                    Wycena
                  </div>
                  <div className="display" style={{ fontSize:24, lineHeight:1 }}>pod skalę</div>
                </div>
                <a href="#finish" className="btn" style={{
                  fontSize:12.5, background:'var(--paper)', color:'var(--ink)',
                }}>
                  One-pager B2B <span className="arrow">↓</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <DevNote pos={{ top: 24, left: 24 }}>
        UX: kontrast B2C (jasna karta, ciepło) vs B2B (czarna karta, prestiż). Na hover lekki lift (-3px) + shadow.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .sciezki-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── MARQUEE between sections ───────────── */
function Marquee() {
  const items = [
    'TEDX KRAKÓW','INFOSHARE','EEC EUROPEAN ECONOMIC CONGRESS','MASTERS&ROBOTS',
    'KONGRES PRZEDSIĘBIORCÓW','CXO SUMMIT','POWER SPEECH · WARSZAWA',
    'TEDX WROCŁAW','PRESS · FORBES PL','PODCAST · ARCHITEKCI SPOKOJU',
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row.map((t, i) => (
          <span className="item" key={i}>
            {t} <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Mechanizm, Sciezki, Marquee });


/* ───────────── MĘDRZEC ───────────── */
function Medrzec() {
  const speeches = [
    { t: 'Architekci Spokoju · #43', d: 'Dlaczego dyscyplina Cię zabija. Rozmowa z prof. Janem K.', kind: 'PODCAST', img:'YT_THUMB · rozmowa w studio, dwa krzesła, mikrofony' },
    { t: 'TEDx Kraków',              d: 'Sabotażysta w garniturze: 10 ról, które gramy zamiast siebie.', kind: 'KEYNOTE', img:'STAGE · TEDx czerwony krąg, KW w ruchu' },
    { t: 'Infoshare 2025',           d: 'Decyzyjność liderów AI: jak nie pęknąć pod presją tempa.', kind: 'KEYNOTE', img:'STAGE · duża scena, niebieskie światło, wide shot' },
    { t: 'Architekci Spokoju · #38', d: 'Mąż, ojciec, prezes. Wybierz dwa. (A potem wybierz wszystkie trzy.)', kind: 'PODCAST', img:'YT_THUMB · KW z gościem, kawa, ciepłe światło' },
  ];
  return (
    <section data-screen-label="05 Mędrzec" id="medrzec" className="pad" style={{ background:'var(--paper)' }}>
      <div className="wrap-wide">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.15fr', gap:80, alignItems:'center', marginBottom:96 }} className="med-head">
          {/* Big portrait */}
          <Photo
            tag="O MNIE · 2026"
            label="PORTRAIT · KW · half-body, naturalne światło, white wall, lekki uśmiech"
            style={{ aspectRatio:'4/5', width:'100%' }}
          />

          <div>
            <div className="eyebrow" style={{ marginBottom:24 }}>
              <span className="dot" /> Mędrzec ze sceny · o&nbsp;mnie
            </div>
            <h2 className="display" style={{ fontSize:'clamp(36px, 5.4vw, 84px)', margin:'0 0 32px' }}>
              Płonę, żeby
              <br/>
              <span style={{ color:'var(--accent)' }}>zapalać innych.</span>
            </h2>
            <p style={{ fontSize:19, color:'var(--ink)', lineHeight:1.6, margin:'0 0 18px', maxWidth:'52ch' }}>
              Krzysztof Wnęk. 20 lat w biznesie. Ostatnie 8 — w bardzo konkretnej pracy
              nad sobą i nad ludźmi, którzy z zewnątrz wyglądają, jakby nic im nie&nbsp;dolegało.
            </p>
            <p style={{ fontSize:16, color:'var(--ink-soft)', lineHeight:1.65, margin:'0 0 32px', maxWidth:'56ch' }}>
              Certyfikowany trener Positive Intelligence. Twórca podcastu
              <em style={{ fontStyle:'normal', color:'var(--ink)' }}> „Architekci Spokoju"</em> (43 odcinki, ponad
              180 tys. odsłuchań). Mówca na scenach TEDx, Infoshare, EEC.
              Mentor, nie terapeuta. Mędrzec, nie kaznodzieja.
            </p>
            <div style={{ display:'flex', gap:48, flexWrap:'wrap' }}>
              {[
                ['43', 'odcinki'],
                ['180k', 'odsłuchań'],
                ['12', 'wystąpień / rok'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="display" style={{ fontSize:44, lineHeight:1, color:'var(--accent)' }}>{n}</div>
                  <div className="mono" style={{ fontSize:10.5, color:'var(--ink-faint)', letterSpacing:'.14em', textTransform:'uppercase', marginTop:8 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mono" style={{
          display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'22px 0',
          borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)', marginBottom:32,
          fontSize:11.5, color:'var(--ink-faint)', letterSpacing:'.16em', textTransform:'uppercase',
        }}>
          <span>Power Speeches &amp; Architekci Spokoju</span>
          <span>4 / 43</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24 }} className="speeches-grid">
          {speeches.map((s, i) => (
            <a key={i} href="#" style={{ background:'var(--paper)', border:'1px solid var(--line)', textDecoration:'none', color:'inherit', display:'block' }}>
              <Photo tag={s.kind} label={s.img} style={{ aspectRatio:'16/10', width:'100%' }} />
              <div style={{ padding:'22px 22px 26px' }}>
                <div className="mono" style={{ fontSize:10.5, letterSpacing:'.14em', color:'var(--accent)', textTransform:'uppercase', marginBottom:12 }}>
                  ▸ play
                </div>
                <div className="display" style={{ fontSize:19, lineHeight:1.15, margin:'0 0 8px', letterSpacing:'-.015em' }}>
                  {s.t}
                </div>
                <p style={{ fontSize:14, color:'var(--ink-soft)', margin:0, lineHeight:1.5 }}>{s.d}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:96,
        }} className="quotes-grid">
          {[
            { q: 'Z Krzysztofa wychodzi się innym człowiekiem. Nie „lepszym pracownikiem" — innym człowiekiem. Po sześciu tygodniach przestałem się budzić o 4:00 z głową w spreadsheetach.', who: 'Marek W.', role: 'CEO, scale-up SaaS, B+' },
            { q: 'Pierwszy mentor, który nie próbował mi sprzedać medytacji. Sprzedał mi konkretny system, którego użyłabym do wdrożenia procesu w firmie. Tylko że tym procesem byłam ja.', who: 'Anna G.', role: 'COO, FMCG, 1200+ osób' },
          ].map((q, i) => (
            <blockquote key={i} style={{
              margin:0, padding:'40px 40px', border:'1px solid var(--line)', background:'var(--paper-2)', position:'relative',
            }}>
              <span className="display" style={{ position:'absolute', top:-12, left:28, fontSize:90, lineHeight:1, color:'var(--accent)' }}>"</span>
              <p style={{ fontSize:18, lineHeight:1.55, margin:'0 0 28px', color:'var(--ink)' }}>{q.q}</p>
              <footer style={{ display:'flex', alignItems:'center', gap:14 }}>
                <Photo style={{ width:44, height:44, borderRadius:'50%' }} />
                <div>
                  <div style={{ fontSize:14, fontWeight:600 }}>{q.who}</div>
                  <div className="mono" style={{ fontSize:11, color:'var(--ink-faint)', letterSpacing:'.06em' }}>{q.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <DevNote pos={{ bottom: 24, left: 24 }}>
        UX: tile'e YouTube → lazy embed (klik = iframe). Big portrait może być wymienione na 6s wideo loop.
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

/* ───────────── FINISH ───────────── */
function Finish({ onTestClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section data-screen-label="06 Finish" id="finish" className="pad" style={{
      background:'var(--paper-2)', position:'relative', borderTop:'1px solid var(--line)',
    }}>
      <div className="wrap-wide">
        <div className="eyebrow" style={{ marginBottom:24 }}>
          <span className="dot" /> Banalnie prosty start · S6
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:80, alignItems:'start' }} className="finish-grid">
          <div>
            <h2 className="display" style={{ fontSize:'clamp(40px, 6.4vw, 104px)', margin:'0 0 40px' }}>
              Trzy kroki.
              <br/>
              <span style={{ color:'var(--accent)' }}>Pierwszy darmowy.</span>
              <br/>
              <span style={{ color:'var(--ink-faint)' }}>Bez listy mailingowej.</span>
            </h2>

            <ol style={{ listStyle:'none', padding:0, margin:'0 0 44px', display:'grid', gap:22 }}>
              {[
                ['Zrób darmowy Test Sabotażystów.', '15 minut, online, w języku polskim. Dostajesz raport z 10 sabotażystów + wskazaniem dwóch dominujących.'],
                ['Umów 30 min Discovery Call.', 'Bez sprzedaży, bez slajdów. Omawiam z Tobą raport i mówię uczciwie, czy moja praca jest tym, czego potrzebujesz.'],
                ['Decyzja należy do Ciebie.', 'Wchodzisz w 6-tygodniowy program, dostajesz materiały do samodzielnej pracy, albo idziesz dalej z tym, czego się dowiedziałeś.'],
              ].map(([t, b], i) => (
                <li key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:28, alignItems:'baseline' }}>
                  <span className="display" style={{ fontSize:44, color:'var(--accent)', lineHeight:1, minWidth:72 }}>
                    {String(i+1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="display" style={{ fontSize:'clamp(22px, 2.2vw, 30px)', lineHeight:1.15, margin:'0 0 10px', letterSpacing:'-.015em' }}>
                      {t}
                    </div>
                    <p style={{ fontSize:16, color:'var(--ink-soft)', margin:0, lineHeight:1.65, maxWidth:'56ch' }}>{b}</p>
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

          <AcceptanceCard hovered={hovered} setHovered={setHovered} onClick={onTestClick} />
        </div>

        <div style={{
          marginTop:120, paddingTop:40, borderTop:'1px solid var(--line)',
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:32, alignItems:'baseline',
        }}>
          <p className="display" style={{ fontSize:'clamp(32px, 4vw, 56px)', lineHeight:1.05, margin:0, maxWidth:'24ch' }}>
            Nie musisz być gotowy. Musisz tylko zacząć.
          </p>
          <p className="mono" style={{ fontSize:11.5, color:'var(--ink-faint)', letterSpacing:'.14em', textTransform:'uppercase', maxWidth:'28ch', textAlign:'right' }}>
            Test trwa 15 min. <br/> Discovery Call 30 min. <br/> Reszta to Twoja decyzja.
          </p>
        </div>
      </div>

      <DevNote pos={{ top: 24, right: 24 }}>
        UX: karta „Centrum Akceptacji" interaktywna — klik = modal pełny test. CTA Discovery Call → Zencal embed.
      </DevNote>

      <style>{`
        @media (max-width: 900px){
          .finish-grid{grid-template-columns:1fr !important; gap:48px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── Acceptance Card ───────────── */
function AcceptanceCard({ hovered, setHovered, onClick }) {
  const sabos = [
    { name: 'Sędzia',         score: 0.84 },
    { name: 'Hyper-Achiever', score: 0.72 },
    { name: 'Kontroler',      score: 0.68 },
    { name: 'Please-r',       score: 0.41 },
    { name: 'Ofiara',         score: 0.18 },
  ];
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'var(--paper)', border:'1px solid var(--line)',
        padding:'32px 32px 28px', position:'relative',
        boxShadow: hovered
          ? '0 30px 80px -30px rgba(0,0,0,.18), 0 1px 0 rgba(255,255,255,.6) inset'
          : '0 18px 40px -20px rgba(0,0,0,.10), 0 1px 0 rgba(255,255,255,.6) inset',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition:'all .25s ease',
      }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28 }}>
        <div>
          <div className="mono" style={{ fontSize:10.5, letterSpacing:'.16em', color:'var(--ink-faint)', textTransform:'uppercase' }}>
            Centrum Akceptacji
          </div>
          <div className="display" style={{ fontSize:24, marginTop:6, letterSpacing:'-.02em' }}>
            Twój raport · podgląd
          </div>
        </div>
        <span className="mono" style={{
          fontSize:10, padding:'5px 9px', border:'1px solid var(--accent)', color:'var(--accent)',
          letterSpacing:'.14em', textTransform:'uppercase', borderRadius:999,
        }}>
          DEMO
        </span>
      </div>

      <div style={{ display:'grid', gap:12, marginBottom:28 }}>
        {sabos.map((s, i) => (
          <div key={s.name} style={{ display:'grid', gridTemplateColumns:'130px 1fr 40px', gap:14, alignItems:'center' }}>
            <span style={{ fontSize:14, fontWeight:500 }}>{s.name}</span>
            <div style={{ height:6, background:'var(--paper-3)', borderRadius:999, overflow:'hidden' }}>
              <div style={{
                height:'100%',
                width: `${s.score * 100}%`,
                background: i < 2 ? 'var(--accent)' : 'var(--ink-faint)',
                borderRadius:999,
                transition:'width .8s cubic-bezier(.6,.2,.2,1)',
              }} />
            </div>
            <span className="mono" style={{ fontSize:11, color:'var(--ink-faint)', textAlign:'right' }}>
              {Math.round(s.score * 100)}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        padding:'18px 20px', background:'var(--accent-soft)', borderRadius:4,
        marginBottom:22,
      }}>
        <div className="mono" style={{ fontSize:10.5, color:'var(--accent)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:8 }}>
          Twoja diagnoza →
        </div>
        <p style={{ margin:0, fontSize:14.5, lineHeight:1.55, color:'var(--ink)' }}>
          <strong>Sędzia + Hyper-Achiever.</strong> Klasyczny duet polskiego przedsiębiorcy.
          Wynik: imponujący na zewnątrz. W środku — wyczerpanie i ciche poczucie, że nigdy nie jest dosyć.
        </p>
      </div>

      <button className="btn btn-primary" onClick={onClick} style={{ width:'100%', justifyContent:'center', fontSize:13 }}>
        Zrób swój test · 15 min <span className="arrow">→</span>
      </button>

      <div className="mono" style={{ fontSize:10, color:'var(--ink-faint)', letterSpacing:'.12em', textTransform:'uppercase', textAlign:'center', marginTop:16 }}>
        Bez zapisu do newslettera · bez karty · bez triggerów
      </div>
    </div>
  );
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  return (
    <footer style={{ background:'var(--ink)', color:'var(--paper)', padding:'80px 0 56px' }}>
      <div className="wrap-wide">
        <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr 1fr', gap:48, marginBottom:72 }} className="foot-grid">
          <div>
            <div className="display" style={{ fontSize:32, letterSpacing:'-.02em', marginBottom:18 }}>
              KRZYSZTOF&nbsp;WNĘK
            </div>
            <p style={{ color:'rgba(255,255,255,.65)', fontSize:14.5, margin:'0 0 24px', lineHeight:1.6, maxWidth:'40ch' }}>
              Mentor PQ. Trener mentalny dla&nbsp;liderów i&nbsp;ich zespołów.
              Bo terapia nudzi, a coaching irytuje.
            </p>
            <a href="#finish" className="btn btn-primary" style={{ fontSize:12.5, padding:'14px 20px' }}>
              Test Sabotażystów <span className="arrow">→</span>
            </a>
          </div>
          {[
            ['Praca', ['Indywidualnie', 'Dla firm', 'Discovery Call', 'Test Sabotażystów']],
            ['Scena', ['Architekci Spokoju', 'Power Speeches', 'TEDx', 'Press']],
            ['Kontakt', ['krzysztof@auraflux.pl', 'LinkedIn', 'YouTube', 'Instagram']],
          ].map(([h, items]) => (
            <div key={h}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'.16em', color:'rgba(255,255,255,.45)', textTransform:'uppercase', marginBottom:20 }}>{h}</div>
              <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:12 }}>
                {items.map(x => (
                  <li key={x}><a href="#" style={{ color:'rgba(255,255,255,.92)', textDecoration:'none', fontSize:14.5 }}>{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:16,
          paddingTop:28, borderTop:'1px solid rgba(255,255,255,.10)',
          color:'rgba(255,255,255,.45)', fontSize:12,
        }}>
          <span className="mono" style={{ letterSpacing:'.06em' }}>© 2026 Krzysztof Wnęk · wszystkie prawa zastrzeżone</span>
          <span className="mono" style={{ letterSpacing:'.06em' }}>auraflux.pl · made for the ones who already have everything</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){ .foot-grid{grid-template-columns:1fr 1fr !important; gap:32px !important} }
      `}</style>
    </footer>
  );
}

/* ───────────── DevNote ───────────── */
function DevNote({ pos, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-devnote style={{
      position:'absolute', ...pos, zIndex:5,
      maxWidth: open ? 320 : 44, transition:'max-width .25s ease',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        title="Komentarz UX/UI dla devów"
        style={{
          appearance:'none', border:'1px dashed var(--accent)',
          background:'rgba(255,255,255,.92)', color:'var(--accent)',
          fontFamily:'JetBrains Mono', fontSize:11, letterSpacing:'.08em',
          padding: open ? '12px 14px' : '6px 10px',
          cursor:'pointer', textAlign:'left', borderRadius:4, width:'100%',
          backdropFilter:'blur(8px)',
        }}>
        {open
          ? <span style={{ display:'block', lineHeight:1.5 }}>{children}</span>
          : <span>UX ↗</span>}
      </button>
    </div>
  );
}

Object.assign(window, { Nav, Hero, Lustro, Medrzec, Finish, Footer, DevNote, Photo, AcceptanceCard });
