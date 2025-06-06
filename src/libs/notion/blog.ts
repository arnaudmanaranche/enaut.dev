/* eslint-disable @typescript-eslint/no-explicit-any */

import { slugify } from '@/utils/slugify'

import { notionClient } from './notion.client'

export interface BlogPostsList {
  title: string
  id: string
  slug: string
  createdAt: string
}

export const getBlogPostsList = async () => {
  const blogPostsList: BlogPostsList[] = []

  const response = await notionClient.databases.query({
    database_id: `${process.env.BLOG_DATABASE_ID}`,
  })

  response.results.map((blogPost: any) => {
    const title = blogPost.properties.name.title[0].plain_text

    blogPostsList.push({
      title,
      id: blogPost.id,
      slug: slugify(title),
      createdAt: blogPost.created_time,
    })
  })

  return blogPostsList
}

export const getBlogPostBySlug = async (slug: string) => {
  const dbBlogPost = await notionClient.databases.query({
    database_id: `${process.env.BLOG_DATABASE_ID}`,
    filter: {
      property: 'slug',
      title: {
        equals: slug,
      },
    },
  })

  if (dbBlogPost.results.length) {
    const data = dbBlogPost.results[0] as any

    const blogPost = await notionClient.blocks.children.list({
      block_id: data.id,
    })

    return {
      blocks: blogPost.results,
      title: data?.properties.name.title[0].plain_text,
      description: data.properties.description.rich_text[0].plain_text,
      tags:
        data.properties.tags.multi_select.length > 0
          ? data.properties.tags.multi_select.map(
              (tag: { name: string }) => tag.name
            )
          : [],
      proficiency_level: data.properties.proficiency_level.select?.name ?? '',
      created_at: data.created_time,
      updated_at: data.last_edited_time,
    }
  }

  throw new Error(`Error during fetching blog post with slug ${slug}`)
}
