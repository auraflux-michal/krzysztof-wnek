/* sections-v2.jsx — KW homepage v2 (heavy condensed, photo-driven) */

const { useState, useEffect, useRef } = React;

/* ───────────── NAV ───────────── */
function NavV2({ onCTAClick, onTestClick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener('scroll', on, { passive:true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      padding:'18px 0',
      background: scrolled ? 'rgba(10,10,10,.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.10)' : '1px solid transparent',
      transition:'all .25s ease',
    }}>
      <div className="wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:24 }}>
        <a href="#top" style={{ color:'var(--paper)', textDecoration:'none', display:'flex', alignItems:'center', gap:14 }}>
          <span className="display" style={{ fontSize:22, letterSpacing:'.02em' }}>KW</span>
          <span className="mono" style={{ fontSize:10, color:'rgba(245,243,236,.55)', letterSpacing:'.2em', textTransform:'uppercase' }}>Mentor · PQ</span>
        </a>
        <div className="nav-links-v2" style={{ display:'flex', gap:36, alignItems:'center' }}>
          {[
            ['Dla siebie', '#sciezki'],
            ['Dla firm', '#sciezki'],
            ['Dowody', '#dowody'],
            ['YouTube', '#youtube'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              color:'var(--paper)', textDecoration:'none', fontSize:12,
              fontFamily:'"Oswald",sans-serif', fontWeight:500,
              letterSpacing:'.16em', textTransform:'uppercase',
            }}>{label}</a>
          ))}
          <button onClick={onCTAClick} className="btn btn-light" style={{ padding:'14px 22px', fontSize:11 }}>
            Book a call <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px){ .nav-links-v2 a{display:none} }
      `}</style>
    </nav>
  );
}

/* ───────────── HERO ───────────── */
function HeroV2({ onTestClick }) {
  return (
    <section data-screen-label="01 Hero" id="top" style={{
      position:'relative', minHeight:'100vh', background:'var(--ink)', color:'var(--paper)',
      paddingTop:120, paddingBottom:0, overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(70% 80% at 80% 50%, rgba(30,44,71,.55) 0%, transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #14171f 100%)',
      }} />

      <div className="wrap" style={{ position:'relative', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center', minHeight:'calc(100vh - 120px)' }}>
        {/* Left column */}
        <div className="hero-left" style={{ paddingBlock:'40px 60px', position:'relative', zIndex:3 }}>
          <div className="eyebrow on-dark" style={{ marginBottom:32 }}>
            <span>Mentor · Mówca · Coach</span>
          </div>
          <h1 className="display" style={{
            fontSize:'clamp(54px, 8.4vw, 132px)',
            margin:'0 0 32px', maxWidth:'14ch',
            color:'var(--paper)',
          }}>
            Wymieniasz<br/>
            <span style={{ color:'var(--accent)' }}>sukces</span><br/>
            na <span style={{ color:'var(--ink-faint)' }}>stres.</span>
          </h1>
          <p style={{
            fontSize:'clamp(17px, 1.3vw, 20px)', lineHeight:1.55,
            color:'rgba(245,243,236,.72)', margin:'0 0 40px', maxWidth:'42ch',
          }}>
            Pomagam liderom odzyskać nadzór — bez rezygnowania z ambicji.
            Pracujemy nad źródłem, nie nad symptomami.
          </p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <button onClick={onTestClick} className="btn btn-primary">
              Wypełnij test sabotażystów <span className="arrow">→</span>
            </button>
            <a href="#video" className="btn btn-ghost-dark">
              Zobacz mój film <span className="arrow">▸</span>
            </a>
          </div>
        </div>

        {/* Right column — photo */}
        <div className="hero-right" style={{ position:'relative', alignSelf:'stretch' }}>
          <div style={{
            position:'absolute', inset:0,
            backgroundImage:'url(assets/kw-hero.jpg)',
            backgroundSize:'cover', backgroundPosition:'center 20%',
            maskImage:'linear-gradient(180deg, black 60%, transparent 100%), linear-gradient(270deg, black 80%, transparent 100%)',
            WebkitMaskImage:'linear-gradient(180deg, black 60%, transparent 100%), linear-gradient(270deg, black 80%, transparent 100%)',
            maskComposite:'intersect',
            WebkitMaskComposite:'source-in',
          }} />
          {/* dark blend */}
          <div style={{
            position:'absolute', inset:0,
            background:'linear-gradient(270deg, transparent 30%, rgba(10,10,10,.6) 100%)',
            pointerEvents:'none',
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          section[data-screen-label="01 Hero"] .wrap{
            grid-template-columns:1fr !important;
            min-height:auto !important;
          }
          section[data-screen-label="01 Hero"] .hero-right{
            height:60vh; order:-1;
          }
        }
      `}</style>
    </section>
  );
}

