import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import Head from 'next/head'

import { Layout } from '@/layout/Layout'

import '@9gustin/react-notion-render/dist/index.css'
import '../styles/globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-manrope',
  display: 'optional',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicons/light/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicons/dark/favicon.ico"
          media="(prefers-color-scheme: dark)"
        />

        <link
          rel="apple-touch-icon"
          href="/favicons/light/apple-touch-icon.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/dark/apple-touch-icon.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="manifest"
          href="/favicons/dark/manifest.webmanifest"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="manifest"
          href="/favicons/dark/manifest.webmanifest"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <div className={`${manrope.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
