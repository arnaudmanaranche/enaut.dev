import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import { notionClient } from './notion.client'

export type ReleaseNote = Array<{
  title: string
  description: string
  date: string
  url: string
}>

export const getChangelogData = async () => {
  const response: QueryDatabaseResponse = await notionClient.databases.query({
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
