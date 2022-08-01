import { GetStaticProps } from 'next'
import type { ReactElement } from 'react'

import { PageTitle } from '@/components'
import type { ReleaseNote } from '@/libs'
import { getChangelogData } from '@/libs'

const ChangelogPage = ({
  changelog,
}: {
  changelog: ReleaseNote
}): ReactElement => {
  return (
    <div>
      <PageTitle title="Changelog" subTitle="Releases notes" />
      <div className="flow-root mt-20">
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
                        className={`h-6 w-6 ml-[5px] mt-1 border-2 bg-white rounded-full ring-2 ${
                          index === 0 ? 'border-[#047857]' : 'border-gray-200'
                        } ring-white flex items-center justify-center`}
                      >
                        {index === 0 ? (
                          <span className="flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#047857]"></span>
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#047857] opacity-75"></span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-lg">
                        <h2 className="font-medium mt-0">
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline"
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
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const changelog = await getChangelogData()

  return {
    props: { changelog },
  }
}

export default ChangelogPage
