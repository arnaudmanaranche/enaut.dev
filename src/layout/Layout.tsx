import type { ReactNode } from 'react'

import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <main className="px-6 md:px-0">{children}</main>
    </div>
  )
}
