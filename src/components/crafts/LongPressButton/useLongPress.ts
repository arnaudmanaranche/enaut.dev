import { useEffect, useRef, useState } from 'react'

type ClickActionEnum = 'click' | 'longpress'

export interface UseLongPressProps {
  longPressDelay: number
  onLongPressCompleted: () => void
}

export default function useLongPress({
  longPressDelay,
  onLongPressCompleted,
}: UseLongPressProps) {
  const [action, setAction] = useState<ClickActionEnum>()
  const [width, setWidth] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const isLongPress = useRef(false)

  useEffect(() => {
    if (width === 100) {
      const alertTimeout = setTimeout(() => {
        onLongPressCompleted?.()
      }, longPressDelay)
      return () => clearTimeout(alertTimeout)
    }
  }, [width, longPressDelay, onLongPressCompleted])

  function startPressTimer() {
    isLongPress.current = false
    timerRef.current = setTimeout(() => {
      isLongPress.current = true
      setAction('longpress')
      setWidth(100)
    }, longPressDelay)
  }

  function handleOnClick() {
    if (isLongPress.current) return

    setAction('click')
  }

  function handleOnMouseDown() {
    startPressTimer()
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current)
    if (isLongPress.current) {
      setWidth(0)
    }
  }

  function handleOnTouchStart() {
    startPressTimer()
  }

  function handleOnTouchEnd() {
    if (action === 'longpress') return

    clearTimeout(timerRef.current)
    setWidth(0)
  }

  return {
    width,
    onClick: handleOnClick,
    onMouseDown: handleOnMouseDown,
    onMouseUp: handleOnMouseUp,
    onTouchStart: handleOnTouchStart,
    onTouchEnd: handleOnTouchEnd,
  }
}
