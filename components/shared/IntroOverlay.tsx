'use client'

import { useEffect, useState } from 'react'

type IntroOverlayProps = {
  durationMs?: number
  onDone?: () => void
}

const IntroOverlay = ({ durationMs = 2000, onDone }: IntroOverlayProps) => {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setMounted(true)
    const hideTime = Math.max(0, durationMs - 500)
    const t1 = setTimeout(() => setMounted(false), hideTime)
    const t2 = setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, durationMs)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [durationMs, onDone])

  if (!visible) return null

  return (
    <div
      className={
        'fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-black/90 transition-opacity duration-500 ' +
        (mounted ? 'opacity-100' : 'opacity-0')
      }
      aria-hidden>
      <div className="text-center" dir="rtl">
        <div
          className={
            'mx-auto max-w-[90vw] text-2xl font-semibold tracking-tight text-white transition-all duration-500 ease-out sm:text-3xl lg:text-5xl ' +
            (mounted ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0')
          }>
          سفارت کره تقدیم می‌کند
        </div>
        <div
          className={
            'mt-4 text-base font-normal text-gray-300 transition-all duration-500 ease-out sm:text-lg lg:text-2xl ' +
            (mounted ? 'translate-y-0 scale-100 opacity-100 delay-100' : 'translate-y-2 scale-95 opacity-0')
          }>
          به مدرن‌ترین شکل ممکن
        </div>
      </div>
    </div>
  )
}

export default IntroOverlay
