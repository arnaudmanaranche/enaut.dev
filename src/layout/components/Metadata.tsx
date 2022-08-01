import Head from 'next/head'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

import { siteMetadata } from '@/utils'

export const Metadata = (): ReactElement => {
  const router = useRouter()

  return (
    <Head>
      <title>{siteMetadata.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={siteMetadata.description} name="description" />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Braydon Coyer" />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:image" content={siteMetadata.socialBanner} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content="" />
    </Head>
  )
}
