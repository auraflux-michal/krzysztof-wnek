'use client'

import { useState, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const SITE_KEY = '0x4AAAAAADirRRv-jP7B-j8V'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    const fd = new FormData(formRef.current)

    setStatus('sending')
    try {
      // 1. Server: Turnstile verification + Resend email notification
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:                    fd.get('name'),
          email:                   fd.get('email'),
          company:                 fd.get('company'),
          message:                 fd.get('message'),
          b2b_honeypot:            fd.get('b2b_honeypot'),
          'cf-turnstile-response': turnstileToken ?? '',
        }),
      })
      if (!res.ok) throw new Error('send failed')

      // 2. Client: ConvertKit subscription — same as FinaleForm, works from browser
      const kitParams = new URLSearchParams()
      kitParams.append('email_address', String(fd.get('email') ?? ''))
      kitParams.append('fields[imie_i_nazwisko]', String(fd.get('name') ?? ''))
      kitParams.append('fields[nazwa_firmy]', String(fd.get('company') ?? ''))
      kitParams.append('fields[wiadomosc]', String(fd.get('message') ?? ''))
      fetch('https://app.kit.com/forms/9550792/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: kitParams.toString(),
      }).catch(() => {})

      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div style={{
        paddingTop: '48px',
        fontFamily: 'var(--display)',
        fontSize: 'clamp(22px,2.8vw,32px)',
        fontStyle: 'italic',
        fontWeight: 400,
        color: 'var(--text)',
        lineHeight: 1.3,
        animation: 'fadeInUp 0.5s ease both',
      }}>
        Dziękuję za wiadomość!<br />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.72em', fontStyle: 'normal', fontFamily: 'var(--sans)', lineHeight: 1.6 }}>
          Wkrótce się z&nbsp;Tobą skontaktuję.
        </span>
      </div>
    )
  }

  return (
    <form className="contact-form reveal" data-delay="2" ref={formRef} onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="b2b_honeypot"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
        style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
        aria-hidden="true"
      />

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

      <Turnstile
        siteKey={SITE_KEY}
        onSuccess={setTurnstileToken}
        options={{ theme: 'light', language: 'pl' }}
        style={{ marginBottom: '16px' }}
      />

      {status === 'error' && (
        <p style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 12px', fontFamily: 'var(--mono)' }}>
          Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-teal"
        style={{ marginTop: '8px' }}
        disabled={status === 'sending' || !turnstileToken}
      >
        {status === 'sending' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>
    </form>
  )
}
