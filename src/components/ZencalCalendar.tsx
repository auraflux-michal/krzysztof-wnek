'use client'

import Script from 'next/script'

export default function ZencalCalendar() {
  return (
    <>
      <div
        data-type="u"
        data-owner="pozytywnainteligencja"
        data-slug="konsultacja-pq"
        data-primary="#191919"
        data-secondary="#7a7979"
        data-avatar="https://meetendly.fra1.digitaloceanspaces.com/profile-images/5rAWKjzuVDFQKdm562Ueh7FkLRhel9.jpg"
        data-lang="pl"
        data-ampm="0"
        data-text-color="#ffffff"
        data-content-bg="#ffffff"
        data-content-text="#1a1a1a"
        data-topics-list="26788c95-1fde-4787-9402-746bd2a53dba"
        className="zencal-embed"
      />
      <Script
        src="https://app.zencal.io/js/embed.js?v=4.0.4"
        strategy="afterInteractive"
        data-cookieconsent="ignore"
      />
    </>
  )
}
