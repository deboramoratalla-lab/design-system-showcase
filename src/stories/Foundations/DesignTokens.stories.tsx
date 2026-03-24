import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { Link2 } from 'lucide-react'
import '../Documentation/DocsPages.css'
import { DocsPager } from '../Documentation/DocsPager'
import tokensRaw from '../../../design-tokens/tokens.json?raw'

type JsonValue = string | number | boolean | null | JsonArray | JsonObject
type JsonArray = JsonValue[]
type JsonObject = { [k: string]: JsonValue }

type TokenLeaf = {
  path: string
  type: string
  value: string
}

type TokenScope = 'all' | string
type TokenButtonVariant = 'primary' | 'secondary' | 'tertiary'

const tokensData = JSON.parse(tokensRaw) as JsonObject

const toLeafValue = (value: JsonValue): string => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }
  return JSON.stringify(value)
}

const flattenTokens = (node: JsonValue, currentPath: string[] = []): TokenLeaf[] => {
  if (!node || typeof node !== 'object' || Array.isArray(node)) return []

  const record = node as Record<string, JsonValue>
  if ('value' in record) {
    return [
      {
        path: currentPath.join('.'),
        type: typeof record.type === 'string' ? record.type : 'unknown',
        value: toLeafValue(record.value),
      },
    ]
  }

  return Object.entries(record).flatMap(([key, child]) => flattenTokens(child, [...currentPath, key]))
}

const foundationsObject: JsonObject = {
  core: (tokensData.core as JsonObject | undefined) ?? {},
  semantic: (tokensData.semantic as JsonObject | undefined) ?? {},
}

const downloadJson = (name: string, data: JsonObject): void => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = name
  link.click()
  URL.revokeObjectURL(url)
}

const allFoundationRows = flattenTokens(foundationsObject)
const tokenValueMap = new Map(allFoundationRows.map((row) => [row.path, row.value]))

const resolveTokenValue = (value: string, depth = 0): string => {
  if (depth > 8) return value
  const match = value.match(/^\{(.+)\}$/)
  if (!match) return value
  const ref = tokenValueMap.get(match[1])
  if (!ref) return value
  return resolveTokenValue(ref, depth + 1)
}

