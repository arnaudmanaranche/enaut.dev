import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'

import type { BlogPostsList } from '@/libs/notion/blog'
import { getBlogPostsList } from '@/libs/notion/blog'

interface HomePageProps {
  posts: BlogPostsList[]
}

const HomePage = ({ posts }: HomePageProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Arnaud Manaranche - Frontend Engineer</title>
        <meta
          name="description"
          content="Frontend engineer building products with React, Next.js, and TypeScript."
        />
      </Head>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="font-display text-5xl font-bold">Arnaud Manaranche</h1>
          <p className="text-xl text-gray-400">
            Frontend engineer building products with React, Next.js, and
            TypeScript.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl font-bold">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <a
              href="https://begintrips.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4 rounded-lg border border-gray-800 p-6 transition-all hover:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold group-hover:text-blue-400">
                  BeginTrips
                </h3>
                <svg
                  className="h-5 w-5 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                A travel planning platform built with Next.js, TypeScript, and
                Tailwind CSS. Plan your journey day by day, track your expenses
                by category, and keep all your travel details organized in one
                place..
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                  Next.js
                </span>
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                  TypeScript
                </span>
                <span className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-400">
                  Tailwind CSS
                </span>
              </div>
            </a>
          </div>
        </section>
        <section className="space-y-6">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block space-y-4 rounded-lg border border-gray-800 p-6 transition-all hover:border-gray-700"
              >
                <h3 className="font-display text-2xl font-semibold group-hover:text-blue-400">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPostsList()

  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    },
    revalidate: 60,
  }
}

export default HomePage
