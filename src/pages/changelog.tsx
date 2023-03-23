import type { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import type { ReleaseNote } from '@/libs/notion'
import { getChangelogData } from '@/libs/notion'

import { PageWrapper } from '../components/PageWrapper'

const ChangelogPage = ({
  changelog,
}: {
  changelog: ReleaseNote
}): ReactElement => {
  return (
    <PageWrapper title="Changelog" subTitle="Releases notes">
      <div className="mt-20 flow-root">
        <div role="list" className="-mb-8">
          {changelog.map(({ title, description, date, url }, index) => {
            return (
              <div className="relative pb-8" key={title} role="listitem">
                {index !== changelog.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-1 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div
                        className={`ml-[5px] mt-1 h-6 w-6 rounded-full border-2 bg-white ring-2 ${
                          index === 0 ? 'border-[#047857]' : 'border-gray-200'
                        } flex items-center justify-center ring-white`}
                      >
                        {index === 0 ? (
                          <span className="flex h-2 w-2">
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#047857]"></span>
                            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#047857] opacity-75"></span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-lg">
                        <h2 className="mt-0 font-medium">
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-gradient-to-r from-black to-black bg-[length:100%_1px]	bg-bottom bg-no-repeat"
                          >
                            {title}
                          </a>
                        </h2>
                      </div>
                      <div className="mt-3 text-base">
                        {new Date(date).toLocaleDateString('en', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const changelog = await getChangelogData()

  return {
    props: { changelog },
  }
}

export default ChangelogPage