const isColorValue = (value: string): boolean =>
  /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value) ||
  /^rgb\(/i.test(value) ||
  /^hsl\(/i.test(value)

const toNumber = (value: string): number | null => {
  const normalized = resolveTokenValue(value).replace('px', '').trim()
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

const foundationCategories = Array.from(
  new Set(
    allFoundationRows
      .map((row) => row.path.split('.')[1])
      .filter((segment): segment is string => Boolean(segment)),
  ),
).sort((a, b) => a.localeCompare(b))

const toTitle = (value: string): string =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const inferDescription = (path: string): string => {
  if (path.includes('.color.')) return 'Color token for UI surfaces, text, actions, or feedback.'
  if (path.includes('.font-family.')) return 'Defines the font family used by the system.'
  if (path.includes('.font-size.')) return 'Defines text size for hierarchy and readability.'
  if (path.includes('.font-weight.')) return 'Defines emphasis level from regular to bold.'
  if (path.includes('.line-height.')) return 'Controls vertical rhythm between text lines.'
  if (path.includes('.letter-spacing.')) return 'Controls horizontal spacing between characters.'
  if (path.includes('.radius.')) return 'Defines corner roundness for UI elements.'
  if (path.includes('.border.') || path.includes('.stroke.')) return 'Defines border style, width, and contrast.'
  return 'Foundation token used across layout and visual consistency.'
}

const getCategoryFromPath = (path: string): string => path.split('.')[1] ?? 'misc'

function TokenButton({
  variant = 'secondary',
  leadingIcon,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TokenButtonVariant
  leadingIcon?: ReactNode
}) {
  return (
    <button
      type="button"
      data-variant={variant}
      className={['tokens-library-ui-btn', className].filter(Boolean).join(' ')}
      {...props}
    >
      {leadingIcon ? <span className="tokens-library-ui-btn__icon" aria-hidden>{leadingIcon}</span> : null}
      <span>{children}</span>
    </button>
  )
}

const renderPreview = (row: TokenLeaf) => {
  const resolved = resolveTokenValue(row.value)

  if (row.type === 'color' || row.path.includes('.color.')) {
    const color = isColorValue(resolved) ? resolved : '#e9f0f2'
    return (
      <span className="tokens-library-preview-color-wrap">
        <span className="tokens-library-preview-color" style={{ background: color }} />
        {!isColorValue(resolved) ? <span className="tokens-library-preview-fallback">ref</span> : null}
      </span>
    )
  }

  if (row.path.includes('.typography.')) {
    const text = row.path.includes('.font-family.') ? 'Surt / Gustavo' : 'Aa Sample'
    const fontWeight = row.path.includes('.font-weight.') && Number.isFinite(Number(row.value)) ? Number(row.value) : 400
    const fontSize = row.path.includes('.font-size.') && Number.isFinite(Number(row.value)) ? `${Math.min(Number(row.value), 22)}px` : '16px'
    return (
      <span
        className="tokens-library-preview-typo"
        style={{
          fontWeight,
          fontSize,
        }}
      >
        {text}
      </span>
    )
  }

  if (row.path.includes('.spacing.')) {
    const n = toNumber(row.value)
    return (
      <span className="tokens-library-preview-space-wrap">
        <span className="tokens-library-preview-space" style={{ width: `${Math.max(8, Math.min((n ?? 0) * 3, 120))}px` }} />
      </span>
    )
  }

  if (row.path.includes('.breakpoint.')) {
    const n = toNumber(row.value)
    return (
      <span className="tokens-library-preview-breakpoint">
        <span style={{ width: `${Math.max(14, Math.min(((n ?? 320) / 560) * 120, 120))}px` }} />
      </span>
    )
  }

  if (row.path.includes('.opacity.')) {
    const n = toNumber(row.value)
    const opacity = n !== null ? Math.max(0.06, Math.min(1, n > 1 ? n / 100 : n)) : 1
    return <span className="tokens-library-preview-opacity" style={{ opacity }} />
  }

  if (row.path.includes('.radius.')) {
    const n = toNumber(row.value)
    return <span className="tokens-library-preview-radius" style={{ borderRadius: `${Math.max(0, Math.min(n ?? 0, 16))}px` }} />
  }

  if (row.path.includes('.border.')) {
    const n = toNumber(row.value)
    return <span className="tokens-library-preview-border" style={{ borderWidth: `${Math.max(1, Math.min(n ?? 1, 4))}px` }} />
  }

  return <span className="tokens-library-preview-generic">•</span>
}

const meta: Meta = {
  title: 'Foundations/Design Tokens',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const TokenIndex: Story = {
  render: () => <DesignTokensLibrary />,
}

function DesignTokensLibrary() {
  const [scope, setScope] = useState<TokenScope>('all')
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const flat = allFoundationRows
    const byScope = scope === 'all' ? flat : flat.filter((row) => row.path.split('.')[1] === scope)
    if (!query.trim()) return byScope
    const q = query.trim().toLowerCase()
    return byScope.filter((row) => row.path.toLowerCase().includes(q) || row.value.toLowerCase().includes(q))
  }, [query, scope])

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: allFoundationRows.length }
    foundationCategories.forEach((category) => {
      map[category] = allFoundationRows.filter((row) => row.path.split('.')[1] === category).length
    })
    return map
  }, [])

  const rowsWithAnchors = useMemo(() => {
    const seen = new Set<string>()

    return rows.map((row) => {
      const category = getCategoryFromPath(row.path)
      const isFirstInCategory = !seen.has(category)

      if (isFirstInCategory) seen.add(category)

      return {
        ...row,
        category,
        anchorId: isFirstInCategory ? `tokens-row-${category}` : undefined,
      }
    })
  }, [rows])

  return (
    <section className="docs-page tokens-library-page">
      <header className="docs-hero">
        <h1 className="docs-title">Design Tokens Library</h1>
        <p className="docs-copy">
          Complete token inventory with direct JSON downloads. Filter by layer and search by token
          path or value.
        </p>
      </header>

      <section className="tokens-library-downloads">
        {[{ key: 'all', label: 'All Foundations', file: 'tokens-foundations-all.json' }, ...foundationCategories.map((category) => ({ key: category, label: toTitle(category), file: `tokens-foundations-${category}.json` }))].map((item) => {
          const count = counts[item.key] ?? 0

          return (
            <article key={item.key} className="tokens-library-download-card">
              <div>
                <h3>{item.label}</h3>
                <p>{count} tokens</p>
              </div>
              <TokenButton
                type="button"
                onClick={() => {
                  if (item.key === 'all') {
                    downloadJson(item.file, foundationsObject)
                    return
                  }

                  const filteredRows = flattenTokens(foundationsObject).filter((row) =>
                    row.path.split('.')[1] === item.key,
                  )
                  downloadJson(item.file, { tokens: filteredRows })
                }}
                className="tokens-library-download-btn"
                variant="tertiary"
                leadingIcon={<Link2 />}
              >
                Download JSON
              </TokenButton>
            </article>
          )
        })}
      </section>

      <section className="tokens-library-controls">
        <div className="tokens-library-tabs">
          <TokenButton
            type="button"
            variant={scope === 'all' ? 'primary' : 'secondary'}
            onClick={() => setScope('all')}
            className="tokens-library-filter-btn"
          >
            All
          </TokenButton>
          {foundationCategories.map((category) => (
            <TokenButton
              key={category}
              type="button"
              variant={scope === category ? 'primary' : 'secondary'}
              onClick={() => setScope(category)}
              className="tokens-library-filter-btn"
            >
              {toTitle(category)}
            </TokenButton>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search token path or value..."
          className="tokens-library-search"
        />
      </section>

      <section className="tokens-library-table-wrap">
        <table className="tokens-library-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Preview</th>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rowsWithAnchors.map((row) => (
              <tr
                key={row.path}
                id={row.anchorId}
                data-token-category={row.category}
              >
                <td>
                  <code>{row.path}</code>
                </td>
                <td>{renderPreview(row)}</td>
                <td>
                  <code>{resolveTokenValue(row.value)}</code>
                </td>
                <td>{inferDescription(row.path)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <DocsPager
        prevHref="?path=/story/welcome-changelog--updates"
        prevLabel="Welcome / Changelog"
        nextHref="?path=/story/foundations-color-primitives--color-primitives"
        nextLabel="Foundations / Color Primitives"
      />
    </section>
  )
}
