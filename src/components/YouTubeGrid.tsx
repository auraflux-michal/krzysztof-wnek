'use client'

import { useEffect, useState } from 'react'

const YT_CHANNEL = 'UC49dTdbJNVs5NmYVdEGGrXw'
const YT_URL = 'https://www.youtube.com/@PozytywnaInteligencja'
const LABELS = ['NAJNOWSZE', 'ODC. 2', 'ODC. 3']

const FALLBACK = [
  { label: 'NAJNOWSZE', title: 'Jak sabotażyści niszczą Twoją decyzję — i co z tym zrobić', href: YT_URL },
  { label: 'POPULARNE', title: 'Pozytywna Inteligencja: poznaj wrogów w swojej głowie', href: YT_URL },
  { label: 'POLECANE', title: 'Dlaczego sukces nie daje Ci szczęścia', href: YT_URL },
]

interface YTItem { title: string; link: string; guid: string; pubDate: string }

export default function YouTubeGrid() {
  const [items, setItems] = useState<{ label: string; title: string; href: string; thumb?: string }[]>(FALLBACK)

  useEffect(() => {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL}`
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!data?.items?.length) return
        const mapped = (data.items as YTItem[]).slice(0, 3).map((it, i) => {
          const id = (it.guid || '').split(':').pop() ?? ''
          const date = it.pubDate
            ? new Date(it.pubDate).toLocaleDateString('pl-PL', { month: 'short', year: 'numeric' }).toUpperCase()
            : ''
          return {
            label: LABELS[i] + (date ? ` · ${date}` : ''),
            title: it.title,
            href: it.link || YT_URL,
            thumb: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined,
          }
        })
        setItems(mapped)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="yt-grid" id="yt-grid">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="yt-card reveal in"
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          <div className="yt-thumb">
            {item.thumb ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div className="ph">
                <div className="ph-corner">{item.label.split(' ')[0]}</div>
              </div>
            )}
            <div className="play-mini">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2v12l10-6z" />
              </svg>
            </div>
          </div>
          <div className="yt-meta">{item.label}</div>
          <div className="yt-title">{item.title}</div>
        </a>
      ))}
    </div>
  )
}
