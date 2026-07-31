import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { client } from '@/sanity/client'

async function fetchNotifyEmail(): Promise<string> {
  try {
    const result = await Promise.race([
      client.fetch<string | null>(`*[_type == "settings"][0].emailContact`),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000)),
    ])
    return result ?? process.env.RESEND_NOTIFY_EMAIL ?? 'do@krzysztofwnek.pl'
  } catch {
    return process.env.RESEND_NOTIFY_EMAIL ?? 'do@krzysztofwnek.pl'
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const { name, email, phone, company, message, b2b_honeypot, 'cf-turnstile-response': turnstileToken } = body

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

  const notifyEmail = await fetchNotifyEmail()
  console.log('[contact] notifyEmail:', notifyEmail)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY not set')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: notifyEmail,
      replyTo: email || undefined,
      subject: `[Nowy Lead B2B] Zapytanie ofertowe od: ${company ?? '—'}`,
      html: `
        <h2 style="font-family:sans-serif;margin:0 0 24px">Nowe zapytanie B2B</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
          <tr><td style="padding:6px 16px 6px 0;color:#666;white-space:nowrap">Imię i nazwisko</td><td style="padding:6px 0"><strong>${name ?? '—'}</strong></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email ?? '—'}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#666">Telefon</td><td style="padding:6px 0"><a href="tel:${phone}">${phone ?? '—'}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;color:#666">Firma</td><td style="padding:6px 0">${company ?? '—'}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:15px;color:#666;margin:24px 0 8px">Wiadomość:</p>
        <blockquote style="font-family:sans-serif;font-size:15px;border-left:3px solid #ccc;padding:12px 16px;margin:0;color:#333;background:#f9f9f9">
          ${(message ?? '').replace(/\n/g, '<br/>')}
        </blockquote>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', JSON.stringify(error))
      return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
    }

    console.log('[contact] Resend OK, id:', data?.id)
  } catch (err) {
    console.error('[contact] Resend threw:', err)
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
