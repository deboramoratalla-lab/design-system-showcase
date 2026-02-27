import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { neutralColorFamily, primitiveColorFamilies, type Tone } from './foundationData'
import { contrastRatio, gradeContrast, HEX_TEXT, HEX_WHITE } from './colorUtils'

const meta: Meta = {
  title: 'Foundations/Color/Brand Colors',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

const principalSets = [
  neutralColorFamily,
  ...primitiveColorFamilies,
]

const BubbleTone = ({ tone }: { tone: Tone }) => {
  const ratioOnWhite = contrastRatio(tone.hex, HEX_WHITE)
  const ratioOnDark = contrastRatio(tone.hex, HEX_TEXT)
  const bestContrast = Math.max(ratioOnWhite, ratioOnDark)
  const grade = gradeContrast(bestContrast)
  const sampleTextColor = ratioOnDark > ratioOnWhite ? HEX_TEXT : HEX_WHITE
  const pass = bestContrast >= 4.5

  return (
    <article className="docs-bubble">
      <div className="docs-bubble-color" style={{ background: tone.hex, color: sampleTextColor }}>
        <span className="docs-bubble-sample">Aa</span>
      </div>
      <div className="docs-bubble-meta">
        <span><strong>{tone.name}</strong> <code>{tone.hex}</code></span>
        <code>{tone.token}</code>
        <span className="docs-scale-contrast">
          on white {ratioOnWhite.toFixed(2)}:1 · on dark {ratioOnDark.toFixed(2)}:1
        </span>
        <span className="docs-scale-contrast">
          best {bestContrast.toFixed(2)}:1 · {grade} · text {sampleTextColor}
        </span>
        <span className={`docs-badge ${pass ? 'docs-badge-pass' : 'docs-badge-fail'}`}>
          {pass ? 'AA Pass' : 'AA Fail'}
        </span>
      </div>
    </article>
  )
}

export const BrandColors: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Brand Colors</h1>
        <p className="docs-copy">
          Brand colors for visual identity and communication. This page shows the principal color
          set with token names and values.
        </p>
        <span className="docs-sync">Synced with Figma Design library</span>
      </header>

      <section className="docs-card docs-stack">
        <div>
          <p className="docs-section-label">Global color</p>
          <h3>Principal Set</h3>
          <p>
            Core brand colors used consistently across product and communication touchpoints.
          </p>
        </div>

        {principalSets.map((set) => (
          <article key={set.family} className="docs-bubble-family">
            <div className="docs-bubble-head">
              <h4>{set.family}</h4>
              <p>{set.description}</p>
            </div>
            <div className="docs-bubble-grid">
              {set.tones.map((tone) => (
                <BubbleTone key={tone.token} tone={tone} />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="docs-card docs-stack">
        <div>
          <p className="docs-section-label">Application patterns</p>
          <h3>Do / Don’t (Product UI)</h3>
          <p>
            Real screens are the best validation. Use these rules to evaluate color usage in
            buttons, surfaces, labels, and states.
          </p>
        </div>

        <div className="docs-color-rules">
          <article className="docs-color-rule docs-color-rule-do">
            <header>
              <span className="docs-badge docs-badge-pass">Do</span>
              <h4>Use semantic intent + contrast-safe text</h4>
            </header>
            <div className="docs-color-rule-preview docs-color-rule-preview-do">
              <button className="docs-color-rule-btn">Primary Action</button>
              <span className="docs-color-rule-chip">Info label</span>
            </div>
            <ul className="docs-list">
              <li>Map primitives to semantic tokens before component usage.</li>
              <li>Keep text contrast at AA minimum for body-size text.</li>
              <li>Reserve accent palettes for highlights and status communication.</li>
            </ul>
          </article>

          <article className="docs-color-rule docs-color-rule-dont">
            <header>
              <span className="docs-badge docs-badge-fail">Don’t</span>
              <h4>Mix decorative colors without hierarchy</h4>
            </header>
            <div className="docs-color-rule-preview docs-color-rule-preview-dont">
              <button className="docs-color-rule-btn docs-color-rule-btn-bad">Primary Action</button>
              <span className="docs-color-rule-chip docs-color-rule-chip-bad">Info label</span>
            </div>
            <ul className="docs-list">
              <li>Do not apply random primitive tones directly in components.</li>
              <li>Avoid low-contrast text on chromatic backgrounds.</li>
              <li>Do not use multiple accent families for the same UI purpose.</li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  ),
}
