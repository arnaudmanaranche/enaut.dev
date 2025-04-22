export function formatDateWithOrdinal(date: Date): string {
  const day = date.getDate()
  const suffix = getOrdinalSuffix(day)
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  return `${month} ${day}${suffix}, ${year}`
}

function getOrdinalSuffix(n: number): string {
  if (n >= 11 && n <= 13) return 'th'
  switch (n % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
