import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { borderWidths, radiusTokens } from './foundationData'

const meta: Meta = {
  title: 'Foundations/Borders & Radius',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const BordersAndRadius: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Borders & Radius</h1>
        <p className="docs-copy">
          Radius and border-width system to keep controls, cards, and interactive surfaces
          visually consistent.
        </p>
      </header>

      <div className="docs-grid">
        <article className="docs-card docs-stack">
          <h3>Radius</h3>
          {radiusTokens.map((radius) => (
            <div key={radius.token} className="docs-demo-line">
              <span className="docs-demo-name"><code>{radius.token}</code> ({radius.px}px)</span>
              <div
                style={{
                  width: '84px',
                  height: '36px',
                  borderRadius: `${radius.px}px`,
                  background: '#e9f8fc',
                  border: '1px solid #b3c2ca',
                }}
              />
            </div>
          ))}
        </article>

        <article className="docs-card docs-stack">
          <h3>Border Width</h3>
          {borderWidths.map((border) => (
            <div key={border.token} className="docs-demo-line">
              <span className="docs-demo-name"><code>{border.token}</code> ({border.px}px)</span>
              <div
                style={{
                  width: '100px',
                  height: '32px',
                  borderRadius: '8px',
                  borderStyle: 'solid',
                  borderWidth: `${border.px}px`,
                  borderColor: '#12282e',
                  background: '#fff',
                }}
              />
            </div>
          ))}
        </article>
      </div>
    </section>
  ),
}
