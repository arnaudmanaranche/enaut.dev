import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

interface Props {
  children: ReactNode
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (state: boolean) => {
    state
  },
}

export const GlobalNavigationContext = createContext(globalNavigationContext)

export function AppContext({ children }: Props) {
  const [state, setState] = useState({
    isOpen: false,
    setIsOpen,
  })

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen })
  }

  return (
    <GlobalNavigationContext.Provider value={state}>
      {children}
    </GlobalNavigationContext.Provider>
  )
}
