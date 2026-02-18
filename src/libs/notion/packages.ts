/* eslint-disable @typescript-eslint/no-explicit-any */

import { notionClient } from './notion.client'

export interface PackagesList {
  title: string
  id: string
  url: string
  description: string
  tags: string[]
}

export const getPackagesList = async () => {
  const packagesList: PackagesList[] = []

  const response = await notionClient.databases.query({
    database_id: `${process.env.PACKAGES_DATABASE_ID}`,
  })

  response.results.map((packageItem: any) => {
    const title = packageItem.properties.name.title[0]?.plain_text
    const url = packageItem.properties.url?.url
    const description = ""

    // Skip projects without required fields
    if (!title || !url) return
        packagesList.push({
      title,
      id: packageItem.id,
      url,
      description,
      tags: [],
    })
  })

  return packagesList
}
