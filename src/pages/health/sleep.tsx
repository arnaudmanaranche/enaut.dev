import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import { PageWrapper } from '@/components/PageWrapper'
import { getSleepData } from '@/libs/whoop'

interface SleepPageProps {
  sleepData: unknown
}

const SleepPage = ({ sleepData }: SleepPageProps): ReactElement => {
  console.log(sleepData)

  return (
    <PageWrapper title="WIP" subTitle="WIP">
      WIP
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sleepData = await getSleepData()

  return {
    props: { sleepData },
    revalidate: 86400, // 1 day
  }
}

export default SleepPage
