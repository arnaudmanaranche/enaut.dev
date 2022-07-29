import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="text-lg leading-8">
      <h1 className="text-6xl font-bold">Hello.</h1>
      <br />
      <p>I&apos;m Arnaud. I&apos;m a french frontend developer.</p>
      <br />
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
        &nbsp;designing & building the future of the car insurance. Before that
        I worked at{' '}
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
    </div>
  )
}

export default Home
