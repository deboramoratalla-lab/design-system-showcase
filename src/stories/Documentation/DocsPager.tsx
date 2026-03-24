import type { MouseEvent, ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './DocsPager.css'

type DocsPagerProps = {
  nextHref: string
  nextLabel: string
  nextEyebrow?: string
  prevHref?: string
  prevLabel?: string
  prevEyebrow?: string
  children?: ReactNode
}

const parseNavLabel = (label: string, fallbackEyebrow: string) => {
  const parts = label.split('/').map((part) => part.trim()).filter(Boolean)
  if (parts.length > 1) {
    return {
      eyebrow: parts.slice(0, -1).join(' / '),
      title: parts[parts.length - 1],
    }
  }
  return { eyebrow: fallbackEyebrow, title: label }
}

const toManagerPath = (href: string) => {
  if (href.startsWith('?path=')) return `/${href}`
  if (href.startsWith('/?path=')) return href
  return href
}

const goToStory = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const targetHref = toManagerPath(href)
  const targetWindow = window.parent ?? window
  targetWindow.location.assign(targetHref)
}

export function DocsPager({
  nextHref,
  nextLabel,
  nextEyebrow = 'Next',
  prevHref,
  prevLabel,
  prevEyebrow = 'Back',
  children,
}: DocsPagerProps) {
  const nextNav = parseNavLabel(nextLabel, nextEyebrow)
  const prevNav = parseNavLabel(prevLabel ?? 'Back', prevEyebrow)

  const goBack = (event: MouseEvent<HTMLAnchorElement>) => {
    if (prevHref) {
      goToStory(prevHref)(event)
      return
    }
    event.preventDefault()
    const targetWindow = window.parent ?? window
    targetWindow.history.back()
  }

  return (
    <footer className="docs-pager" aria-label="Page navigation">
      {children ? <div className="docs-pager-note">{children}</div> : null}
      <div className="docs-pager-row docs-pager-row--dual">
        <a
          className="docs-pager-card docs-pager-card-prev"
          href={prevHref ? toManagerPath(prevHref) : '#'}
          onClick={goBack}
        >
          <span className="docs-pager-next-meta">{prevNav.eyebrow}</span>
          <strong>{prevNav.title}</strong>
          <ArrowLeft aria-hidden="true" className="docs-pager-arrow docs-pager-arrow-prev" size={22} strokeWidth={1.8} />
        </a>

        <a
          className="docs-pager-card docs-pager-card-next"
          href={toManagerPath(nextHref)}
          onClick={goToStory(nextHref)}
        >
          <span className="docs-pager-next-meta">{nextNav.eyebrow}</span>
          <strong>{nextNav.title}</strong>
          <ArrowRight aria-hidden="true" className="docs-pager-arrow" size={22} strokeWidth={1.8} />
        </a>
      </div>
    </footer>
  )
}
