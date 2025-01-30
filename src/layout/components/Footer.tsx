import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'

const SOCIALS_LINKS: { name: string; href: string; icon: ReactElement }[] = [
  {
    name: 'bluesky',
    href: 'https://bsky.app/profile/enaut.bsky.social',
    icon: (
      <svg
        height={24}
        width={24}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Bluesky</title>
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
      </svg>
    ),
  },
  {
    name: 'github',
    href: 'https://github.com/arnaudmanaranche',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        fill="currentColor"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'x',
    href: 'https://x.com/0xGorri',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        fill="currentColor"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
]

export function Footer(): ReactNode {
  return (
    <div className="sticky bottom-0 -mt-[64px] flex min-h-[300px] items-center justify-center space-y-10 overflow-hidden bg-[#343131] pb-10 pt-[100px] md:space-y-0">
      <div className="space-y-4 px-[40px]">
        <p className="text-xl">Contact</p>
        <div className="flex space-x-4">
          <Link
            className="transition-colors hover:text-[#81ACEC]"
            href="mailto:hello@enaut.dev"
          >
            hello@enaut.dev
          </Link>
        </div>
      </div>
      <div className="space-y-4 px-[40px]">
        <p className="text-xl">Social</p>
        <div className="flex space-x-4">
          {SOCIALS_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="transition-colors hover:text-[#81ACEC]"
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
