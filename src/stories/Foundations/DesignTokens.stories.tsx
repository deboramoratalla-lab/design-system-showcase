import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'

const principles = [
  {
    title: 'Single Source Of Truth',
    text: 'Figma variables and repository tokens must describe the same decisions with equivalent names and values.',
  },
  {
    title: 'Semantic First',
    text: 'Components should consume semantic tokens instead of raw primitives to preserve intent and theme flexibility.',
  },
  {
    title: 'Composable Architecture',
    text: 'Core, semantic and component layers must stay independent so changes can propagate safely.',
  },
]

const tokenGroups = [
  {
    group: 'Core',
    description: 'Primitive decisions from design language and raw scales.',
    items: [
      'core.color.*',
      'core.spacing.*',
      'core.typography.*',
      'core.border.*',
      'core.breakpoint.*',
      'core.opacity.*',
    ],
  },
  {
    group: 'Semantic',
    description: 'Intent-based tokens consumed by interfaces and components.',
    items: [
      'semantic.color.surface.*',
      'semantic.color.text.*',
      'semantic.color.border.*',
      'semantic.color.action.*',
      'semantic.color.feedback.*',
      'semantic.color.focus.*',
    ],
  },
  {
    group: 'Component',
    description: 'Component-level aliases and implementation constraints.',
    items: [
      'component.button.padding.*',
      'component.button.variants.*',
      'component.button.innards.*',
      'component.button.motion.*',
      'component.button.focus.*',
    ],
  },
]

const lifecycleSteps = [
  {
    step: '1. Define',
    detail: 'Design team creates or updates variable values in Figma (core primitives).',
  },
  {
    step: '2. Map',
    detail: 'Tokens are mapped to semantic aliases that express UI intent (text, surface, action).',
  },
  {
    step: '3. Consume',
    detail: 'Components use semantic or component tokens only, never direct hardcoded values.',
  },
  {
    step: '4. Verify',
    detail: 'Storybook and visual QA validate consistency, accessibility, and implementation impact.',
  },
]

const meta: Meta = {
  title: 'Foundations/Design Tokens',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const TokenIndex: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Design Tokens</h1>
        <p className="docs-copy">
          TAP token system architecture and governance model. This page defines how values are
          authored, named, and consumed from design to production code.
        </p>
      </header>

      <div className="docs-grid">
        {principles.map((item) => (
          <article className="docs-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="docs-grid">
        {tokenGroups.map((group) => (
          <article key={group.group} className="docs-card docs-stack">
            <h3>{group.group}</h3>
            <p>{group.description}</p>
            <ul className="docs-list">
              {group.items.map((item) => (
                <li key={item}><code>{item}</code></li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="docs-card docs-stack">
        <h3>Naming Convention</h3>
        <p>Use a predictable path-based structure that encodes scope, property, and role.</p>
        <div className="docs-token-syntax">
          <code>{'{layer}.{category}.{group}.{role}.{state}'}</code>
        </div>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Example</th>
              <th>Meaning</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>core.color.brand.ice-blue.500</code></td>
              <td>Raw primitive value</td>
              <td>Design scale foundation</td>
            </tr>
            <tr>
              <td><code>semantic.color.text.primary</code></td>
              <td>Intent alias</td>
              <td>Body/headline default text</td>
            </tr>
            <tr>
              <td><code>component.button.variants.primary.background.default</code></td>
              <td>Component decision</td>
              <td>Direct component styling</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Token Lifecycle</h3>
        <div className="docs-lifecycle-grid">
          {lifecycleSteps.map((item) => (
            <article className="docs-lifecycle-step" key={item.step}>
              <strong>{item.step}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="docs-card docs-stack">
        <h3>Implementation Example</h3>
        <p>Example chain from primitive to semantic to component consumption:</p>
        <pre className="docs-code-block">
{`{
  "core": { "color": { "brand": { "ice-blue": { "500": { "value": "#2CB6D4" } } } } },
  "semantic": { "color": { "focus": { "ring": { "outer-color": { "value": "{core.color.brand.ice-blue.300}" } } } } },
  "component": { "button": { "focus": { "ring-color": { "value": "{semantic.color.focus.ring.outer-color}" } } } }
}`}
        </pre>
      </article>

      <article className="docs-card docs-stack">
        <h3>Documentation Flow</h3>
        <ul className="docs-list">
          <li>Start with <strong>Design Tokens</strong> to understand architecture.</li>
          <li>Continue in <strong>Color / Typography / Spacing / Layout</strong> for visual rules.</li>
          <li>Apply in <strong>Semantics</strong> and then in <strong>Components</strong>.</li>
        </ul>
      </article>
    </section>
  ),
}
