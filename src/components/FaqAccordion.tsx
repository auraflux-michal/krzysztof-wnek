'use client'

import { useState } from 'react'

const items = [
  {
    q: 'Czy muszę znać angielski?',
    a: 'Program PQ jest prowadzony w oparciu o aplikację PQ po angielsku, ale materiały można powtarzać i są w pełni zrozumiałe nawet przy średniej znajomości języka (wystarczy znajomość bierna). Poza aplikacją pracuję z Tobą po polsku przez całe 7 tygodni.',
    open: true,
  },
  {
    q: 'Ile czasu zajmuje program tygodniowo?',
    a: 'Potrzebujesz dziennie 15 minut na wykonanie ćwiczeń z aplikacją. Poza tym 1 raz w tygodniu (między piątkiem, a niedzielą) masz do obejrzenia webinar, który trwa około 1h (podzielony na części — możesz go obejrzeć po kawałku). Również 1 raz w tygodniu (w poniedziałek) mamy cotygodniowe sesje grupowe, które trwają do 1h. To nie jest kurs — to codzienność.',
  },
  {
    q: 'Czy to jest coaching?',
    a: 'To coś więcej. Program PQ łączy neuronaukę, nauki o efektywności, psychologię behawioralno-poznawczą oraz psychologię pozytywną. Dzięki tej unikalnej i praktycznej metodzie fitnessu mentalnego budujesz dosłownie nowe ścieżki neuronalne. Efekty są mierzalne i trwałe.',
  },
  {
    q: 'Dla kogo jest Program PQ?',
    a: 'Dla liderów, menedżerów i przedsiębiorców, którzy osiągnęli sukces — ale odkryli, że coś im umyka. Radość, spokój, obecność. Umów rozmowę — sprawdzimy razem.',
  },
  {
    q: 'Czy mogę płacić ratalnie?',
    a: 'Mam świadomość, że czasami płynność nie pozwala na jednorazowe obciążenie budżetu domowego, dlatego jest też możliwość skorzystania z płatności ratalnych — łącznie do 12 rat. Szczegóły możemy omówić podczas rozmowy — umów spotkanie w moim kalendarzu lub napisz.',
  },
  {
    q: 'Co to właściwie jest PQ?',
    a: 'PQ w koncepcji Positive Intelligence® oznacza Positive Intelligence® Quotient, czyli iloraz inteligencji pozytywnej. Jest to wskaźnik tzw. kondycji psychicznej (ang. mental fitness), który mierzy zdolność radzenia sobie z wyzwaniami życiowymi z poziomu spokoju i odporności, zamiast pod wpływem stresu czy negatywnych emocji.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <div className="faq reveal" data-delay="2" id="faq">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <h3 className="faq-q" onClick={() => toggle(i)} style={{ cursor: 'pointer' }}>
            {item.q}
            <span className="plus">{openIndex === i ? '−' : '+'}</span>
          </h3>
          <div className="faq-a" style={{ display: openIndex === i ? 'block' : 'none' }}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}
