import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import {
  feedbackColorFamilies,
  neutralColorFamily,
  primitiveColorFamilies,
  type ColorFamily,
} from './foundationData'

const meta: Meta = {
  title: 'Foundations/Color/Primitives',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

const toneLabel = (token: string, fallback: string) => {
  const split = token.split('.')
  return split.length >= 3 ? split.slice(2).join('.') : fallback
}

const PrimitiveFamilyColumn = ({ family }: { family: ColorFamily }) => (
  <article className="docs-primitive-column">
    <header className="docs-primitive-head">
      <h3>{family.family}</h3>
      <p>{family.description}</p>
    </header>
    <div className="docs-primitive-stack">
      {family.tones.map((tone) => {
        return (
          <article key={tone.token} className="docs-primitive-card">
            <div className="docs-primitive-line-1">
              <div className="docs-primitive-left">
                <div className="docs-primitive-color-bubble" style={{ background: tone.hex }} />
                <strong>{tone.name}</strong>
              </div>
              <code>{tone.hex}</code>
            </div>

            <div className="docs-primitive-line-2">
              <code className="docs-primitive-token">{toneLabel(tone.token, tone.token)}</code>
            </div>
          </article>
        )
      })}
    </div>
  </article>
)

export const ColorPrimitives: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Color Primitives</h1>
        <p className="docs-copy">
          Primitives are the base building blocks of color. They should not be consumed directly
          by components; map them to semantic tokens first to express intent.
        </p>
      </header>

      <article className="docs-card">
        <h3>Color Architecture</h3>
        <ul className="docs-list">
          <li><strong>Primitives:</strong> family-based color scales (this page).</li>
          <li><strong>Semantics:</strong> usage intent (surface, text, border, action).</li>
          <li><strong>Components:</strong> final implementation in Button, Input, etc.</li>
          <li><strong>Coverage:</strong> includes 50-900, neutral, and feedback tokens.</li>
        </ul>
      </article>

      <div className="docs-primitive-board">
        <PrimitiveFamilyColumn family={neutralColorFamily} />
        {primitiveColorFamilies.map((family) => (
          <PrimitiveFamilyColumn family={family} key={family.family} />
        ))}
      </div>

      <div className="docs-primitive-board docs-primitive-board-feedback">
        {feedbackColorFamilies.map((family) => (
          <PrimitiveFamilyColumn family={family} key={family.family} />
        ))}
      </div>
    </section>
  ),
}
