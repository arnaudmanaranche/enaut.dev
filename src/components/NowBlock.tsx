import { ChevronRightIcon } from '@heroicons/react/24/outline'
import type { ReactElement, ReactNode } from 'react'

interface NowBlockProps {
  children: ReactNode
}

export const NowBlock = ({ children }: NowBlockProps): ReactElement => {
  return <div className="flex flex-col">{children}</div>
}

const Title = ({ children }: { children: ReactNode }) => (
  <div className="flex items-baseline">
    <ChevronRightIcon height={12} width={12} className="mr-2" />
    <div>{children}</div>
  </div>
)

const Description = ({ children }: { children: ReactNode }) => (
  <div className="p-2 mt-2 text-base flex">
    <div>{children}</div>
  </div>
)

NowBlock.Title = Title
NowBlock.Description = Description
