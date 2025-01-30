import type { ReactNode } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <>
      <Header />
      <main className="rounded-b-0 relative z-[1] overflow-hidden bg-[#0F0F0F] px-6 md:rounded-b-[64px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
