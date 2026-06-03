'use client'

import { useState } from 'react'

export interface FaqItem { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
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
