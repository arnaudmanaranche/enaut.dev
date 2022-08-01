import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import { PageTitle, Quote } from '@/components'
import type { Quotes } from '@/libs'
import { getQuotesData } from '@/libs'

const QuotesPages = ({ quotes }: { quotes: Quotes }): ReactElement => {
  return (
    <>
      <PageTitle title="Quotes" subTitle="Inspirational Words" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {quotes.map(({ url, text }) => (
          <Quote key={url} url={url} text={text} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const quotes = await getQuotesData()

  return {
    props: { quotes },
  }
}

export default QuotesPages
