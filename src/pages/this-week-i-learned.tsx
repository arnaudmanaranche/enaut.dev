import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { PageTitle } from '@/components'
import { getTwilData, TwilWeek } from '@/libs'

const TwilPage = ({ weeks }: { weeks: TwilWeek[] }): ReactElement => {
  return (
    <div>
      <PageTitle title="This Week I Learned" subTitle="Doings and learnings" />
      <div className="mt-20 prose">
        {weeks.map((week) => (
          <section key={week.number}>
            <h2>Week {week.number}, 2022</h2>
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
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const weeks = await getTwilData()

  return {
    props: { weeks },
  }
}

export default TwilPage
