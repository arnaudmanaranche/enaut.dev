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
  url: string
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
      url: item.url,
    })
  })

  return releasesNotes
}

export type TwilWeek = {
  number: number
  items: Array<{
    code?: string
    id: string
    link?: string
    language?: string
    title: string
  }>
}

export const getTwilData = async () => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: `${process.env.TWIL_DATABASE_ID}`,
    sorts: [
      {
        property: 'Number',
        direction: 'descending',
      },
    ],
  })

  const weeks: Array<TwilWeek> = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response.results.forEach((item: any) => {
    const currentWeekNumber = item.properties['Number'].title[0].plain_text
    const twilWeeksIncludeCurrentWeek = weeks.find(
      (week) => week.number === currentWeekNumber
    )

    if (!twilWeeksIncludeCurrentWeek) {
      weeks.push({
        number: currentWeekNumber,
        items: [
          {
            code: item.properties.Code.rich_text?.[0]?.plain_text ?? '',
            id: item.id,
            language: item.properties.Language.rich_text?.[0]?.plain_text ?? '',
            link: item.properties.Link.rich_text?.[0]?.href ?? '',
            title: item.properties.Title.rich_text?.[0]?.plain_text,
          },
        ],
      })
    } else {
      twilWeeksIncludeCurrentWeek.items.push({
        code: item.properties.Code.rich_text?.[0]?.plain_text ?? '',
        id: item.id,
        language: item.properties.Language.rich_text?.[0]?.plain_text ?? '',
        link: item.properties.Link.rich_text?.[0]?.href ?? '',
        title: item.properties.Title.rich_text?.[0]?.plain_text,
      })
    }
  })

  return weeks
}
