import { Client } from '@notionhq/client'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

export type Quotes = Array<{
  url: string
  text: string
}>

export const getQuotesData = async () => {
  const response: QueryDatabaseResponse = await notion.databases.query({
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

export type ReleaseNote = Array<{
  title: string
  description: string
  date: string
}>

export const getChangelogData = async () => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: `${process.env.CHANGELOG_DATABASE_ID}`,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })

  const releasesNotes: ReleaseNote = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.results.forEach((item: any) => {
    releasesNotes.push({
      title: item.properties.Name.title[0].plain_text,
      description: item.properties.Description.rich_text[0].plain_text,
      date: item.properties.Date.date.start,
    })
  })

  return releasesNotes
}
