import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/layout/Layout'
import { AppContext } from '@/contexts/AppContext'

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
