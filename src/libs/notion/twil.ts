import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from './notion.client'

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
  const response: QueryDatabaseResponse = await notionClient.databases.query({
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
