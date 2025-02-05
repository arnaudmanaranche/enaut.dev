import cx from 'clsx'
import { useState, type ReactNode } from 'react'

import { SidebarItemsGroup } from './Sidebar.Group'
import { SidebarItem } from './Sidebar.Item'

export interface SidebarProps {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-state={isHovered ? 'expanded' : 'collapsed'}
      className={cx(
        'transition-width group z-10 flex h-full w-14 flex-col justify-between bg-[#1c1c1c] py-2 transition-all duration-300 ease-in-out data-[state=expanded]:w-[13rem] data-[state=expanded]:shadow-xl',
        isHovered && 'w-[200px]'
      )}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <ul className="flex flex-col justify-start gap-y-1 px-2">{children}</ul>
    </div>
  )
}

Sidebar.Item = SidebarItem
Sidebar.Group = SidebarItemsGroup
