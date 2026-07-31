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
  const blocks = value as Block[]
  const baseClass = className?.replace(/\s*dc-body-p--last\b/, '').trim()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <PortableText
      value={blocks as any}
      components={{
        block: {
          normal: ({ children, index }) => (
            <p className={index === blocks.length - 1 ? className : baseClass}>{children}</p>
          ),
        },
      }}
    />
  )
}
