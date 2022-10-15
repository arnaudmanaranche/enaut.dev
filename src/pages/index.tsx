import type { NextPage } from 'next'
import Link from 'next/link'

import { NowBlock } from '@/components'

const Home: NextPage = () => (
  <div className="text-lg leading-8">
    <h1 className="text-6xl font-bold">Hello.</h1>
    <p className="my-4">
      I&apos;m Arnaud. I&apos;m a french frontend engineer.
    </p>
    <p>
      Right now I&apos;m working at&nbsp;
      <Link href="https://ornikar.com/">
        <a
          className="text-[#4c34e0] hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ornikar
        </a>
      </Link>
      &nbsp;designing & building the future of the car insurance. Before that I
      worked at{' '}
      <Link href="https://www.origins-digital.com/">
        <a
          target="_blank"
          className="text-[#ff680a] hover:underline"
          rel="noreferrer noopener"
        >
          Origins Digital
        </a>
      </Link>
      , a sports digital agency.
    </p>
    <section className="mt-14">
      <h2 className="text-3xl font-bold mb-4 flex flex-col md:flex-row items-start md:items-baseline">
        What I&apos;m doing these days
        <span className="text-sm md:ml-4 text-primary mt-2 md:mt-0">
          last update: 15/10/2022
        </span>
      </h2>
      <div className="md:ml-6 space-y-7" role="list">
        <NowBlock>
          <NowBlock.Title>
            <>
              Building the new version of{` `}
              <a
                href="https://lol-power-ranking.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                LoL Power Ranking
              </a>
              .
            </>
          </NowBlock.Title>
          <NowBlock.Description>
            Initially, it was a simple Next.js application. But I wanted to
            build some backend skills so I decided to rebuild the API with
            Nestjs framework.
          </NowBlock.Description>
        </NowBlock>
        <NowBlock>
          <NowBlock.Title>
            <>
              Reading Vitalik Buterin&apos;s book:{` `}
              <a
                href="https://proofofstake.gitcoin.co/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                &quot;Proof of Stake: The Making of Ethereum and the Philosophy
                of Blockchains&quot;
              </a>
              .
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
                International Marathon of Biarritz
              </a>
              ,{` `}
              which is plan on 05/07/2023.
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
