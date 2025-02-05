import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface SidebarItemProps {
  icon: ReactNode
  children: ReactNode
  isActive?: boolean
}

function SVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-settings"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}

export function SidebarItem({
  icon = <SVG />,
  children,
  isActive,
}: SidebarItemProps) {
  return (
    <a
      role="button"
      className={clsx(
        'group/item relative flex h-10 w-10 items-center rounded text-[#7e7e7e] transition-all duration-200 hover:bg-[#343434] hover:text-white group-data-[state=expanded]:w-full group-data-[state=collapsed]:justify-center group-data-[state=expanded]:-space-x-2',
        isActive && 'bg-[#343434] text-white'
      )}
      href="#"
    >
      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded">
        {icon}
      </span>
      <span className="absolute left-7 min-w-[128px] text-sm text-[#7e7e7e] opacity-0 transition-all group-hover/item:text-white group-data-[state=expanded]:left-12 group-data-[state=expanded]:opacity-100">
        {children}
      </span>
    </a>
  )
}
