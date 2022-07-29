import Link from 'next/link'
import { useRouter } from 'next/router'
import { headerLinks } from '@/utils/links'
import clsx from 'clsx'

import type { ReactElement } from 'react'
import { ContactMe } from '@/components/ContactMe'

export const Header = (): ReactElement => {
  const router = useRouter()

  return (
    <header className="border-solid border-b flex items-center justify-between pt-8 pb-4 px-6 md:px-0 relative">
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
              <Link href={path ?? '#!'}>
                <a
                  tabIndex={path ? 0 : -1}
                  className={clsx(
                    isLinkActive && 'text-primary',
                    !isLinkActive && path && 'hover:bg-gray-100',
                    !path && 'cursor-not-allowed text-gray-500',
                    ' p-1 sm:px-3 sm:py-2 rounded-lg transition-all'
                  )}
                >
                  {label}
                </a>
              </Link>
            </span>
          )
        })}
      </nav>
    </header>
  )
}
