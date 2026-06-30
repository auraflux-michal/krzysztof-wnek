import { PortableText } from 'next-sanity'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = Record<string, any>

interface PortableBlockProps {
  value: string | Block[] | null | undefined
  className?: string
}

export default function PortableBlock({ value, className }: PortableBlockProps) {
  if (!value) return null
  if (typeof value === 'string') return <p className={className}>{value}</p>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <PortableText
      value={value as any}
      components={{
        block: { normal: ({ children }) => <p className={className}>{children}</p> },
      }}
    />
  )
}
