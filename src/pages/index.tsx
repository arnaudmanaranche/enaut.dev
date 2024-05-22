import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import type { BlogPostsList } from '@/libs/notion/blog'
import { getBlogPostsList } from '@/libs/notion/blog'
import { getMonthAndYearFromDate } from '@/utils/getMonthAndYearFromDate'

const Home = ({ postsList }: { postsList: BlogPostsList[] }) => {
  return (
    <div>
      <Head>
        <title>enaut.dev | Frontend Engineer</title>
      </Head>
      <h2 className="mb-5 text-lg">Posts</h2>
      {postsList.map((post) => (
        <div key={post.id} className=" text-[#a8a29e] hover:text-[#ffffff]">
          <Link href={`/blog/${post.slug}`} className="flex justify-between">
            <span>{post.title}</span>
            <span>{getMonthAndYearFromDate(new Date(post.createdAt))}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsList = await getBlogPostsList()

  return {
    props: { postsList },
  }
}

export default Home
