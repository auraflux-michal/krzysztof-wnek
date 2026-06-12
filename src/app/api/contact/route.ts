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

  // Honeypot — bots fill this field
  if (b2b_honeypot) {
    return NextResponse.json({ error: 'Blocked' }, { status: 400 })
  }

  // Turnstile verification
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

  const [resendResult, kitRes] = await Promise.allSettled([
    // TASK 1 — email notification via Resend
    resend.emails.send({
      from: 'Formularz B2B <onboarding@resend.dev>',
      to: 'krzysztof@pozytywnainteligencja.pl',
      replyTo: email,
      subject: `[Nowy Lead B2B] Zapytanie ofertowe od: ${company ?? '—'}`,
      html: `
        <p><strong>Imię i nazwisko:</strong> ${name ?? '—'}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email ?? '—'}</a></p>
        <p><strong>Firma:</strong> ${company ?? '—'}</p>
        <p><strong>Wiadomość:</strong></p>
        <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#444;margin:0">
          ${(message ?? '').replace(/\n/g, '<br/>')}
        </blockquote>
      `,
    }),

    // TASK 2 — ConvertKit CRM
    fetch('https://app.kit.com/forms/9550792/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email_address: email ?? '',
        'fields[imie_i_nazwisko]': name ?? '',
        'fields[nazwa_firmy]': company ?? '',
        'fields[wiadomosc]': message ?? '',
      }).toString(),
    }),
  ])

  // Log any failures for debugging in Vercel logs
  if (resendResult.status === 'rejected') {
    console.error('[contact] Resend error:', resendResult.reason)
  } else if (resendResult.value.error) {
    console.error('[contact] Resend API error:', JSON.stringify(resendResult.value.error))
  } else {
    console.log('[contact] Resend OK, id:', resendResult.value.data?.id)
  }

  if (kitRes.status === 'rejected') {
    console.error('[contact] ConvertKit fetch error:', kitRes.reason)
  } else {
    const kitText = await kitRes.value.text().catch(() => '')
    if (!kitRes.value.ok) {
      console.error('[contact] ConvertKit error:', kitRes.value.status, kitText)
    } else {
      console.log('[contact] ConvertKit OK:', kitRes.value.status)
    }
  }

  return NextResponse.json({ ok: true })
}
