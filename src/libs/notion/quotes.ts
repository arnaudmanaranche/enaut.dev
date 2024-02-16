import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from './notion.client'

export type Quotes = Array<{
  url: string
  text: string
}>

export const getQuotesData = async () => {
  const response: QueryDatabaseResponse = await notionClient.databases.query({
    database_id: `${process.env.QUOTES_DATABASE_ID}`,
  })

  const quotes: Quotes = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.results.forEach((item: any) => {
    quotes.push({
      url: item.properties.URL.url,
      text: item.properties.Content.rich_text[0].plain_text,
    })
  })

  return quotes
}
