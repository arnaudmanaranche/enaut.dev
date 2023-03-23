import type { ReactNode } from 'react'

export const PageWrapper = ({
  title,
  subTitle,
  children,
}: {
  title: ReactNode
  subTitle: ReactNode
  children: ReactNode
}) => {
  return (
    <div>
      <h1>
        <span className="block text-center text-base font-semibold uppercase tracking-wide text-primary">
          {title}
        </span>
        <span className="mx-auto mt-2 block text-center text-4xl font-bold leading-10 sm:text-5xl">
          {subTitle}
        </span>
      </h1>
      {children}
    </div>
  )
}
