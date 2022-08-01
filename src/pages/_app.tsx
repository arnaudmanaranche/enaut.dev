import type { AppProps } from 'next/app'

import { AppContext } from '@/contexts/AppContext'
import { Layout } from '@/layout/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  )
}

export default MyApp
