import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { DocsPager } from '../Documentation/DocsPager'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

const typeRamp = [
  {
    role: 'Display',
    family: 'Gustavo',
    size: 56,
    line: 64,
    weight: 700,
    token: 'core.typography.font-size.56 / line-height.64 / font-weight.bold',
    sample: 'Move minds through better habits',
  },
  {
    role: 'Heading',
    family: 'Gustavo',
    size: 40,
    line: 48,
    weight: 700,
    token: 'core.typography.font-size.40 / line-height.48 / font-weight.bold',
    sample: 'Build clarity at every touchpoint',
  },
  {
    role: 'Section title',
    family: 'Surt',
    size: 24,
    line: 32,
    weight: 600,
    token: 'core.typography.font-size.24 / line-height.32 / font-weight.semibold',
    sample: 'Design foundations',
  },
  {
    role: 'Body',
    family: 'Surt',
    size: 16,
    line: 24,
    weight: 400,
    token: 'core.typography.font-size.16 / line-height.24 / font-weight.regular',
    sample: 'Use consistent typography tokens to improve readability and implementation speed.',
  },
  {
    role: 'Label',
    family: 'Surt',
    size: 14,
    line: 20,
    weight: 500,
    token: 'core.typography.font-size.14 / line-height.20 / font-weight.medium',
    sample: 'Button label',
  },
  {
    role: 'Caption',
    family: 'Surt',
    size: 12,
    line: 16,
    weight: 400,
    token: 'core.typography.font-size.12 / line-height.16 / font-weight.regular',
    sample: 'Supporting information and metadata',
  },
]

const typeGroups = [
  {
    role: 'Display',
    family: 'Gustavo',
    description: 'Hero headlines and major brand moments.',
    sizes: [
      { name: 'Display XL', size: 72, line: 80, weight: 700, token: 'font-size.72 / line-height.80' },
      { name: 'Display L', size: 64, line: 72, weight: 700, token: 'font-size.64 / line-height.72' },
      { name: 'Display M', size: 56, line: 64, weight: 700, token: 'font-size.56 / line-height.64' },
    ],
  },
  {
    role: 'Heading',
    family: 'Gustavo',
    description: 'Section and page titles.',
    sizes: [
      { name: 'Heading XL', size: 48, line: 56, weight: 700, token: 'font-size.48 / line-height.56' },
      { name: 'Heading L', size: 40, line: 48, weight: 700, token: 'font-size.40 / line-height.48' },
      { name: 'Heading M', size: 34, line: 40, weight: 700, token: 'font-size.34 / line-height.40' },
      { name: 'Heading S', size: 32, line: 36, weight: 700, token: 'font-size.32 / line-height.36' },
    ],
  },
  {
    role: 'Body',
    family: 'Surt',
    description: 'Continuous reading text and primary content.',
    sizes: [
      { name: 'Body L', size: 20, line: 28, weight: 400, token: 'font-size.20 / line-height.28' },
      { name: 'Body M', size: 18, line: 28, weight: 400, token: 'font-size.18 / line-height.28' },
      { name: 'Body', size: 16, line: 24, weight: 400, token: 'font-size.16 / line-height.24' },
      { name: 'Body S', size: 15, line: 24, weight: 400, token: 'font-size.15 / line-height.24' },
      { name: 'Body XS', size: 14, line: 20, weight: 400, token: 'font-size.14 / line-height.20' },
    ],
  },
  {
    role: 'Label',
    family: 'Surt',
    description: 'Buttons, tabs, and interactive UI text.',
    sizes: [
      { name: 'Label L', size: 16, line: 24, weight: 500, token: 'font-size.16 / line-height.24 / medium' },
      { name: 'Label', size: 14, line: 20, weight: 500, token: 'font-size.14 / line-height.20 / medium' },
      { name: 'Label S', size: 13, line: 20, weight: 500, token: 'font-size.13 / line-height.20 / medium' },
    ],
  },
  {
    role: 'Caption',
    family: 'Surt',
    description: 'Metadata and supporting text.',
    sizes: [
      { name: 'Caption', size: 12, line: 16, weight: 400, token: 'font-size.12 / line-height.16' },
      { name: 'Caption S', size: 11, line: 16, weight: 400, token: 'font-size.11 / line-height.16' },
      { name: 'Overline', size: 10, line: 14, weight: 500, token: 'font-size.10 / line-height.14 / medium' },
    ],
  },
]

