/* eslint-disable @typescript-eslint/no-explicit-any */

import { slugify } from '@/utils/slugify'

import { notionClient } from './notion.client'

export interface BlogPostsList {
  title: string
  id: string
  slug: string
  tags: string[]
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
      tags: [],
    })
  })

  return blogPostsList
}

export const getBlogPostBySlug = async (slug: string) => {
  const response = await notionClient.databases.query({
    database_id: `${process.env.BLOG_DATABASE_ID}`,
  })

  const dbBlogPost = response.results.find(
    (result: any) => result.properties.slug.rich_text[0].plain_text === slug
  ) as any

  if (dbBlogPost?.id) {
    const blogPost = await notionClient.blocks.children.list({
      block_id: dbBlogPost.id,
    })

    return {
      blocks: blogPost.results,
      title: dbBlogPost.properties.name.title[0].plain_text,
      createdAt: dbBlogPost.created_time,
    }
  }

  throw new Error(`Error during fetching blog post with slug ${slug}`)
}
