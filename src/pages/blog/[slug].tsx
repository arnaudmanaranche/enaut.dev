import type { NotionBlock } from '@9gustin/react-notion-render'
import { Render, withContentValidation } from '@9gustin/react-notion-render'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import { CodeBlock } from '@/components/mdx/CodeBlock'
import { getBlogPostBySlug, getBlogPostsList } from '@/libs/notion/blog'
import { formatDateWithOrdinal } from '@/utils/formatDateWithOrdinal'
import { isSameDay } from '@/utils/isSameDay'

interface BlogPostPageProps {
  blogPostData: {
    blocks: NotionBlock[]
    title: string
    description: string
    tags: string[]
    proficiency_level: string
    created_at: string
    updated_at: string
  }
}

const BlogPostPage = ({ blogPostData }: BlogPostPageProps): ReactNode => {
  const pathname = usePathname()

  const PAGE_URL = `https://enaut.dev/blog/${pathname}`

  return (
    <div className="mx-auto max-w-4xl pb-10">
      <Head>
        <title>{blogPostData.title}</title>
        <meta name="description" content={blogPostData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={blogPostData.title} />
        <meta property="og:description" content={blogPostData.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={PAGE_URL} />
        <meta property="twitter:title" content={blogPostData.title} />
        <meta
          property="twitter:description"
          content={blogPostData.description}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TechArticle',
              headline: blogPostData.title,
              description: blogPostData.description,
              url: PAGE_URL,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': PAGE_URL,
              },
              proficiencyLevel: blogPostData.proficiency_level,
              dateModified: blogPostData.updated_at,
              dateCreated: blogPostData.created_at,
              datePublished: blogPostData.created_at,
            }),
          }}
        />
        <meta property="og:image" content="https://enaut.dev/api/og" />
      </Head>
      <div className="mb-10 space-y-4">
        <h1 className="font-display text-5xl font-bold leading-tight">
          {blogPostData.title}
        </h1>
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="italic text-gray-400">
              <span>
                {`Published on ${formatDateWithOrdinal(
                  new Date(blogPostData.created_at)
                )}.`}
              </span>
              <span>
                {isSameDay(
                  new Date(blogPostData.updated_at),
                  new Date(blogPostData.created_at)
                )
                  ? null
                  : ` Last
              updated on ${formatDateWithOrdinal(
                new Date(blogPostData.updated_at)
              )}.`}
              </span>
            </div>
            <div className="space-x-2">
              {blogPostData.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[#81ACEC] px-2 py-1 text-black/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
    </div>
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
