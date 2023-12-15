import clsx from 'clsx'
import Link from 'next/link'
import type { ReactElement } from 'react'

import { PageWrapper } from '@/components/PageWrapper'

export const YEARS = ['2022', '2023']

const TwilPage = (): ReactElement => {
  return (
    <PageWrapper title="This Week I Learned" subTitle="Doings and learnings">
      <div className="prose mt-20">
        {YEARS.map((year) => (
          <Link
            key={year}
            href={`/this-week-i-learned/${year}`}
            className={clsx(
              'm-2 rounded-lg border-2 border-gray-100 p-1 text-2xl no-underline transition-all sm:px-3 sm:py-2',
              'hover:bg-gray-100'
            )}
          >
            {year}
          </Link>
        ))}
      </div>
    </PageWrapper>
  )
}

export default TwilPage
