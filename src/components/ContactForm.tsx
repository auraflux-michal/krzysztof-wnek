'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ paddingTop: '48px', fontFamily: 'var(--display)', fontSize: '24px', fontStyle: 'italic', color: 'var(--text)' }}>
        Dziękuję. Odezwę się w ciągu 24 godzin.
      </div>
    )
  }

  return (
    <form className="contact-form reveal" data-delay="2" onSubmit={handleSubmit}>
      <div className="field">
        <label>Imię i nazwisko</label>
        <input type="text" placeholder="Jan Kowalski" required />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="email" placeholder="jan@firma.pl" required />
      </div>
      <div className="field">
        <label>Firma</label>
        <input type="text" placeholder="Nazwa firmy" />
      </div>
      <div className="field">
        <label>Wiadomość</label>
        <textarea placeholder="Opisz krótko, czego szukasz..." rows={4} />
      </div>
      <button type="submit" className="btn btn-teal" style={{ marginTop: '8px' }}>
        Wyślij zapytanie
      </button>
    </form>
  )
}
