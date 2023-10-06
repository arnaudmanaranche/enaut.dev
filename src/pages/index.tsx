import type { NextPage } from 'next'
import Link from 'next/link'

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
        className="from-[#4c34e0] to-[#4c34e0] bg-[length:100%_1px] bg-bottom bg-no-repeat	text-[#4c34e0] hover:bg-gradient-to-r"
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
        className="from-[#ff680a] to-[#ff680a] bg-[length:100%_1px] bg-bottom bg-no-repeat	text-[#ff680a] hover:bg-gradient-to-r"
        rel="noreferrer noopener"
      >
        Origins Digital
      </Link>
      , a sports digital agency.
    </p>
  </div>
)

export default Home
