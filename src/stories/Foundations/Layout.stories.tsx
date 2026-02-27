import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import '../Documentation/DocsPages.css'
import { spacingScale } from './foundationData'

type LayoutArgs = {
  columns: 4 | 6
  marginToken: string
  gutterToken: string
  showGrid: boolean
  showBaseline: boolean
}

const spacingOptions = spacingScale.filter((item) => item.value <= 32).map((item) => item.token)
const tokenToValue = new Map(spacingScale.map((item) => [item.token, item.value]))

const meta: Meta<LayoutArgs> = {
  title: 'Foundations/Layout',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    columns: { control: 'inline-radio', options: [4, 6] },
    marginToken: { control: 'select', options: spacingOptions },
    gutterToken: { control: 'select', options: spacingOptions },
    showGrid: { control: 'boolean' },
    showBaseline: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<LayoutArgs>

export const MobileGrid: Story = {
  args: {
    columns: 4,
    marginToken: 'core.spacing.scale.4',
    gutterToken: 'core.spacing.scale.2',
    showGrid: true,
    showBaseline: false,
  },
  render: ({ columns, marginToken, gutterToken, showGrid, showBaseline }) => {
    const margin = tokenToValue.get(marginToken) ?? 16
    const gutter = tokenToValue.get(gutterToken) ?? 8
    const gridTemplateColumns = `repeat(${columns}, 1fr)`

    return (
      <section className="docs-page">
        <header className="docs-hero">
          <h1 className="docs-title">Layout</h1>
          <p className="docs-copy">
            Mobile layout system with token-based margins and gutters. Use this page to validate
            screen composition and spacing rhythm before building components.
          </p>
        </header>

        <div className="docs-kpi-grid">
          <article className="docs-kpi">
            <span className="docs-kpi-label">Columns</span>
            <span className="docs-kpi-value">{columns}</span>
            <code>{`grid.columns.${columns}`}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Side Margin</span>
            <span className="docs-kpi-value">{margin}px</span>
            <code>{marginToken}</code>
          </article>
          <article className="docs-kpi">
            <span className="docs-kpi-label">Gutter</span>
            <span className="docs-kpi-value">{gutter}px</span>
            <code>{gutterToken}</code>
          </article>
        </div>

        <article className="docs-card docs-stack">
          <h3>Mobile Screen Preview</h3>
          <div className="docs-layout-stage">
            <div
              className="docs-layout-phone"
              style={
                {
                  '--layout-margin': `${margin}px`,
                  '--layout-gutter': `${gutter}px`,
                  '--layout-columns': gridTemplateColumns,
                } as CSSProperties
              }
            >
              {showBaseline && <div className="docs-layout-baseline" />}
              {showGrid && (
                <div className="docs-layout-overlay">
                  <div className="docs-layout-columns">
                    {Array.from({ length: columns }).map((_, index) => (
                      <div key={`col-${index}`} className="docs-layout-column" />
                    ))}
                  </div>
                </div>
              )}

              <div className="docs-layout-content">
                <h4>Homepage</h4>
                <div className="docs-layout-block docs-layout-block-header" />
                <div className="docs-layout-block docs-layout-block-progress" />
                <div className="docs-layout-block docs-layout-block-video" />
                <div className="docs-layout-routine-grid">
                  <div className="docs-layout-block docs-layout-block-routine" />
                  <div className="docs-layout-block docs-layout-block-routine docs-layout-block-routine-alt" />
                  <div className="docs-layout-block docs-layout-block-routine docs-layout-block-routine-soft" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  },
}
