import { motion } from 'framer-motion'
import type { ReactElement } from 'react'

export const Header = (): ReactElement => {
  return (
    <header className="mb-28 mt-20">
      <div className="mx-auto flex items-center justify-between">
        <svg
          width="80"
          height="80"
          viewBox="0 0 242 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M92 316H0L120.5 107L167 188L92 316Z"
            stroke="white"
            strokeWidth="2"
            transition={{
              default: { duration: 1, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={{
              hidden: {
                opacity: 0,
                pathLength: 0,

                fill: 'rgba(255, 255, 255, 0)',
              },
              visible: {
                opacity: 1,
                pathLength: 1,
                fill: 'rgba(255, 255, 255, 1)',
              },
            }}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M168 51.0962L241 2L241 316L168 316L168 51.0962Z"
            stroke="white"
            strokeWidth="2"
            transition={{
              default: { duration: 1, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={{
              hidden: {
                opacity: 0,
                pathLength: 0,
              },
              visible: {
                opacity: 1,
                pathLength: 1,
              },
            }}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>
    </header>
  )
}
