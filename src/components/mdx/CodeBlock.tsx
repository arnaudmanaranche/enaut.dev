import type { DropedProps } from '@9gustin/react-notion-render/dist/hoc/withContentValidation'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useCallback, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { copyTextToClipboard } from '@/utils/copyTextToClipboard'

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
}

export const CodeBlock = ({ plainText, language }: DropedProps) => {
  const [copying, setCopying] = useState(0)

  const onCopy = useCallback(() => {
    copyTextToClipboard(plainText)
    setCopying((c) => c + 1)
    setTimeout(() => {
      setCopying((c) => c - 1)
    }, 2000)
  }, [plainText])

  return (
    <div className="group relative">
      <button
        tabIndex={0}
        className="copyButton absolute right-2 top-2 group-hover:opacity-100"
        onClick={onCopy}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onCopy()
          }
        }}
      >
        <MotionConfig transition={{ duration: 0.15 }}>
          <AnimatePresence initial={false} mode="wait">
            {copying ? (
              <motion.div
                animate="visible"
                exit="hidden"
                initial="hidden"
                key="check"
                variants={variants}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </motion.div>
            ) : (
              <motion.div
                animate="visible"
                exit="hidden"
                initial="hidden"
                key="copy"
                variants={variants}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </button>
      <SyntaxHighlighter style={dark} language={language}>
        {plainText}
      </SyntaxHighlighter>
    </div>
  )
}
