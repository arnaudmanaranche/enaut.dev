import type { NextPage } from 'next'
import Link from 'next/link'

import { NowBlock } from '@/components/NowBlock'

const Home: NextPage = () => (
  <div className="text-lg leading-8">
    <h1 className="text-6xl font-bold">Hello.</h1>
    <p className="my-4">
      I&apos;m Arnaud. I&apos;m a french frontend engineer.
    </p>
    <p>
      Right now I&apos;m working at&nbsp;
      <Link
        href="https://ornikar.com/"
        className="text-[#4c34e0] hover:bg-gradient-to-r from-[#4c34e0] to-[#4c34e0] bg-bottom	bg-[length:100%_1px] bg-no-repeat"
        target="_blank"
        rel="noreferrer noopener"
      >
        Ornikar
      </Link>
      &nbsp;designing & building the future of the car insurance. Before that I
      worked at{' '}
      <Link
        href="https://www.origins-digital.com/"
        target="_blank"
        className="text-[#ff680a] hover:bg-gradient-to-r from-[#ff680a] to-[#ff680a] bg-bottom	bg-[length:100%_1px] bg-no-repeat"
        rel="noreferrer noopener"
      >
        Origins Digital
      </Link>
      , a sports digital agency.
    </p>
    <section className="mt-14">
      <h2 className="text-3xl font-bold mb-4 flex flex-col md:flex-row items-start md:items-baseline">
        What I&apos;m doing these days
        <span className="text-sm md:ml-4 text-primary mt-2 md:mt-0">
          last update: 02/17/2022
        </span>
      </h2>
      <div className="md:ml-6 space-y-7" role="list">
        <NowBlock>
          <NowBlock.Title>
            <>
              Building{` `}
              <a
                href="https://lol-power-ranking.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                LoL Power Ranking
              </a>
              : a dedicated platform to create and share your own rankings of
              yours favorites League of Legends tournaments.
            </>
          </NowBlock.Title>
        </NowBlock>
        <NowBlock>
          <NowBlock.Title>
            <>
              Training for the next{` `}
              <a
                href="https://www.marathonbiarritz.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                Marathon of Biarritz
              </a>
              .
            </>
          </NowBlock.Title>
          <NowBlock.Description>
            <>
              <p>
                I publish all my trainings on{' '}
                <a
                  href="https://www.strava.com/athletes/103494464"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline"
                >
                  {` `}
                  Strava
                </a>
                .
              </p>
            </>
          </NowBlock.Description>
        </NowBlock>
      </div>
    </section>
  </div>
)

export default Home
