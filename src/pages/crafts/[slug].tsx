import fs from 'fs'
import matter from 'gray-matter'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import type { ClassAttributes, HTMLAttributes, ReactNode } from 'react'

import { LongPressButton } from '@/components/crafts/LongPressButton/LongPressButon'
import { Panels } from '@/components/crafts/Panels/Panels'
import { Sidebar } from '@/components/crafts/Sidebar/Sidebar'
import { SidebarItemsGroup } from '@/components/crafts/Sidebar/Sidebar.Group'
import { SidebarItem } from '@/components/crafts/Sidebar/Sidebar.Item'
import { stringToKebabCase } from '@/utils/stringToKebabCase'

interface PageProps {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
  title: string
}

function Container({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex items-center justify-center rounded-md bg-[#ffffff0b] p-6 ring-1 ring-[#ffffff0b]">
      {children}
    </div>
  )
}

function ViewTheCode({ component }: { component: string }): ReactNode {
  return (
    <div>
      View the code on the{' '}
      <a
        className="underline"
        target="_blank"
        rel="noreferrer"
        href={`https://github.com/arnaudmanaranche/enaut.dev/tree/main/src/components/crafts/${component}`}
      >
        repository
      </a>
      .
    </div>
  )
}

export const components = {
  LongPressButton,
  Sidebar,
  SidebarItem,
  ViewTheCode,
  SidebarItemsGroup,
  Container,
  Panels,
  h1: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLHeadingElement> &
      HTMLAttributes<HTMLHeadingElement>
  ): ReactNode => <h1 className="py-2 text-4xl leading-normal" {...props} />,
  p: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLParagraphElement> &
      HTMLAttributes<HTMLParagraphElement>
  ): ReactNode => <p className="text-lg" {...props} />,
  a: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLAnchorElement> &
      HTMLAttributes<HTMLAnchorElement>
  ): ReactNode => <a {...props} />,
}

export default function Page({
  title,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  return (
    <div className="mx-auto max-w-4xl pb-10">
      <Head>
        <title>Crafts - {title}</title>
      </Head>
      <div className="space-y-4 p-2">
        <div>
          <Link href="/crafts" className="text-[#81ACEC]">
            Crafts
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{title}</span>
        </div>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const craftsDir = path.join(process.cwd(), 'src/components/crafts')
  const filenames = fs.readdirSync(craftsDir)

  const paths = filenames.map((file) => {
    const fileNameWithoutExt = file.replace(/\.tsx?$/, '')
    return { params: { slug: stringToKebabCase(fileNameWithoutExt) } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as string

  const fileName = slug
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')

  const filePath = path.join(
    process.cwd(),
    `src/components/crafts/${fileName}/index.mdx`
  )

  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const { content, data } = matter(fileContent)

  const mdxSource = await serialize(content, {
    scope: {},
  })

  return { props: { source: mdxSource, title: data.title } }
}) satisfies GetStaticProps<PageProps>
