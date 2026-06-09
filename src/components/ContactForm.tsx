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
        <label htmlFor="cf-name">Imię i nazwisko</label>
        <input id="cf-name" type="text" name="name" placeholder="Jan Kowalski" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" name="email" placeholder="jan@firma.pl" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="cf-company">Firma</label>
        <input id="cf-company" type="text" name="company" placeholder="Nazwa firmy" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-message">Wiadomość</label>
        <textarea id="cf-message" name="message" placeholder="Opisz krótko, czego szukasz..." rows={4} />
      </div>
      <button type="submit" className="btn btn-teal" style={{ marginTop: '8px' }}>
        Wyślij zapytanie
      </button>
    </form>
  )
}
