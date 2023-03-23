import type { ReactElement, ReactNode } from 'react'

const className =
  'hover:text-gray-1000 shadow-xs flex cursor-pointer justify-center rounded-md border border-gray-400 border-opacity-30 bg-white px-4 py-2 text-sm font-semibold text-gray-700 opacity-100 transition-all hover:border-opacity-50 hover:shadow-sm'

export const Button = ({
  children,
  onClick,
  href,
  to,
}: {
  children: ReactNode
  onClick?: () => void
  href?: string
  to?: string
}): ReactElement => {
  if (href || to) {
    return (
      <a
        href={href ?? to}
        target={to ? '_blank' : undefined}
        rel="noreferrer noopener"
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
