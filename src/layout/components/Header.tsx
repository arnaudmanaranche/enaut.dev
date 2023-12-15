import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { ContactMe } from '@/components/ContactMe'
import { headerLinks } from '@/utils/links'

export const Header = (): ReactElement => {
  const router = useRouter()
  const [isScrollAtTop, setIsScrollAtTop] = useState(false)

  const handleNavigation = useCallback(() => {
    if (window.scrollY > 0) {
      setIsScrollAtTop(true)
    } else {
      setIsScrollAtTop(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <header
      className={clsx(
        'sticky inset-0 z-[9] justify-self-start border-b-2 border-solid bg-[#f9f8f8] px-6 pb-4 pt-8 backdrop-blur-[20px] backdrop-saturate-[180%] transition-colors duration-300 ease-in-out md:px-0',
        isScrollAtTop
          ? 'border-b-neutral-100 bg-opacity-80'
          : 'border-b-transparent bg-opacity-10'
      )}
    >
      <div className="mx-auto flex max-w-[766px] items-center justify-between">
        <span className="hidden text-2xl md:flex">
          Arnaud<b>Manaranche</b>
        </span>
        <span className="text-2xl md:hidden">
          A<b>M</b>
        </span>
        <div className="md:hidden">
          <ContactMe />
        </div>
        <nav className="hidden space-x-4 md:flex">
          {headerLinks.map(({ path, label }) => {
            const isLinkActive = router.pathname === path
            return (
              <span key={label}>
                <Link
                  href={path ?? '#!'}
                  tabIndex={path ? 0 : -1}
                  className={clsx(
                    isLinkActive && 'text-primary',
                    !isLinkActive && path && 'hover:bg-gray-100',
                    !path && 'cursor-not-allowed text-gray-500',
                    ' rounded-lg p-1 transition-all sm:px-3 sm:py-2'
                  )}
                >
                  {label}
                </Link>
              </span>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
