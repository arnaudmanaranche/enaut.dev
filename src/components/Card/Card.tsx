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
      className="group block space-y-4 rounded-lg border border-[#ffffff0b] bg-[#ffffff0b] p-6 transition-all hover:border-[#4c4d4f]"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        {isExternalLink ? (
          <svg
            className="h-5 w-5 text-gray-400 transition-transform"
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
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-[#81ACEC]"
            key={tag?.toString()}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
