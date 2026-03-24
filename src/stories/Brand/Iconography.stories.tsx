import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { iconLibraryManifest } from './iconLibraryManifest'
import './BrandDocs.css'
import { DocsPager } from '../Documentation/DocsPager'

const meta: Meta = {
  title: 'Brand/Iconography',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

type IconCategory =
  | 'all'
  | 'navigation'
  | 'actions'
  | 'status'
  | 'media'
  | 'communication'
  | 'object'
  | 'custom'

const sizeScale = [
  { label: 'Small', px: 16, usage: 'Dense rows and helper UI', token: 'icon.size.sm' },
  { label: 'Default', px: 20, usage: 'Buttons, inputs, navigation', token: 'icon.size.md' },
  { label: 'Large', px: 24, usage: 'Highlights only', token: 'icon.size.lg' },
]

const categoryOptions: Array<{ key: IconCategory; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'navigation', label: 'Navigation' },
  { key: 'actions', label: 'Actions' },
  { key: 'status', label: 'Status' },
  { key: 'media', label: 'Media' },
  { key: 'communication', label: 'Communication' },
  { key: 'object', label: 'Objects' },
  { key: 'custom', label: 'Custom' },
]

function categorizeIcon(name: string, original: string): IconCategory {
  const n = name.toLowerCase()
  const o = original.toLowerCase()
  const customHint =
    o.includes('sparkle/') ||
    o.includes('sparkle 3/') ||
    n.includes('thin') ||
    n.includes('cup-star') ||
    n.includes('goal') ||
    n.includes('tennis') ||
    n.includes('medal') ||
    n.includes('principal-logo') ||
    n.includes('text-formatting') ||
    n.includes('path')

  if (customHint) return 'custom'
  if (n.includes('arrow') || n.includes('chevron') || n.includes('corner') || n.includes('move')) {
    return 'navigation'
  }
  if (
    n.includes('check') ||
    n.includes('alert') ||
    n.includes('info') ||
    n.includes('help') ||
    n.includes('x-circle') ||
    n.includes('minus-circle') ||
    n.includes('plus-circle')
  ) {
    return 'status'
  }
  if (
    n.includes('play') ||
    n.includes('pause') ||
    n.includes('volume') ||
    n.includes('mic') ||
    n.includes('camera') ||
    n.includes('video') ||
    n.includes('image') ||
    n.includes('music')
  ) {
    return 'media'
  }
  if (
    n.includes('mail') ||
    n.includes('message') ||
    n.includes('phone') ||
    n.includes('send') ||
    n.includes('at-sign') ||
    n.includes('share')
  ) {
    return 'communication'
  }
  if (
    n.includes('plus') ||
    n.includes('minus') ||
    n.includes('download') ||
    n.includes('upload') ||
    n.includes('edit') ||
    n.includes('delete') ||
    n.includes('trash') ||
    n.includes('filter') ||
    n.includes('save') ||
    n.includes('refresh') ||
    n.includes('rotate') ||
    n.includes('copy') ||
    n.includes('external-link')
  ) {
    return 'actions'
  }
  return 'object'
}

function IconographyPage() {
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<IconCategory>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return iconLibraryManifest.filter((item) => {
      const category = categorizeIcon(item.name, item.original)
      const matchesCategory = categoryFilter === 'all' ? true : category === categoryFilter
      const matchesQuery = q ? item.name.includes(q) || item.original.toLowerCase().includes(q) : true
      return matchesCategory && matchesQuery
    })
  }, [query, categoryFilter])

  const sample =
    filtered.find((item) => item.src.endsWith('.svg')) ??
    iconLibraryManifest.find((item) => item.src.endsWith('.svg')) ??
    filtered[0]

  return (
    <div className="brand-page icons-overview-page">
      <header className="brand-hero icons-overview-hero">
        <h1 className="brand-title">Icons</h1>
        <p className="brand-subtitle">
          TAP icon source library imported from your ZIP. This page documents real usage sizes and
          exposes the full icon set for product implementation.
        </p>
      </header>

      <section className="icons-overview-section">
        <h2>Icon library</h2>
        <p>{iconLibraryManifest.length} total icons</p>
        <div className="icons-overview-filter-row">
          {categoryOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className={categoryFilter === option.key ? 'icons-filter-btn is-active' : 'icons-filter-btn'}
              onClick={() => setCategoryFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="icons-overview-search-wrap">
          <input
            type="search"
            placeholder="Search icon"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="icons-overview-library-grid">
          {filtered.map((icon) => (
            <div key={icon.src} className="icons-overview-library-item icons-overview-library-item-tight">
              <img src={icon.src} alt={icon.name} width={20} height={20} />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="icons-overview-section">
        <h2>Sizes</h2>
        <p>Use 20px by default. 16px for dense contexts. 24px only for emphasis.</p>

        <div className="icons-overview-size-demo">
          {sizeScale.map((size) => (
            <article key={size.label} className="icons-overview-size-card icons-overview-size-card-tight">
              {sample ? <img src={sample.src} alt={`${sample.name} ${size.px}px`} width={size.px} height={size.px} /> : null}
              <strong>{size.label}</strong>
              <span>{size.px}px</span>
              <span>{size.usage}</span>
              <code>{size.token}</code>
            </article>
          ))}
        </div>
      </section>
    

      <DocsPager
        prevHref="?path=/story/brand-typography--typography"
        prevLabel="Brand / Typography"
        nextHref="?path=/story/brand-photography--photography"
        nextLabel="Brand / Photography"
      />
</div>
  )
}

export const Iconography: Story = {
  render: () => <IconographyPage />,
}
