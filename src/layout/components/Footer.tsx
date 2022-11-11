import { LinkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

import { ContactMe, NowPlaying } from '@/components'
import { footerLinks, getCurrentFullYear, socialLinks } from '@/utils'

export const Footer = (): ReactElement => {
  const router = useRouter()

  return (
    <footer className="border-t mb-20 md:mb-8 pt-4 text-center">
      <div className="md:flex mb-10 md:space-x-40 justify-between hidden">
        <div className="flex flex-col space-y-2 text-left">
          {socialLinks.map(({ path, label }) => (
            <Link
              key={label}
              href={path}
              target="_blank"
              className="flex items-center hover:underline"
              rel="noreferrer noopener"
            >
              {label}
              <LinkIcon
                className="ml-1 text-opacity-40 text-black"
                color="#212121"
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 text-left">
          {footerLinks.map(({ path, label }) => {
            const isLinkActive = router.pathname === path
            return (
              <Link
                href={path ?? '#!'}
                key={label}
                scroll={false}
                tabIndex={path ? 0 : -1}
                className={clsx(
                  isLinkActive && 'text-primary',
                  !path && 'cursor-not-allowed text-gray-500'
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col space-y-2 text-left justify-between">
          <ContactMe />
        </div>
      </div>
      <NowPlaying />
      <div className="flex justify-between flex-col space-y-4 md:flex-row md:space-y-0 text-sm">
        <span>© Arnaud Manaranche {getCurrentFullYear}</span>
        <span>
          ▲ Powered by{' '}
          <a
            href="https://vercel.com/dashboard"
            className="hover:underline"
            rel="noreferrer noopener"
            target="_blank"
          >
            Vercel
          </a>
        </span>
      </div>
    </footer>
  )
}
