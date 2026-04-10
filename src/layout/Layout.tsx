import type { ReactNode } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header />
      <main className="px-6 pb-10">{children}</main>
      <Footer />
    </div>
  )
}
