import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from './notion.client'

export type ReadingStatus = 'to-read' | 'read' | 'currently-reading' | 'to-buy'

export type Reading = {
  id: string
  author: string
  status: ReadingStatus
  image: string
  title: string
}

export const getReadingsData = async () => {
  const response: QueryDatabaseResponse = await notionClient.databases.query({
    database_id: `${process.env.READINGS_DATABASE_ID}`,
  })

  const readings: Array<Reading> = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.results.forEach((item: any) => {
    readings.push({
      id: item.id,
      author: item.properties.Author.rich_text[0].plain_text,
      status: item.properties.Bookshelves.select.name,
      image: item.properties.Image.files?.[0]?.file?.url || '',
      title: item.properties.Title.title[0].plain_text,
    })
  })

  return readings
}
