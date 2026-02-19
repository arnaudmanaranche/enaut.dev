import type { ReactNode } from 'react'

export default function NotFound(): ReactNode {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#23243a] to-[#181a20] px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-[#ffffff0b] p-8 text-center shadow-lg ring-1 ring-[#ffffff0b] backdrop-blur-md">
        <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
        <p className="text-lg text-gray-300">
          This privacy policy page could not be found.
        </p>
      </div>
    </div>
  )
}
