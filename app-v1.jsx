// app.jsx — main app for Krzysztof Wnęk homepage

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold",
  "display": "cormorant",
  "heroTreatment": "cinematic"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  { value: "gold",    label: "Złoto" },
  { value: "oxblood", label: "Oxblood" },
  { value: "bronze",  label: "Brąz" },
  { value: "emerald", label: "Szmaragd" },
];
const DISPLAY_OPTIONS = [
  { value: "cormorant", label: "Cormorant" },
  { value: "playfair",  label: "Playfair" },
  { value: "fraunces",  label: "Fraunces" },
];
const HERO_OPTIONS = [
  { value: "cinematic", label: "Kinematograf" },
  { value: "split",     label: "Split" },
  { value: "type",      label: "Typograficzny" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + font classes on body
  React.useEffect(() => {
    const b = document.body;
    b.className = "";
    if (t.accent !== "gold") b.classList.add("theme-" + t.accent);
    if (t.display !== "cormorant") b.classList.add("font-" + t.display);
  }, [t.accent, t.display]);

  useReveal();

  // Re-run reveal observer when hero treatment changes (new nodes appear)
  React.useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!el.classList.contains("in")) {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight - 60) el.classList.add("in");
        }
      });
    });
    return () => cancelAnimationFrame(id);
  }, [t.heroTreatment]);

  return (
    <>
      <Nav />
      <main>
        <Hero treatment={t.heroTreatment} />
        <Authority />
        <Problem />
        <Transformation />
        <Video />
        <Saboteurs />
        <About />
        <Testimonials />
        <Paths />
        <YT />
        <Finale />
      </main>
      <Foot />

      <TweaksPanel title="Tweaks · Krzysztof">
        <TweakSection label="Kolor akcentu" />
        <TweakColor
          label="Akcent"
          value={t.accent === "gold" ? "#C9943A" : t.accent === "oxblood" ? "#B33A3A" : t.accent === "bronze" ? "#B07440" : "#2F8F6B"}
          options={["#C9943A", "#B33A3A", "#B07440", "#2F8F6B"]}
          onChange={(v) => {
            const map = { "#C9943A": "gold", "#B33A3A": "oxblood", "#B07440": "bronze", "#2F8F6B": "emerald" };
            setTweak("accent", map[v] || "gold");
          }}
        />

        <TweakSection label="Typografia" />
        <TweakRadio
          label="Display"
          value={t.display}
          options={DISPLAY_OPTIONS}
          onChange={(v) => setTweak("display", v)}
        />

        <TweakSection label="Hero" />
        <TweakSelect
          label="Treatment"
          value={t.heroTreatment}
          options={HERO_OPTIONS}
          onChange={(v) => setTweak("heroTreatment", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
