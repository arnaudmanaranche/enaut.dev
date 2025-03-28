/* eslint-disable @typescript-eslint/no-explicit-any */

import { notionClient } from './notion.client'

export interface ProjectsList {
  title: string
  id: string
  url: string
  description: string
  tags: string[]
}

export const getProjectsList = async () => {
  const projectsList: ProjectsList[] = []

  const response = await notionClient.databases.query({
    database_id: `${process.env.PROJECTS_DATABASE_ID}`,
  })

  response.results.map((project: any) => {
    const title = project.properties.name.title[0].plain_text

    projectsList.push({
      title,
      id: project.id,
      url: project.properties.url.url,
      description: project.properties.description.rich_text[0].plain_text,
      tags: project.properties.tags.multi_select.map((tag: any) => tag.name),
    })
  })

  return projectsList
}
