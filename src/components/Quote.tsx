import type { ReactElement } from 'react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { getQuotesData } from '@/libs/notion'
import { copyTextToClipboard } from '@/utils/copyTextToClipboard'

const COPY_TO_CLIPBOARD = 'Copy to clipboard'
const COPIED_TO_CLIPBOARD = 'Copied'

export const Quote = ({
  url,
  text,
}: {
  url: string
  text: string
}): ReactElement => {
  const [copyButtonContent, setCopyButtonContent] = useState(COPY_TO_CLIPBOARD)

  const handleCopyToClipboard = () => {
    copyTextToClipboard(text)
    setCopyButtonContent(COPIED_TO_CLIPBOARD)
    setTimeout(() => {
      setCopyButtonContent(COPY_TO_CLIPBOARD)
    }, 1200)
  }

  return (
    <div className="flex flex-col items-start">
      <p className="customMark relative select-all italic">“{text}”</p>
      <div className="mt-6 flex space-x-2">
        <Button to={url}>Source</Button>
        <Button onClick={handleCopyToClipboard}>{copyButtonContent}</Button>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const quotes = await getQuotesData()

  return {
    props: { quotes },
  }
}
