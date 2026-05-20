// app.jsx — main app for Krzysztof Wnęk homepage (editorial relaunch)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "teal",
  "display": "cormorant",
  "surface": "warm"
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  teal:      ["#3D5C5D", "#5C7D7E", "#87A4A3"],
  copper:    ["#7C5530", "#B07A47", "#D6A56F"],
  graphite:  ["#424753", "#707683", "#9DA3B0"],
  bordeaux:  ["#67242C", "#93414B", "#C97A82"],
  forest:    ["#2F4E2F", "#4E7A4B", "#84A781"],
};

const DISPLAY_OPTIONS = [
  { value: "cormorant", label: "Cormorant" },
  { value: "playfair",  label: "Playfair" },
  { value: "fraunces",  label: "Fraunces" },
];

const SURFACE_OPTIONS = [
  { value: "warm",  label: "Warm" },
  { value: "paper", label: "Paper" },
  { value: "cool",  label: "Cool" },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const b = document.body;
    b.className = "";
    if (t.accent !== "teal")       b.classList.add("theme-" + t.accent);
    if (t.display !== "cormorant") b.classList.add("font-" + t.display);
    if (t.surface !== "warm")      b.classList.add("surface-" + t.surface);
    else                            b.classList.add("surface-warm");
  }, [t.accent, t.display, t.surface]);

  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
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
        <TweakSection label="Akcent" />
        <TweakColor
          label="Paleta"
          value={ACCENT_PALETTES[t.accent] || ACCENT_PALETTES.teal}
          options={Object.values(ACCENT_PALETTES)}
          onChange={(v) => {
            const entry = Object.entries(ACCENT_PALETTES).find(
              ([, arr]) => JSON.stringify(arr) === JSON.stringify(v)
            );
            setTweak("accent", entry ? entry[0] : "teal");
          }}
        />

        <TweakSection label="Typografia" />
        <TweakRadio
          label="Display"
          value={t.display}
          options={DISPLAY_OPTIONS}
          onChange={(v) => setTweak("display", v)}
        />

        <TweakSection label="Tło" />
        <TweakRadio
          label="Powierzchnia"
          value={t.surface}
          options={SURFACE_OPTIONS}
          onChange={(v) => setTweak("surface", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
