import type { ReactNode } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <>
      <Header />
      <main className="rounded-b-0 relative z-[1] min-h-[700px] overflow-hidden bg-[#282c35] px-6 md:rounded-b-[64px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
