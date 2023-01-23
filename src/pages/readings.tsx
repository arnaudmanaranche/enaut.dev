import clsx from 'clsx'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'

import { PageWrapper } from '@/components'
import type { Reading, ReadingStatus } from '@/libs'
import { getReadingsData } from '@/libs'
import { readingStatusBadgeBgColor } from '@/utils'

const ReadingsPage = ({
  readings,
}: {
  readings: Array<Reading>
}): ReactElement => {
  const [filterStatus, setFilterStatus] = useState<ReadingStatus | string>('')

  return (
    <PageWrapper title="Readings" subTitle="Books thoughts">
      <div className="mt-20">
        <div className="flex flex-col md:flex-row sticky top-20 flex-1 w-full py-6 justify-around sm:justify-start bg-white">
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
                className="flex flex-col justify-start p-3 rounded-md"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={`Cover of the book named ${title}`}
                    width={200}
                    height={200}
                    quality={90}
                    className="self-center"
                    style={{
                      width: 200,
                      height: 200,
                    }}
                  />
                ) : (
                  <div className="bg-gray-100 h-[200px] w-[200px] self-center" />
                )}
                <div className="mt-2 flex flex-col">
                  <p className="truncate">{title}</p>
                  <span className="text-sm">{author}</span>
                  {filterStatus === '' ? (
                    <span
                      className={clsx(
                        'text-sm mt-3 w-fit px-2 rounded-sm',
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
