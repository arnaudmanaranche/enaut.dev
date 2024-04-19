import type { NotionBlock } from '@9gustin/react-notion-render'
import { Render, withContentValidation } from '@9gustin/react-notion-render'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { type ReactElement } from 'react'

import { CodeBlock } from '@/components/mdx/CodeBlock'
import { getBlogPostBySlug, getBlogPostsList } from '@/libs/notion/blog'

interface TwilYearPageProps {
  blogPostData: {
    blocks: NotionBlock[]
    title: string
    createdAt: string
  }
}

const BlogPostPage = ({ blogPostData }: TwilYearPageProps): ReactElement => {
  return (
    <>
      <Head>
        <title>{blogPostData.title}</title>
      </Head>
      <div className="space-y-4 p-4 text-center">
        <h1 className=" text-4xl">{blogPostData.title}</h1>
        <div>{new Date(blogPostData.createdAt).toLocaleDateString()}</div>
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
