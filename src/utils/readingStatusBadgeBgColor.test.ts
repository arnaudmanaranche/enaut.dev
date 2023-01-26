import type { ReadingStatus } from '@/libs'

import { readingStatusBadgeBgColor } from './readingStatusBadgeBgColor'

describe('readingStatusBadgeBgColor', () => {
  it.each([
    ['bg-sky-500', 'to-read'],
    ['bg-green-500', 'currently-reading'],
    ['bg-rose-500', 'read'],
    ['bg-yellow-500', 'to-buy'],
  ])('should return color %s with status %s', (color, status) => {
    expect(readingStatusBadgeBgColor(status as ReadingStatus)).toBe(color)
  })
})