export const TypographyScale: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Typography</h1>
        <p className="docs-copy">
          TAP uses a combination of Gustavo and Surt to balance brand personality and product
          readability. The base rule: reading text at weight 400, and hierarchy through scale
          rather than excessive bold styling.
        </p>
      </header>

      <div className="docs-typo-principles">
        <article className="docs-card">
          <h3>Clarity first</h3>
          <p>Use body 400 by default and reserve heavy weights for true hierarchy.</p>
        </article>
        <article className="docs-card">
          <h3>Token driven</h3>
          <p>Always apply size/line-height/weight from tokens, with no hardcoded values.</p>
        </article>
        <article className="docs-card">
          <h3>Role based</h3>
          <p>Define the text role (Display, Heading, Body, Label) before choosing a style.</p>
        </article>
      </div>

      <div className="docs-typo-families">
        <article className="docs-card docs-typo-family">
          <span className="docs-section-label">Brand typeface</span>
          <h3>Gustavo</h3>
          <p>For headlines and identity moments. It adds character and presence.</p>
          <p className="docs-typo-specimen docs-typo-specimen-gustavo">Aa</p>
        </article>

        <article className="docs-card docs-typo-family">
          <span className="docs-section-label">UI typeface</span>
          <h3>Surt</h3>
          <p>For content, labels, and functional UI text.</p>
          <p className="docs-typo-specimen docs-typo-specimen-surt">Aa</p>
        </article>
      </div>

      <article className="docs-card docs-stack">
        <h3>Type Ramp</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Family</th>
              <th>Size / Line</th>
              <th>Weight</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {typeRamp.map((item) => (
              <tr key={item.token}>
                <td>{item.role}</td>
                <td>{item.family}</td>
                <td>{item.size}px / {item.line}px</td>
                <td>{item.weight}</td>
                <td><code>{item.token}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Scales By Role</h3>
        <div className="docs-typo-groups">
          {typeGroups.map((group) => (
            <article className="docs-typo-group-card" key={group.role}>
              <header className="docs-typo-group-head">
                <h4>{group.role}</h4>
                <p>{group.description}</p>
              </header>
              <div className="docs-typo-group-rows">
                {group.sizes.map((scale) => (
                  <div className="docs-typo-group-row" key={`${group.role}-${scale.name}`}>
                    <div className="docs-typo-group-row-left">
                      <strong>{scale.name}</strong>
                      <code>{scale.token}</code>
                    </div>
                    <span
                      className="docs-typo-group-row-sample"
                      style={{
                        fontFamily:
                          group.family === 'Gustavo'
                            ? 'var(--core-typography-font-family-primary), "Gustavo", sans-serif'
                            : 'var(--core-typography-font-family-secondary), "Surt", sans-serif',
                        fontSize: `${scale.size}px`,
                        lineHeight: `${scale.line}px`,
                        fontWeight: scale.weight,
                      }}
                    >
                      The quick brown fox
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </article>

      <article className="docs-card docs-stack">
        <h3>Live Preview</h3>
        <div className="docs-typo-live">
          {typeRamp.map((item) => (
            <div className="docs-typo-live-row" key={`${item.role}-sample`}>
              <span className="docs-demo-name">{item.role}</span>
              <span
                className="docs-demo-sample"
                style={{
                  fontFamily:
                    item.family === 'Gustavo'
                      ? 'var(--core-typography-font-family-primary), "Gustavo", sans-serif'
                      : 'var(--core-typography-font-family-secondary), "Surt", sans-serif',
                  fontSize: `${item.size}px`,
                  lineHeight: `${item.line}px`,
                  fontWeight: item.weight,
                }}
              >
                {item.sample}
              </span>
            </div>
          ))}
        </div>
      </article>

    

      <DocsPager
        prevHref="?path=/story/foundations-color-primitives--color-primitives"
        prevLabel="Foundations / Color Primitives"
        nextHref="?path=/story/foundations-spacing--spacing-scale"
        nextLabel="Foundations / Spacing"
      />
</section>
  ),
}
