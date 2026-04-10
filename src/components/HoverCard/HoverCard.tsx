import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  href: string
  revenue?: number
  newCustomers?: number
  activeSubs?: number
  chartData?: number[]
  period?: string
}

export function HoverCard({
  children,
  href,
  revenue = 0,
  newCustomers = 0,
  activeSubs = 0,
  chartData = [],
  period = 'Last 28 days',
}: HoverCardProps): ReactNode {
  const displayData =
    chartData.length > 0
      ? chartData
      : [30, 45, 38, 52, 48, 65, 72, 78, 85, 92, 88, 95]
  const maxValue = Math.max(...displayData, 1)

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block"
    >
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-72 -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="relative block overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
          <div className="border-b border-border p-4">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-text-primary">
                  ${revenue}
                </p>
                <p className="text-sm text-text-muted">Revenue</p>
              </div>
              <Image
                src="/revenuecat.svg"
                alt="RevenueCat"
                width={60}
                height={12}
                className="object-contain"
              />
            </div>
            <div className="mt-1 text-xs text-text-muted">{period}</div>
            <div className="mt-3 flex h-16 items-end gap-1">
              {displayData.map((value, i) => (
                <div
                  key={i}
                  className="animate-bar flex-1 rounded-t bg-text-primary/50 group-hover:bg-[#F25A5A]"
                  style={{
                    height: `${(value / maxValue) * 100}%`,
                    animationDelay: `${i * 30}ms`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="p-3 text-center">
              <p className="text-lg font-semibold text-text-primary">
                {newCustomers}
              </p>
              <p className="text-xs text-text-muted">New users</p>
            </div>
            <div className="p-3 text-center">
              <p className="text-lg font-semibold text-text-primary">
                {activeSubs}
              </p>
              <p className="text-xs text-text-muted">Active users</p>
            </div>
          </div>
        </span>
      </span>
    </Link>
  )
}
