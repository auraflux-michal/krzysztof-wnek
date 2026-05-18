/* app.jsx — root app for Krzysztof Wnęk homepage */

const { useState, useEffect } = React;

const KW_TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "#19E687",
  "density": "regular",
  "showDevNotes": true,
  "displayFont": "Archivo",
  "bodyFont": "Manrope"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(KW_TWEAKS);
  const [modal, setModal] = useState(null); // 'test' | null

  // Apply tweaks to CSS vars + body data attrs
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    // pick accent ink for contrast
    r.style.setProperty('--accent-ink', isLight(t.accent) ? '#06170a' : '#f3f1ec');
    r.style.setProperty('--accent-glow', t.accent + '55');

    document.body.dataset.density = t.density;
    document.body.dataset.devnotes = t.showDevNotes ? 'on' : 'off';

    // font swap (only display / body)
    document.body.style.fontFamily = `"${t.bodyFont}", ui-sans-serif, system-ui, sans-serif`;
    const sheetId = '__kw_font_sheet';
    let s = document.getElementById(sheetId);
    if (!s) { s = document.createElement('style'); s.id = sheetId; document.head.appendChild(s); }
    s.textContent = `.display{font-family:"${t.displayFont}",sans-serif}`;
  }, [t.accent, t.density, t.showDevNotes, t.displayFont, t.bodyFont]);

  // Hide dev notes globally when tweak is off
  useEffect(() => {
    const id = '__kw_devnote_sheet';
    let s = document.getElementById(id);
    if (!s) { s = document.createElement('style'); s.id = id; document.head.appendChild(s); }
    s.textContent = t.showDevNotes ? '' : '[data-devnote]{display:none !important}';
  }, [t.showDevNotes]);

  const openTest = () => setModal('test');

  return (
    <div id="top">
      <Nav onCTAClick={openTest} />
      <Hero />
      <Lustro />
      <Mechanizm />
      <Sciezki />
      <Medrzec />
      <Finish result={null} onTestClick={openTest} />
      <Footer />

      {modal === 'test' && <TestModal onClose={() => setModal(null)} />}

      <TweaksPanel>
        <TweakSection label="Akcent &amp; energia" />
        <TweakColor
          label="Kolor CTA"
          value={t.accent}
          options={['#19E687','#22D3EE','#F4C752','#FF5C8A','#9D8DF1']}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakRadio
          label="Gęstość"
          value={t.density}
          options={['dense','regular','airy']}
          onChange={(v) => setTweak('density', v)}
        />

        <TweakSection label="Typografia" />
        <TweakSelect
          label="Nagłówki"
          value={t.displayFont}
          options={['Archivo','Manrope']}
          onChange={(v) => setTweak('displayFont', v)}
        />
        <TweakSelect
          label="Tekst"
          value={t.bodyFont}
          options={['Manrope','Archivo']}
          onChange={(v) => setTweak('bodyFont', v)}
        />

        <TweakSection label="Pomoc developerska" />
        <TweakToggle
          label="Komentarze UX/UI"
          value={t.showDevNotes}
          onChange={(v) => setTweak('showDevNotes', v)}
        />
      </TweaksPanel>
    </div>
  );
}

