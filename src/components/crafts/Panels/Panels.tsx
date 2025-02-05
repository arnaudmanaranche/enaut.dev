import clsx from 'clsx'
import { useEffect, useRef, useState, type ReactNode } from 'react'

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
  const contentRefs = useRef<HTMLDivElement[]>([])

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

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, panels?.length)
  }, [panels?.length])

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
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openPanels.includes(index)
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : '0',
                  }}
                  ref={(el) => {
                    if (el) {
                      contentRefs.current[index] = el
                    }
                  }}
                >
                  {panel.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
