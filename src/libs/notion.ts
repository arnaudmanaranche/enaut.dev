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

export const getTwilData = async (year: string) => {
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: `${process.env.TWIL_DATABASE_ID}`,
    sorts: [
      {
        property: 'Number',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Year',
      number: {
        equals: parseInt(year),
      },
    },
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

export type ReadingStatus = 'to-read' | 'read' | 'currently-reading' | 'to-buy'

export type Reading = {
  id: string
  author: string
  status: ReadingStatus
  image: string
  title: string
}

export const getReadingsData = async () => {
  const response: QueryDatabaseResponse = await notion.databases.query({
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