/* ───────────────── Test modal (mini interactive prototype) ───────────────── */
function TestModal({ onClose }) {
  const questions = [
    'Gdy mój zespół popełnia błąd, mój pierwszy odruch to znaleźć, kto zawinił.',
    'Czuję, że nie mogę odpocząć, dopóki nie skończę listy.',
    'Gdy ktoś mówi mi „zrelaksuj się", to mnie irytuje.',
    'Często odpowiadam „dam radę", zanim sprawdzę swój kalendarz.',
    'Mam ciche poczucie, że gdybym przestał napierać, wszystko by się rozpadło.',
  ];
  const [step, setStep] = useState(0);   // 0..n-1 questions, n = result
  const [answers, setAnswers] = useState({});

  const n = questions.length;
  const isResult = step >= n;

  useEffect(() => {
    const on = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', on);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', on); document.body.style.overflow = ''; };
  }, [onClose]);

  const answer = (val) => {
    setAnswers(a => ({ ...a, [step]: val }));
    setTimeout(() => setStep(s => s + 1), 180);
  };

  const score = Object.values(answers).reduce((a, b) => a + b, 0);

  return (
    <div role="dialog" aria-modal="true"
      onClick={onClose}
      style={{
        position:'fixed', inset:0, zIndex:1000,
        background:'rgba(6,8,13,.85)', backdropFilter:'blur(8px)',
        display:'flex', alignItems:'center', justifyContent:'center', padding:24,
      }}>
      <div onClick={e => e.stopPropagation()}
        style={{
          width:'min(720px, 100%)', maxHeight:'90vh', overflow:'auto',
          background:'var(--ink)', border:'1px solid var(--line-2)',
          padding:'40px 44px', position:'relative',
          fontFamily:'"Manrope",sans-serif',
        }}>
        <button onClick={onClose} aria-label="Zamknij"
          style={{
            position:'absolute', top:18, right:18, width:36, height:36, borderRadius:0,
            background:'transparent', border:'1px solid var(--line-2)', color:'var(--paper)',
            cursor:'pointer', fontFamily:'JetBrains Mono', fontSize:14,
          }}>×</button>

        <div className="mono" style={{ fontSize:11, letterSpacing:'.18em', color:'var(--accent)', textTransform:'uppercase', marginBottom:14 }}>
          Test Sabotażystów · Demo
        </div>

        {!isResult ? (
          <>
            <div className="mono" style={{ fontSize:11, color:'var(--paper-faint)', letterSpacing:'.12em', marginBottom:24 }}>
              PYTANIE {step + 1} / {n}
            </div>
            <h3 className="display" style={{ fontSize:'clamp(24px, 3vw, 36px)', lineHeight:1.1, margin:'0 0 36px', letterSpacing:'-.02em' }}>
              {questions[step]}
            </h3>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:8, marginBottom:24 }}>
              {[
                ['1', 'wcale'],
                ['2', 'rzadko'],
                ['3', 'czasem'],
                ['4', 'często'],
                ['5', 'zawsze'],
              ].map(([v, l]) => (
                <button key={v} onClick={() => answer(parseInt(v, 10))}
                  style={{
                    appearance:'none', cursor:'pointer',
                    padding:'18px 6px', background:'transparent', color:'var(--paper)',
                    border:'1px solid var(--line-2)', display:'grid', placeItems:'center', gap:6,
                    fontFamily:'inherit',
                    transition:'all .15s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='var(--accent)'; e.currentTarget.style.color='var(--accent-ink)'; e.currentTarget.style.borderColor='var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--paper)'; e.currentTarget.style.borderColor='var(--line-2)'; }}
                >
                  <span className="display" style={{ fontSize:24, lineHeight:1 }}>{v}</span>
                  <span className="mono" style={{ fontSize:10, letterSpacing:'.12em', textTransform:'uppercase' }}>{l}</span>
                </button>
              ))}
            </div>
            <div style={{ height:3, background:'rgba(255,255,255,.06)' }}>
              <div style={{ height:'100%', width:`${(step / n) * 100}%`, background:'var(--accent)', transition:'width .25s ease' }} />
            </div>
          </>
        ) : (
          <>
            <h3 className="display" style={{ fontSize:'clamp(28px, 3.4vw, 44px)', lineHeight:1.05, margin:'0 0 18px', letterSpacing:'-.02em' }}>
              Wynik demo:&nbsp;
              <span style={{ color:'var(--accent)' }}>
                {score >= 18 ? 'Sędzia + Hyper-Achiever'
                  : score >= 12 ? 'Sędzia + Kontroler'
                  : 'Sędzia + Please-r'}
              </span>
            </h3>
            <p style={{ fontSize:16, color:'var(--paper-dim)', lineHeight:1.6, margin:'0 0 28px', maxWidth:'56ch' }}>
              To tylko mini-szkic. Pełny Test Sabotażystów ma 75 pytań i wymaga ~15 minut.
              Otrzymujesz raport PDF z 10 sabotażystów + interpretacją dwóch dominujących.
              Następny krok: 30 min Discovery Call, w którym omawiamy go razem.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="#" className="btn btn-primary">Zrób pełny test · 15 min <span className="arrow">→</span></a>
              <a href="#" className="btn btn-ghost">Discovery Call · Zencal</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* helpers */
function isLight(hex) {
  if (!hex || hex[0] !== '#') return true;
  const h = hex.replace('#','');
  const v = h.length === 3
    ? h.split('').map(x => parseInt(x+x, 16))
    : [0,2,4].map(i => parseInt(h.slice(i, i+2), 16));
  // perceived luminance
  const L = (0.2126*v[0] + 0.7152*v[1] + 0.0722*v[2]) / 255;
  return L > 0.55;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
