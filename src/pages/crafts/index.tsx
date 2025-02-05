import fs from 'fs'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path'
import type { ReactNode } from 'react'

import { Card } from '@/components/Card/Card'

type CraftsProps = { title: string; description: string; href: string }

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  return (
    <div className="mx-auto max-w-4xl space-y-16 pb-10">
      <ul className="grid grid-cols-1 gap-4">
        {data.map((item) => (
          <li key={item.title}>
            <Card
              title={item.title}
              description={item.description}
              href={item.href}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = (async () => {
  const craftsDir = path.join(process.cwd(), 'src/components/crafts')

  const craftsList: CraftsProps[] = []

  if (fs.existsSync(craftsDir)) {
    const craftFolders = fs.readdirSync(craftsDir)

    craftFolders.forEach((folder) => {
      const craftPath = path.join(craftsDir, folder, 'index.mdx')
      if (fs.existsSync(craftPath)) {
        const content = fs.readFileSync(craftPath, 'utf-8')

        const match = content.match(/title:\s*(.*)\ndescription:\s*(.*)/)
        if (match) {
          const fileName = folder
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()

          craftsList.push({
            title: match[1].trim(),
            description: match[2].trim(),
            href: `/crafts/${fileName}`,
          })
        }
      }
    })
  }

  return { props: { data: craftsList } }
}) satisfies GetStaticProps<{
  data: CraftsProps[]
}>
