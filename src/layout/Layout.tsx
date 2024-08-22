import type { ReactElement, ReactNode } from 'react'

import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <main className="px-6 md:px-0">{children}</main>
    </div>
  )
}
