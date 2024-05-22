const months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
]

export const getMonthAndYearFromDate = (date: Date): string => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`
}
