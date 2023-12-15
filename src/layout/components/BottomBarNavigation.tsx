import { PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { GlobalNavigationContext } from '@/contexts/AppContext'
import { fixedNavLinks } from '@/utils/links'

export const BottomBarNavigation = () => {
  const router = useRouter()
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext)

  return (
    <div className="fixed bottom-0 z-10 grid h-16 w-full grid-cols-4 items-center bg-white md:hidden">
      {fixedNavLinks.map(({ path, label, icon }) => {
        const isLinkActive = router.pathname === path
        return (
          <Link
            href={path ?? '#!'}
            key={label}
            className={clsx(
              isLinkActive && 'text-primary',
              !path && 'cursor-not-allowed text-gray-500',
              'flex h-full flex-col items-center justify-center'
            )}
          >
            {icon()}
            <span className="text-sm">{label}</span>
          </Link>
        )
      })}
      <div
        className="flex h-full flex-col items-center justify-center"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <PlusIcon width={22} height={22} />
        <span className="text-sm">More</span>
      </div>
    </div>
  )
}
