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
        'border-solid pt-8 pb-4 px-6 md:px-0 sticky inset-0 bg-[#f9f8f8] border-b-2 backdrop-saturate-[180%] backdrop-blur-[20px] justify-self-start transition-colors duration-300 ease-in-out z-[9]',
        isScrollAtTop
          ? 'border-b-neutral-100 bg-opacity-80'
          : 'border-b-transparent bg-opacity-10'
      )}
    >
      <div className="max-w-[766px] mx-auto flex items-center justify-between">
        <span className="text-2xl md:flex hidden">
          Arnaud<b>Manaranche</b>
        </span>
        <span className="text-2xl md:hidden">
          A<b>M</b>
        </span>
        <div className="md:hidden">
          <ContactMe />
        </div>
        <nav className="space-x-4 md:flex hidden">
          {headerLinks.map(({ path, label }) => {
            const isLinkActive = router.pathname === path
            return (
              <span key={label}>
                <Link
                  href={path ?? '#!'}
                  scroll={false}
                  tabIndex={path ? 0 : -1}
                  className={clsx(
                    isLinkActive && 'text-primary',
                    !isLinkActive && path && 'hover:bg-gray-100',
                    !path && 'cursor-not-allowed text-gray-500',
                    ' p-1 sm:px-3 sm:py-2 rounded-lg transition-all'
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
