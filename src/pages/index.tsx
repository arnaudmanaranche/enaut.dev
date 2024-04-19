import type { GetStaticProps } from 'next'
import Link from 'next/link'

import type { BlogPostsList } from '@/libs/notion/blog'
import { getBlogPostsList } from '@/libs/notion/blog'

const Home = ({ postsList }: { postsList: BlogPostsList[] }) => {
  return (
    <div>
      <h2 className="mb-5 text-lg">Posts</h2>
      {postsList.map((post) => (
        <p key={post.id}>
          <Link
            href={`/blog/${post.slug}`}
            className="text-[#a8a29e] hover:text-[#ffffff]"
          >
            {post.title}
          </Link>
        </p>
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
