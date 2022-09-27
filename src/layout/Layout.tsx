import type { ReactElement, ReactNode } from 'react'

import {
  BottomBarNavigation,
  Footer,
  Header,
  Metadata,
  SideBar,
} from './components'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="font-body relative">
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
