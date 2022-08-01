import { PlusIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { GlobalNavigationContext } from '@/contexts/AppContext'
import { fixedNavLinks } from '@/utils'

export const BottomBarNavigation = () => {
  const router = useRouter()
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext)

  return (
    <div className="fixed z-10 w-full md:hidden grid grid-cols-4 h-16 items-center bottom-0 bg-white">
      {fixedNavLinks.map(({ path, label, icon }) => {
        const isLinkActive = router.pathname === path
        return (
          <Link href={path ?? '#!'} key={label}>
            <a
              className={clsx(
                isLinkActive && 'text-primary',
                !path && 'cursor-not-allowed text-gray-500',
                'h-full items-center flex justify-center flex-col'
              )}
            >
              {icon()}
              <span className="text-sm">{label}</span>
            </a>
          </Link>
        )
      })}
      <div
        className="h-full items-center flex justify-center flex-col"
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
