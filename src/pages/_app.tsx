import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '@/layout/Layout'

import '@9gustin/react-notion-render/dist/index.css'
import '../styles/globals.css'

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