/* ───────────── STAT BAR (dark, sits at bottom of hero look) ───────────── */
function StatBarV2() {
  const stats = [
    { n: '200+',  l: 'absolwentów programu' },
    { n: '43',    l: 'odcinków na YouTube' },
    { n: 'WSB',   l: 'wykładowca' },
    { n: 'PQ',    l: 'certyfikowany coach' },
  ];
  return (
    <section style={{ background:'var(--ink)', color:'var(--paper)', borderTop:'1px solid rgba(255,255,255,.08)' }}>
      <div className="wrap" style={{
        display:'grid', gridTemplateColumns:`repeat(${stats.length}, 1fr)`, gap:0,
      }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{
            padding:'44px 24px', textAlign:'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none',
          }}>
            <div className="display" style={{ fontSize:'clamp(34px, 4vw, 52px)', lineHeight:1, marginBottom:10 }}>
              {s.n}
            </div>
            <div className="mono" style={{ fontSize:10.5, letterSpacing:'.2em', color:'rgba(245,243,236,.5)', textTransform:'uppercase' }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── S02 — CZY ROZPOZNAJESZ SIEBIE ───────────── */
function MirrorV2() {
  const items = [
    'Osiągnąłeś to, czego chciałeś. Radość nie przyszła.',
    'Praca przyszła do domu. Dom do pracy.',
    'Otaczasz coraz więcej. Nadal nie dosyć.',
    'Rodzina jest na ostatniej pozycji na liście.',
  ];
  return (
    <section data-screen-label="02 Mirror" id="mirror" style={{
      background:'var(--paper)', color:'var(--ink)',
      paddingBlock:'140px 120px',
    }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom:48 }}>
          <span className="num">01</span><span>—</span><span>Problem</span>
        </div>

        <h2 className="display display-tight" style={{
          fontSize:'clamp(56px, 9vw, 160px)',
          margin:'0 0 64px', maxWidth:'14ch',
        }}>
          Czy<br/>
          rozpoznajesz<br/>
          siebie?
        </h2>

        <div className="rule" style={{ marginBottom:64 }} />

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:48,
        }} className="mirror-grid-v2">
          {items.map((t, i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize:10.5, letterSpacing:'.2em', color:'var(--ink-faint)', textTransform:'uppercase', marginBottom:18 }}>
                {String(i+1).padStart(2,'0')}
              </div>
              <p style={{
                fontSize:17, lineHeight:1.55, margin:0, color:'var(--ink)', maxWidth:'30ch', fontWeight:400,
              }}>
                {t}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px){
          section[data-screen-label="02 Mirror"] .mirror-grid-v2{grid-template-columns:repeat(2, 1fr) !important; gap:40px !important}
        }
        @media (max-width: 600px){
          section[data-screen-label="02 Mirror"] .mirror-grid-v2{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── S03 — PRZED / PO ───────────── */
function PrzedPoV2() {
  const before = [
    'Stres i reaktywność',
    'Późne noce, wczesne pobudki',
    'Zaniedbane relacje',
    '„Kiedy wystarczy?"',
  ];
  const after = [
    'Spokój pod presją',
    'Głęboka praca, prawdziwy odpoczynek',
    'Obecność w domu i w pracy',
    'Radość jako rodzinny standard',
  ];
  return (
    <section data-screen-label="03 Przed/Po" style={{
      background:'var(--ink)', color:'var(--paper)',
      paddingBlock:'120px 120px',
    }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:96 }} className="pp-grid">
          {/* PRZED */}
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom:32 }}>
              <span style={{ color:'rgba(245,243,236,.5)' }}>Przed</span>
            </div>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:18 }}>
              {before.map((t, i) => (
                <li key={i} style={{
                  display:'grid', gridTemplateColumns:'auto 1fr', gap:18, alignItems:'baseline',
                  paddingBottom:18, borderBottom:'1px solid rgba(255,255,255,.10)',
                }}>
                  <span style={{ color:'rgba(245,243,236,.4)', fontFamily:'JetBrains Mono', fontSize:13 }}>—</span>
                  <span style={{ fontSize:'clamp(18px, 1.6vw, 22px)', color:'rgba(245,243,236,.78)', fontWeight:400 }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* PO */}
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom:32 }}>
              <span style={{ color:'var(--accent)' }}>Po</span>
            </div>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'grid', gap:18 }}>
              {after.map((t, i) => (
                <li key={i} style={{
                  display:'grid', gridTemplateColumns:'auto 1fr', gap:18, alignItems:'baseline',
                  paddingBottom:18, borderBottom:'1px solid rgba(255,255,255,.10)',
                }}>
                  <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono', fontSize:13 }}>+</span>
                  <span className="display" style={{
                    fontSize:'clamp(20px, 1.8vw, 26px)',
                    color:'var(--paper)', lineHeight:1.2, letterSpacing:'-.005em',
                  }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          marginTop:80, paddingTop:32, borderTop:'1px solid rgba(255,255,255,.10)',
          display:'flex', justifyContent:'space-between', alignItems:'baseline', flexWrap:'wrap', gap:16,
        }}>
          <p className="mono" style={{ fontSize:11, color:'rgba(245,243,236,.5)', letterSpacing:'.2em', textTransform:'uppercase', margin:0 }}>
            Sprawdź czy to dla Ciebie
          </p>
          <a href="#sciezki" className="mono" style={{
            fontSize:11, color:'var(--paper)', letterSpacing:'.2em', textTransform:'uppercase',
            textDecoration:'none', display:'inline-flex', gap:10, alignItems:'center',
          }}>
            Ścieżki współpracy <span>→</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px){
          section[data-screen-label="03 Przed/Po"] .pp-grid{grid-template-columns:1fr !important; gap:56px !important}
        }
      `}</style>
    </section>
  );
}

/* ───────────── S04 — VIDEO ───────────── */
function VideoV2({ onPlay }) {
  const [hover, setHover] = useState(false);
  return (
    <section data-screen-label="04 Video" id="video" style={{
      background:'var(--ink)', color:'var(--paper)',
      paddingBlock:'40px 140px',
    }}>
      <div className="wrap">
        <div className="eyebrow on-dark" style={{ marginBottom:32 }}>
          <span className="num">02</span><span>—</span><span>Przekonaj się sam</span>
        </div>
        <h2 className="display display-tight" style={{
          fontSize:'clamp(40px, 5.6vw, 88px)',
          margin:'0 0 64px', maxWidth:'18ch',
          color:'var(--paper)',
        }}>
          „2 minuty.<br/>
          <span style={{ color:'var(--ink-faint)', fontStyle:'normal' }}>Zdecyduj sam."</span>
        </h2>

        <div
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          onClick={onPlay}
          style={{
            position:'relative', cursor:'pointer',
            aspectRatio:'16/9', width:'100%',
            background:`
              radial-gradient(60% 80% at 50% 50%, rgba(30,44,71,.5) 0%, transparent 60%),
              radial-gradient(40% 40% at 80% 30%, rgba(25,195,230,.15) 0%, transparent 60%),
              linear-gradient(160deg, #1a1f2c 0%, #050608 100%)
            `,
            border:'1px solid rgba(255,255,255,.08)',
            overflow:'hidden',
            transform: hover ? 'scale(1.005)' : 'scale(1)',
            transition:'transform .3s ease',
          }}>
          {/* light beam */}
          <div style={{
            position:'absolute', inset:0,
            background:'radial-gradient(20% 60% at 50% 100%, rgba(255,255,255,.12) 0%, transparent 70%)',
          }} />
          {/* tag */}
          <div className="mono" style={{
            position:'absolute', top:24, left:24, fontSize:10, letterSpacing:'.2em', textTransform:'uppercase',
            color:'rgba(245,243,236,.7)', display:'flex', alignItems:'center', gap:10,
          }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--accent)' }} />
            KW · stage 2025
          </div>

          {/* play button */}
          <div style={{
            position:'absolute', left:32, bottom:32,
            display:'inline-flex', alignItems:'center', gap:14,
            padding:'14px 22px',
            background: hover ? 'var(--accent)' : 'rgba(245,243,236,.96)',
            color:'var(--ink)',
            fontFamily:'"Oswald",sans-serif', fontWeight:600, fontSize:12,
            letterSpacing:'.2em', textTransform:'uppercase',
            transition:'background .2s ease',
          }}>
            <span style={{
              width:0, height:0, borderLeft:'10px solid var(--ink)',
              borderTop:'7px solid transparent', borderBottom:'7px solid transparent',
            }} />
            Odtwórz · 2:14
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { NavV2, HeroV2, StatBarV2, MirrorV2, PrzedPoV2, VideoV2 });
