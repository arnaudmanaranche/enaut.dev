import type { NotionBlock } from '@9gustin/react-notion-render'
import { Render, withContentValidation } from '@9gustin/react-notion-render'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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

  const createdDate = new Date(blogPostData.created_at)
  const updatedDate = new Date(blogPostData.updated_at)

  return (
    <div className="mx-auto max-w-3xl pb-10">
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

      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </Link>

      <article>
        <header className="mb-10 space-y-4">
          <h1 className="text-3xl font-bold leading-tight text-text-primary">
            {blogPostData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
            <time dateTime={createdDate.toISOString()}>
              {formatDateWithOrdinal(createdDate)}
            </time>
            {!isSameDay(updatedDate, createdDate) && (
              <>
                <span>·</span>
                <span>Updated {formatDateWithOrdinal(updatedDate)}</span>
              </>
            )}
          </div>
          {blogPostData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blogPostData.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <Render
            blocks={blogPostData.blocks}
            useStyles
            classNames
            blockComponentsMapper={{
              code: withContentValidation(CodeBlock),
            }}
          />
        </div>
      </article>
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
