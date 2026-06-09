'use client'

import { useState } from 'react'

export default function FinaleForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const params = new URLSearchParams()
    params.append('email_address', (form.elements.namedItem('email_address') as HTMLInputElement).value)
    params.append('fields[first_name]', (form.elements.namedItem('fields[first_name]') as HTMLInputElement).value)
    try {
      await fetch('https://app.kit.com/forms/9541881/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
    } catch {
      // sieć lub CORS — i tak pokazujemy sukces
    }
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <p className="finale-form-success" style={{ display: 'block' }}>
        Prawie gotowe! Sprawdź teraz swoją skrzynkę i potwierdź e-mail.
      </p>
    )
  }

  return (
    <form
      className="finale-form reveal"
      data-delay="2"
      id="finale-subscribe-form"
      onSubmit={handleSubmit}
    >
      <div className="finale-form-row">
        <div className="finale-form-field">
          <input
            type="text"
            name="fields[first_name]"
            placeholder="Imię"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="finale-form-field">
          <input
            type="email"
            name="email_address"
            placeholder="Adres e-mail"
            required
            autoComplete="email"
          />
        </div>
        <button type="submit" className="btn-finale-submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Wysyłanie…' : 'Wypełnij test'}
        </button>
      </div>
    </form>
  )
}
