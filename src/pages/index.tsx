import type { GetStaticProps } from 'next'
import Head from 'next/head'
import type { ReactNode } from 'react'

import { Card } from '@/components/Card/Card'
import type { BlogPostsList } from '@/libs/notion/blog'
import { getBlogPostsList } from '@/libs/notion/blog'
import type { ProjectsList } from '@/libs/notion/projects'
import { getProjectsList } from '@/libs/notion/projects'

interface HomePageProps {
  posts: BlogPostsList[]
  projects: ProjectsList[]
}

const HomePage = ({ posts, projects }: HomePageProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Arnaud Manaranche - Frontend Engineer</title>
        <meta
          name="description"
          content="Frontend engineer building products with React, Next.js, and TypeScript."
        />
      </Head>
      <div className="mx-auto max-w-4xl space-y-16 pb-10">
        <section className="space-y-4">
          <h1 className="font-display text-5xl font-bold">
            Hi, I&apos;m Arnaud!
          </h1>
          <div className="flex flex-col gap-2 text-xl text-gray-400">
            <span>Frontend Engineer / Indie Maker</span>
            <span>Triathlete 🏊🚴🏃</span>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="font-display text-3xl font-bold">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                href={project.url}
                tags={project.tags}
                isExternalLink
              />
            ))}
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="font-display text-3xl font-bold">
            Blog & Technical posts
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={new Date(post.createdAt).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
                href={`/blog/${post.slug}`}
                isExternalLink={false}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPostsList()

  const projects = await getProjectsList()

  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
      projects,
    },
    revalidate: 60,
  }
}

export default HomePage
