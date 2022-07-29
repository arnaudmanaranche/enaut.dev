import { ContactMe } from '@/components/ContactMe'
import NowPlaying from '@/components/NowPlaying'
import { getCurrentFullYear } from '@/utils/date'
import { footerLinks, socialLinks } from '@/utils/links'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

export const Footer = (): ReactElement => {
  const router = useRouter()

  return (
    <footer className="border-t mb-20 md:mb-8 pt-4 text-center">
      <div className="md:flex mb-10 md:space-x-40 justify-between hidden">
        <div className="flex flex-col space-y-2 text-left">
          {socialLinks.map(({ path, label }) => (
            <Link key={label} href={path}>
              <a
                target="_blank"
                className="flex items-center hover:underline"
                rel="noreferrer noopener"
              >
                {label}
                <ExternalLinkIcon
                  className="ml-1 text-opacity-40 text-black"
                  color="#212121"
                  width={16}
                  height={16}
                />
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 text-left">
          {footerLinks.map(({ path, label }) => {
            const isLinkActive = router.pathname === path
            return (
              <Link href={path ?? '#!'} key={label}>
                <a
                  tabIndex={path ? 0 : -1}
                  className={clsx(
                    isLinkActive && 'text-primary',
                    !path && 'cursor-not-allowed text-gray-500'
                  )}
                >
                  {label}
                </a>
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
          >
            Vercel
          </a>
        </span>
      </div>
    </footer>
  )
}
