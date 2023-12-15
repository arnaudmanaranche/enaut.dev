import { LinkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

import { ContactMe } from '@/components/ContactMe'
import { NowPlaying } from '@/components/NowPlaying'
import { getCurrentFullYear } from '@/utils/date'
import { footerLinks, socialLinks } from '@/utils/links'

export const Footer = (): ReactElement => {
  const router = useRouter()

  return (
    <footer className="border-t pb-20 pt-4 text-center md:pb-8">
      <div className="mb-10 hidden justify-between md:flex md:space-x-40">
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
                className="ml-1 text-black text-opacity-40"
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
        <div className="flex flex-col justify-between space-y-2 text-left">
          <ContactMe />
        </div>
      </div>
      <NowPlaying />
      <div className="flex flex-col justify-between space-y-4 text-sm md:flex-row md:space-y-0">
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
