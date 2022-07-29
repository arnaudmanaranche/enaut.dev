import type { ReactElement, ReactNode } from 'react'

const className =
  'flex cursor-pointer transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 shadow-xs bg-white border border-gray-400 border-opacity-30 hover:border-opacity-50 hover:shadow-sm justify-center'

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
