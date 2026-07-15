import type { Dictionary } from '@/i18n/types'

type MarqueeBandProps = {
  dict: Dictionary
}

export default function MarqueeBand({ dict }: MarqueeBandProps) {
  const doubled = [...dict.marquee.words, ...dict.marquee.words]

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  )
}
