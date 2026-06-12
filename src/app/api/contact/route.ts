import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const { name, email, company, message, b2b_honeypot, 'cf-turnstile-response': turnstileToken } = body

  if (b2b_honeypot) {
    return NextResponse.json({ error: 'Blocked' }, { status: 400 })
  }

  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.error('[contact] TURNSTILE_SECRET_KEY not set')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: turnstileToken ?? '' }).toString(),
  })
  const verifyData = await verifyRes.json() as { success: boolean; 'error-codes'?: string[] }
  if (!verifyData.success) {
    console.error('[contact] Turnstile failed:', verifyData['error-codes'])
    return NextResponse.json({ error: 'Captcha failed' }, { status: 403 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const kitApiKey = process.env.CONVERTKIT_API_KEY

  const [resendResult, kitResult] = await Promise.allSettled([
    // TASK 1 — Resend email (to verified account email until domain is verified)
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RESEND_NOTIFY_EMAIL ?? 'czesc@auraflux.pl',
      replyTo: email,
      subject: `[Nowy Lead B2B] Zapytanie ofertowe od: ${company ?? '—'}`,
      html: `
        <h2 style="font-family:sans-serif;margin:0 0 24px">Nowe zapytanie B2B</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
          <tr><td style="padding:6px 16px 6px 0;color:#666;white-space:nowrap">Imię i nazwisko</td><td style="padding:6px 0"><strong>${name ?? '—'}</strong></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email ?? '—'}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#666">Firma</td><td style="padding:6px 0">${company ?? '—'}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:15px;color:#666;margin:24px 0 8px">Wiadomość:</p>
        <blockquote style="font-family:sans-serif;font-size:15px;border-left:3px solid #ccc;padding:12px 16px;margin:0;color:#333;background:#f9f9f9">
          ${(message ?? '').replace(/\n/g, '<br/>')}
        </blockquote>
      `,
    }),

    // TASK 2 — ConvertKit v3 API (server-side, requires api_key)
    kitApiKey
      ? fetch(`https://api.convertkit.com/v3/forms/9550792/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
            api_key: kitApiKey,
            email,
            fields: {
              imie_i_nazwisko: name ?? '',
              nazwa_firmy: company ?? '',
              wiadomosc: message ?? '',
            },
          }),
        })
      : Promise.reject(new Error('CONVERTKIT_API_KEY not set')),
  ])

  if (resendResult.status === 'rejected') {
    console.error('[contact] Resend error:', resendResult.reason)
  } else if (resendResult.value.error) {
    console.error('[contact] Resend API error:', JSON.stringify(resendResult.value.error))
  } else {
    console.log('[contact] Resend OK, id:', resendResult.value.data?.id)
  }

  if (kitResult.status === 'rejected') {
    console.error('[contact] ConvertKit error:', kitResult.reason)
  } else {
    const kitText = await kitResult.value.text().catch(() => '')
    if (!kitResult.value.ok) {
      console.error('[contact] ConvertKit error:', kitResult.value.status, kitText)
    } else {
      console.log('[contact] ConvertKit OK:', kitResult.value.status, kitText.slice(0, 120))
    }
  }

  return NextResponse.json({ ok: true })
}
