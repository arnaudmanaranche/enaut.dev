import type { ReadingStatus } from '@/libs/notion'

export const readingStatusBadgeBgColor = (status: ReadingStatus): string => {
  switch (status) {
    case 'to-read':
      return 'bg-sky-500'
    case 'currently-reading':
      return 'bg-green-500'
    case 'read':
      return 'bg-rose-500'
    case 'to-buy':
      return 'bg-yellow-500'
    default:
      console.error(`Status ${status} is not supported`)
      return 'bg-gray-500'
  }
}
