import { ExternalLinkIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useRef } from 'react'

import { GlobalNavigationContext } from '@/contexts/AppContext'
import { fixedNavMoreLinks, socialLinks } from '@/utils'

export const SideBar = () => {
  const router = useRouter()
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext)
  const scrollContainerRef = useRef(null)

  return (
    <>
      <nav
        ref={scrollContainerRef}
        className={clsx(
          'fixed inset-y-0 left-0 shadow-lg z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none transform flex-col overflow-y-auto border-r border-gray-150 bg-white pb-10 transition duration-200 ease-in-out sm:w-1/2 sm:pb-0 md:hidden',
          !isOpen ? '-translate-x-full' : 'translate-x-0'
        )}
      >
        <div className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2">
          <div className="flex flex-none items-center justify-between pt-5 pb-10">
            <h2 className="text-primary transform-gpu text-sm font-bold line-clamp-1">
              Navigation
            </h2>
            <XIcon
              width={16}
              height={16}
              onClick={() => {
                setIsOpen(false)
              }}
            />
          </div>
          <div className="border-b pb-2 space-y-1">
            {fixedNavMoreLinks.map(({ path, label, icon }) => {
              const isLinkActive = router.pathname === path

              return (
                <Link href={path ?? '#!'} key={label}>
                  <a
                    onClick={() => {
                      path ? setIsOpen(false) : null
                    }}
                    tabIndex={path ? 0 : -1}
                    className={clsx(
                      isLinkActive && 'bg-[#047857] text-white',
                      !path && 'cursor-not-allowed text-gray-500',
                      'flex items-center justify-between text-gray-700  rounded-md px-2 py-1.5'
                    )}
                  >
                    {label}
                    <span className={clsx(isLinkActive && 'text-white')}>
                      {icon()}
                    </span>
                  </a>
                </Link>
              )
            })}
          </div>
          <div>
            <h3 className="text-xs font-semibold pt-5 pb-2 text-gray-1000 text-opacity-40">
              Online
            </h3>
            {socialLinks.map(({ path, label }) => (
              <Link key={label} href={path}>
                <a
                  target="_blank"
                  className="flex items-center justify-between py-1.5 text-gray-700"
                  rel="noreferrer noopener"
                >
                  {label}
                  <ExternalLinkIcon
                    className="ml-1 text-opacity-40 text-black"
                    color="#212121"
                    width={16}
                    height={16}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-10 transition duration-200 ease-in-out ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}
