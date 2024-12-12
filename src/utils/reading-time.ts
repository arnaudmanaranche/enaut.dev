import type { NotionBlock } from '@9gustin/react-notion-render'

const WORDS_PER_MINUTE = 200

const getTextFromBlock = (block: NotionBlock): string => {
  if ('text' in block) {
    return (block.text as Array<{ plain_text: string }>)
      .map((t) => t.plain_text)
      .join('')
  }
  if ('rich_text' in block) {
    return (block.rich_text as Array<{ plain_text: string }>)
      .map((t) => t.plain_text)
      .join('')
  }
  if ('title' in block) {
    return block.title.map((t) => t.plain_text).join('')
  }
  return ''
}

export const calculateReadingTime = (blocks: NotionBlock[]): number => {
  const text = blocks.map(getTextFromBlock).join(' ')
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / WORDS_PER_MINUTE)
  return minutes
}
