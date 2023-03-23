import clsx from 'clsx'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'

import type { Reading, ReadingStatus } from '@/libs/notion'
import { getReadingsData } from '@/libs/notion'
import { readingStatusBadgeBgColor } from '@/utils/readingStatusBadgeBgColor'

import { PageWrapper } from '../components/PageWrapper'

const ReadingsPage = ({
  readings,
}: {
  readings: Array<Reading>
}): ReactElement => {
  const [filterStatus, setFilterStatus] = useState<ReadingStatus | string>('')

  return (
    <PageWrapper title="Readings" subTitle="Books thoughts">
      <div className="mt-20">
        <div className="sticky top-20 flex w-full flex-1 flex-col justify-around bg-white py-6 sm:justify-start md:flex-row">
          <span className="mb-4 md:mb-0 md:mr-4">Filter by status:</span>
          <select
            onChange={(e) => {
              setFilterStatus(e.target.value)
            }}
          >
            <option value="">All</option>
            <option value="read">Read</option>
            <option value="currently-reading">Currently reading</option>
            <option value="to-buy">To buy</option>
            <option value="to-read">To read</option>
          </select>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {readings
            .filter((reading) => {
              if (filterStatus !== '') {
                return reading.status === filterStatus
              }

              return reading
            })
            .map(({ id, image, title, author, status }) => (
              <div
                key={id}
                className="flex flex-col justify-start rounded-md p-3"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`Cover of the book named ${title}`}
                    width={200}
                    height={200}
                    quality={100}
                    className="self-center"
                  />
                ) : (
                  <div className="h-[200px] w-[200px] self-center bg-gray-100" />
                )}
                <div className="mt-2 flex flex-col">
                  <p className="truncate">{title}</p>
                  <span className="text-sm">{author}</span>
                  {filterStatus === '' ? (
                    <span
                      className={clsx(
                        'mt-3 w-fit rounded-sm px-2 text-sm',
                        readingStatusBadgeBgColor(status)
                      )}
                    >
                      {status}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
        </div>
      </div>
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const readings = await getReadingsData()

  return {
    props: { readings },
  }
}

export default ReadingsPage
