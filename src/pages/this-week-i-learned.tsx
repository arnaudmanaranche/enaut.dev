import type { ReactElement } from 'react'

import { PageTitle } from '@/components'

const TwilPage = (): ReactElement => {
  return (
    <div>
      <PageTitle title="This Week I Learned" subTitle="Doings and learnings" />
      <div className="mt-20">
        <h2 className="mt-1 text-lg font-bold">
          <p>Week 22, 2022</p>
        </h2>
        <div className="pb-32 space-y-10">
          <section>
            <ul className="pt-4 pl-6 space-y-3 list-disc">
              <li>
                TypeScript barrel files and how to reduce bundle size with
                webpack -{' '}
                <a
                  href="https://twitter.com/sebmarkbage/status/1521669876955426816"
                  className=" border-b border-blue-300 hover:border-blue-400  font-medium text-blue-500"
                >
                  source
                </a>
              </li>
              <li>
                Git Commit Work In Progess -{' '}
                <a
                  href="https://twitter.com/sebmarkbage/status/1521669876955426816"
                  className=" border-b border-blue-300 hover:border-blue-400  font-medium text-blue-500"
                >
                  source
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TwilPage
