import type { ReactElement, ReactNode } from 'react'

import { BottomBarNavigation } from './components/BottomBarNavigation'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Metadata } from './components/Metadata'
import { SideBar } from './components/SideBar'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="relative font-sans">
      <Metadata />
      <Header />
      <div className="mx-auto max-w-[766px]">
        <main className="my-10 min-h-screen px-6 md:px-0">
          <SideBar />
          {children}
        </main>
        <Footer />
        <BottomBarNavigation />
      </div>
    </div>
  )
}
