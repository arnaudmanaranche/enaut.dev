import Link from 'next/link'
import type { ReactNode } from 'react'

interface CardProps {
  description: ReactNode
  href: string
  tags?: ReactNode[]
  title: ReactNode
  isExternalLink?: boolean
}

export function Card({
  description,
  href,
  tags,
  title,
  isExternalLink,
}: CardProps): ReactNode {
  return (
    <Link
      href={href}
      {...(isExternalLink
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
      className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-text-primary/30 hover:bg-surfaceHighlight"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-text-primary">
          {title}
        </h3>
        {isExternalLink ? (
          <svg
            className="h-4 w-4 shrink-0 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:text-text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              className="rounded-full bg-text-primary/10 px-2.5 py-0.5 text-xs font-medium text-text-primary"
              key={tag?.toString()}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
