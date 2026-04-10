import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { Card } from '@/components/Card/Card'
import { HoverCard } from '@/components/HoverCard/HoverCard'
import type { BlogPostsList } from '@/libs/notion/blog'
import { getBlogPostsList } from '@/libs/notion/blog'
import type { PackagesList } from '@/libs/notion/packages'
import { getPackagesList } from '@/libs/notion/packages'
import type { ProjectsList } from '@/libs/notion/projects'
import { getProjectsList } from '@/libs/notion/projects'
import { getRevenueCatMetrics, type RevenueCatMetrics } from '@/libs/revenuecat'
interface HomePageProps {
  posts: BlogPostsList[]
  projects: ProjectsList[]
  packages: PackagesList[]
  revenueCat: RevenueCatMetrics
}

const HomePage = ({
  posts,
  projects,
  packages,
  revenueCat,
}: HomePageProps): ReactNode => {
  return (
    <>
      <Head>
        <title>Arnaud Manaranche - Frontend Engineer</title>
        <meta
          name="description"
          content="Frontend engineer building products with React, Next.js, and TypeScript."
        />
      </Head>
      <div className="mx-auto max-w-5xl space-y-16 pb-10">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-text-primary">
            Arnaud Manaranche
          </h1>
          <div className="max-w-xl text-lg leading-relaxed text-text-secondary">
            Frontend engineer specializing in React, TypeScript, and building
            developer tools. Currently building{' '}
            <HoverCard
              href="https://little-nook.app/"
              revenue={revenueCat.revenue}
              newCustomers={revenueCat.new_customers}
              activeSubs={revenueCat.active_subscriptions}
              chartData={revenueCat.chartData}
              period={revenueCat.period}
            >
              <span className="border-b border-dashed border-text-muted font-medium text-text-primary transition-colors group-hover:border-text-primary">
                Little Nook
              </span>
            </HoverCard>
            .
          </div>
          <div className="flex gap-6 text-sm text-text-muted">
            <span>France</span>
            <span>Open to remote work</span>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text-primary">
              Projects
            </h2>
            <span className="text-sm text-text-muted">
              {projects.length} total
            </span>
          </div>
          <div className="grid gap-4">
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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text-primary">
              Packages
            </h2>
            <span className="text-sm text-text-muted">
              {packages.length} total
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {packages.map((packageItem) => (
              <Link
                key={packageItem.id}
                href={packageItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-all hover:border-text-primary/30 hover:bg-surfaceHighlight hover:text-text-primary"
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                {packageItem.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text-primary">
              Writing
            </h2>
            <span className="text-sm text-text-muted">
              {posts.length} posts
            </span>
          </div>
          <div className="space-y-1">
            {posts.slice(0, 6).map((post) => {
              const date = new Date(post.createdAt)
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-surface"
                >
                  <span className="font-medium text-text-primary group-hover:text-text-primary">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-sm text-text-muted">
                    {date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getBlogPostsList()

  const projects = await getProjectsList()

  const packages = await getPackagesList()

  const revenueCat = await getRevenueCatMetrics()

  return {
    props: {
      posts: posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
      projects,
      packages,
      revenueCat,
    },
    revalidate: 3600,
  }
}

export default HomePage
