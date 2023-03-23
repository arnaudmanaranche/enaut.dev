import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import type { Quotes } from '@/libs/notion'
import { getQuotesData } from '@/libs/notion'

import { PageWrapper } from '../components/PageWrapper'
import { Quote } from '../components/Quote'

const QuotesPages = ({ quotes }: { quotes: Quotes }): ReactElement => {
  return (
    <PageWrapper title="Quotes" subTitle="Inspirational Words">
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        {quotes.map(({ url, text }) => (
          <Quote key={url} url={url} text={text} />
        ))}
      </div>
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const quotes = await getQuotesData()

  return {
    props: { quotes },
  }
}

export default QuotesPages
