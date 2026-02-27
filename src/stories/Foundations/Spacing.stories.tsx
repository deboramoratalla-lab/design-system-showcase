import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import '../Documentation/DocsPages.css'
import { spacingScale } from './foundationData'

type SpacingPlaygroundArgs = {
  gapToken: string
  paddingToken: string
  direction: 'vertical' | 'horizontal'
  itemCount: number
  showGuides: boolean
}

const tokenToValue = new Map(spacingScale.map((item) => [item.token, item.value]))
const spacingOptions = spacingScale.map((item) => item.token)

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    gapToken: {
      control: 'select',
      options: spacingOptions,
      description: 'Token used for layout gaps',
    },
    paddingToken: {
      control: 'select',
      options: spacingOptions,
      description: 'Token used for container padding',
    },
    direction: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
      description: 'Preview layout direction',
    },
    itemCount: {
      control: { type: 'range', min: 2, max: 6, step: 1 },
      description: 'Number of cards in the layout preview',
    },
    showGuides: {
      control: 'boolean',
      description: 'Show spacing guides and measurements',
    },
  },
}

export default meta

type Story = StoryObj<SpacingPlaygroundArgs>

export const SpacingScale: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Spacing</h1>
        <p className="docs-copy">
          Spacing scale in 4px steps. Best practice: always use scale tokens and avoid arbitrary
          values to maintain a consistent vertical rhythm.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Scale Tokens</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {spacingScale.map((space) => (
              <tr key={space.token}>
                <td><code>{space.token}</code></td>
                <td>{space.value}px</td>
                <td>
                  <div
                    style={{
                      width: `${Math.max(space.value, 8)}px`,
                      height: '10px',
                      background: '#2cb6d4',
                      borderRadius: '999px',
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Scale Preview</h3>
        <div className="docs-spacing-ladder">
          {spacingScale.map((space) => (
            <div className="docs-spacing-ladder-row" key={`ladder-${space.token}`}>
              <span className="docs-demo-name"><code>{space.token}</code></span>
              <div className="docs-spacing-ladder-track">
                <div
                  className="docs-spacing-ladder-bar"
                  style={{ width: `${Math.max(space.value, 2)}px` }}
                />
              </div>
              <span className="docs-demo-name">{space.value}px</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  ),
}

export const InteractivePlayground: Story = {
  args: {
    gapToken: 'core.spacing.scale.4',
    paddingToken: 'core.spacing.scale.6',
    direction: 'vertical',
    itemCount: 3,
    showGuides: true,
  },
  render: ({ gapToken, paddingToken, direction, itemCount, showGuides }) => {
    const gap = tokenToValue.get(gapToken) ?? 16
    const padding = tokenToValue.get(paddingToken) ?? 24
    const isVertical = direction === 'vertical'
    const items = Array.from({ length: itemCount }, (_, index) => `Card ${String.fromCharCode(65 + index)}`)

    return (
      <section className="docs-page">
        <header className="docs-hero">
          <h1 className="docs-title">Spacing Playground</h1>
          <p className="docs-copy">
            Experiment with spacing tokens in real UI compositions. This helps validate rhythm,
            density, and readability before applying the values in components.
          </p>
        </header>

        <div className="docs-kpi-grid">
          <article className="docs-kpi">
            <span className="docs-kpi-label">Gap Token</span>
            <span className="docs-kpi-value">{gap}px</span>
            <code>{gapToken}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Padding Token</span>
            <span className="docs-kpi-value">{padding}px</span>
            <code>{paddingToken}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Direction</span>
            <span className="docs-kpi-value">{isVertical ? 'Stack' : 'Row'}</span>
            <code>{direction}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Items</span>
            <span className="docs-kpi-value">{itemCount}</span>
            <code>{showGuides ? 'guides:on' : 'guides:off'}</code>
          </article>
        </div>

        <article className="docs-card docs-stack">
          <h3>Layout Preview</h3>
          <div
            className="docs-spacing-playground"
            style={
              {
                '--preview-gap': `${gap}px`,
                '--preview-padding': `${padding}px`,
              } as CSSProperties
            }
          >
            {showGuides && (
              <div className="docs-spacing-guides">
                <span>Gap: {gap}px</span>
                <span>Padding: {padding}px</span>
              </div>
            )}
            <div className={`docs-spacing-canvas ${isVertical ? 'is-vertical' : 'is-horizontal'}`}>
              {items.map((label) => (
                <article className="docs-spacing-item" key={label}>
                  <strong>{label}</strong>
                  <p>Spacing sample content.</p>
                </article>
              ))}
            </div>
          </div>
        </article>

        {showGuides && (
          <article className="docs-card docs-stack">
            <h3>Rhythm View</h3>
            <div className="docs-spacing-rhythm">
              {Array.from({ length: itemCount - 1 }).map((_, index) => (
                <div className="docs-spacing-rhythm-row" key={`rhythm-${index}`}>
                  <span className="docs-spacing-rhythm-label">Between card {index + 1} and {index + 2}</span>
                  <div className="docs-spacing-rhythm-line" style={{ width: `${Math.max(gap * 6, 48)}px` }} />
                  <code>{gapToken} = {gap}px</code>
                </div>
              ))}
            </div>
          </article>
        )}

        <article className="docs-card docs-stack">
          <h3>Padding Preview</h3>
          <div
            className="docs-spacing-padding-demo"
            style={{ padding: `${padding}px` }}
          >
            <div className="docs-spacing-padding-inner">
              <span>Container padding: {padding}px</span>
            </div>
          </div>
        </article>
      </section>
    )
  },
}
