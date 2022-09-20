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
        <span className="block text-base text-center text-primary tracking-wide font-semibold uppercase">
          {title}
        </span>
        <span className="mt-2 block text-4xl text-center leading-10 font-bold sm:text-5xl mx-auto">
          {subTitle}
        </span>
      </h1>
      {children}
    </div>
  )
}
