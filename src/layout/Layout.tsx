import type { ReactElement, ReactNode } from 'react'

import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="mx-auto mb-10 max-w-2xl">
      <Header />
      <main className="min-h-screen px-6 md:px-0">{children}</main>
    </div>
  )
}
