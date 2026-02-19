import clsx from 'clsx'
import { motion } from 'framer-motion'
import { type ReactNode, useState } from 'react'

type Panel = {
  title: ReactNode
  content: ReactNode
}

export interface PanelsProps {
  allowMultipleOpen: boolean
  panels: Panel[]
}

export function Panels({ allowMultipleOpen, panels }: PanelsProps): ReactNode {
  const [openPanels, setOpenPanels] = useState<number[]>([])

  const handleTogglePanel = (index: number) => {
    if (allowMultipleOpen) {
      if (openPanels.includes(index)) {
        setOpenPanels(openPanels.filter((i) => i !== index))
      } else {
        setOpenPanels([...openPanels, index])
      }
    } else {
      setOpenPanels(openPanels.includes(index) ? [] : [index])
    }
  }

  if (!panels) return null

  return (
    <div className="p-6 text-black">
      <div className="rounded-lg bg-gray-50">
        <div className="px-4 py-6">
          <p className="text-lg">Lorem ipsum dolor sit</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="rounded-lg border-[1px] bg-white shadow-md">
          {panels.map((panel, index) => {
            const isLast = index === panels.length - 1
            const isOpen = openPanels.includes(index)

            return (
              <div
                className={clsx('rounded-t-lg  p-6', !isLast && 'border-b-2')}
                key={index}
              >
                <div
                  onClick={() => handleTogglePanel(index)}
                  className="flex cursor-pointer"
                >
                  {panel.title}
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {panel.content}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
