'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface RevealBlockProps {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  style?: CSSProperties
}

export default function RevealBlock({
  children,
  className = '',
  delay = 0,
  style,
}: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${delay ? `d${delay}` : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}