'use client'

import { useEffect, useState } from 'react'

export default function FinaleForm() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('subscribed=1')) setSubmitted(true)
  }, [])

  return (
    <>
      {!submitted ? (
        <form
          className="finale-form reveal"
          data-delay="2"
          id="finale-subscribe-form"
          action="https://app.convertkit.com/forms/CONVERTKIT_FORM_ID/subscriptions"
          method="post"
        >
          <div className="finale-form-row">
            <div className="finale-form-field">
              <input
                id="ff-name"
                type="text"
                name="fields[first_name]"
                placeholder="Imię"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="finale-form-field">
              <input
                id="ff-email"
                type="email"
                name="email_address"
                placeholder="Adres e-mail"
                required
                autoComplete="email"
              />
            </div>
            <button type="submit" className="btn-finale-submit">Wypełnij test</button>
          </div>
        </form>
      ) : (
        <p className="finale-form-success" style={{ display: 'block' }}>
          Dziękujemy! Sprawdź skrzynkę — link do testu już do Ciebie leci.
        </p>
      )}
    </>
  )
}
