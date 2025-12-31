import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import type { ReactNode } from 'react'

import '../src/styles/globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-manrope',
  display: 'optional',
})

export const metadata: Metadata = {
  title: 'enaut.dev',
  description: 'Privacy policies for enaut.dev apps',
  icons: {
    icon: [
      {
        url: '/favicons/light/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/dark/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/favicons/light/apple-touch-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/dark/apple-touch-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  )
}
