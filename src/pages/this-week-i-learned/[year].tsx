import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { PageWrapper } from '@/components/PageWrapper'
import type { TwilWeek } from '@/libs/notion'
import { getTwilData } from '@/libs/notion'

import { YEARS } from './index'

interface TwilYearPageProps {
  weeks: TwilWeek[]
  year: string
}

const TwilYearPage = ({ weeks, year }: TwilYearPageProps): ReactElement => {
  return (
    <PageWrapper title="This Week I Learned" subTitle="Doings and learnings">
      <div className="prose mt-20">
        {weeks.map((week) => (
          <section key={week.number}>
            <h2>
              Week {week.number}, {year}
            </h2>
            <ul>
              {week.items.map((item) => (
                <li key={item.id}>
                  <span>{item.title}</span>
                  {` `}-{` `}
                  <a
                    href={item.link}
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    source
                  </a>
                  {item.code && item.language ? (
                    <SyntaxHighlighter language={item.language}>
                      {item.code}
                    </SyntaxHighlighter>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageWrapper>
  )
}

export async function getStaticPaths() {
  const paths = YEARS.map((year) => ({
    params: { year },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const year = context.params?.year as string

  const weeks = await getTwilData(year)

  return {
    props: { weeks, year },
  }
}

export default TwilYearPage
