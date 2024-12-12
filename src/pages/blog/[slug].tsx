import type { NotionBlock } from '@9gustin/react-notion-render'
import { Render, withContentValidation } from '@9gustin/react-notion-render'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import { ShareButtons } from '@/components/blog/ShareButtons'
import { CodeBlock } from '@/components/mdx/CodeBlock'
import { getBlogPostBySlug, getBlogPostsList } from '@/libs/notion/blog'
import { calculateReadingTime } from '@/utils/reading-time'

interface BlogPostPageProps {
  blogPostData: {
    blocks: NotionBlock[]
    title: string
    createdAt: string
    description: string
    tags: string[]
  }
}

const BlogPostPage = ({ blogPostData }: BlogPostPageProps): ReactNode => {
  const pathname = usePathname()

  return (
    <>
      <Head>
        <title>{blogPostData.title}</title>
        <meta name="description" content={blogPostData.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://enaut.dev/blog/${pathname}`}
        />
        <meta property="og:title" content={blogPostData.title} />
        <meta property="og:description" content={blogPostData.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://enaut.dev/blog/${pathname}`}
        />
        <meta property="twitter:title" content={blogPostData.title} />
        <meta
          property="twitter:description"
          content={blogPostData.description}
        />
      </Head>
      <div className="mb-10 space-y-4">
        <h1 className="font-display text-5xl font-bold">
          {blogPostData.title}
        </h1>
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="text-gray-400">
              {new Date(blogPostData.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="text-gray-400">
              {calculateReadingTime(blogPostData.blocks)} min read
            </div>
            <div className="space-x-2">
              {blogPostData.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-gray-800 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <ShareButtons
            url={`https://enaut.dev${pathname}`}
            title={blogPostData.title}
          />
        </div>
      </div>
      <Render
        blocks={blogPostData.blocks}
        useStyles
        classNames
        blockComponentsMapper={{
          code: withContentValidation(CodeBlock),
        }}
      />
    </>
  )
}

export async function getStaticPaths() {
  const postsList = await getBlogPostsList()

  const paths = postsList.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string

  const blogPostData = await getBlogPostBySlug(slug)

  return {
    props: { blogPostData },
  }
}

export default BlogPostPage
