import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { getAllAppSlugs, getAppConfig } from './apps.config'

interface PrivacyPageProps {
  params: Promise<{ app_name: string }>
}

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({
    app_name: slug,
  }))
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { app_name } = await params
  const appConfig = getAppConfig(app_name)

  if (!appConfig) {
    return {
      title: 'Privacy Policy',
    }
  }

  return {
    title: `Privacy Policy - ${appConfig.name}`,
    description: `Privacy policy for ${appConfig.name} app`,
  }
}

function Container({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="mx-auto my-12 max-w-2xl rounded-xl bg-[#ffffff0b] p-8 shadow-lg ring-1 ring-[#ffffff0b] backdrop-blur-md">
      {children}
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}): ReactNode {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-lg text-gray-300">{children}</p>
    </section>
  )
}

export default async function PrivacyPage({
  params,
}: PrivacyPageProps): Promise<ReactNode> {
  const { app_name } = await params
  const appConfig = getAppConfig(app_name)

  if (!appConfig) {
    notFound()
  }

  const { name, accentColor, email, sections } = appConfig

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#23243a] to-[#181a20] px-4 py-12">
      <Container>
        <h1 className="mb-6 text-4xl font-bold" style={{ color: accentColor }}>
          {name}
        </h1>
        <h2 className="mb-8 text-2xl font-semibold text-white/80">
          Privacy Policy
        </h2>

        {sections.map((section, index) => (
          <Section key={index} title={section.title}>
            {section.content.replace(/{appName}/g, name)}
          </Section>
        ))}

        <section className="mb-6">
          <h3 className="mb-2 text-xl font-semibold text-white">Contact Us</h3>
          <p className="text-lg text-gray-300">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Contact Information:
            <br />
            Email: <span className="font-semibold">{email}</span>
          </p>
        </section>
      </Container>
    </div>
  )
}
