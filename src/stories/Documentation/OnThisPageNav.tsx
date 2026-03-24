import { useEffect, useMemo, useState } from 'react'

type OnThisPageNavProps = {
  storyId: string
}

type HeadingItem = {
  id: string
  text: string
  level: 2 | 3
}

const toTitle = (value: string): string =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export function OnThisPageNav({ storyId }: OnThisPageNavProps) {
  const [items, setItems] = useState<HeadingItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const selector = [
      '.docs-page h2',
      '.docs-page h3',
      '.brand-page h2',
      '.brand-page h3',
      '.welcome-page h2',
      '.welcome-page h3',
    ].join(',')

    const buildDefaultItems = (): { targets: HTMLElement[]; normalized: HeadingItem[] } => {
      const headings = Array.from(document.querySelectorAll<HTMLElement>(selector))
        .filter((el) => el.textContent?.trim())

      const normalized = headings.map((el, index) => {
        const base =
          el.id ||
          (el.textContent || '')
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')

        const id = `${base || 'section'}-${index + 1}`
        const level: HeadingItem['level'] = el.tagName.toLowerCase() === 'h3' ? 3 : 2
        el.id = id
        return { id, text: (el.textContent || '').trim(), level }
      })

      return { targets: headings, normalized }
    }

    const buildDesignTokenItems = (): { targets: HTMLElement[]; normalized: HeadingItem[] } => {
      const anchors = Array.from(
        document.querySelectorAll<HTMLElement>('.tokens-library-table tbody tr[id^="tokens-row-"]'),
      )

      const normalized = anchors.map((row) => {
        const rawCategory = row.dataset.tokenCategory || row.id.replace(/^tokens-row-/, '')
        return {
          id: row.id,
          text: toTitle(rawCategory),
          level: 3 as const,
        }
      })

      return { targets: anchors, normalized }
    }

    const useDesignTokenAnchors = storyId === 'foundations-design-tokens--token-index'
    const collected = useDesignTokenAnchors ? buildDesignTokenItems() : buildDefaultItems()
    const targets = collected.targets
    const normalized = collected.normalized

    const frameId = window.requestAnimationFrame(() => {
      setItems(normalized)
      setActiveId(normalized[0]?.id ?? '')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 1] }
    )

    targets.forEach((el) => observer.observe(el))

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [storyId])

  const shouldShow = useMemo(() => items.length >= 2, [items.length])

  if (!shouldShow) return null

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    setActiveId(id)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <aside className="on-this-page" aria-label="On this page">
      <div className="on-this-page-inner">
        <p className="on-this-page-title">On this page</p>
        <ul>
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? 'is-sub' : ''}>
              <button
                type="button"
                className={activeId === item.id ? 'is-active' : ''}
                onClick={() => handleNavigate(item.id)}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
