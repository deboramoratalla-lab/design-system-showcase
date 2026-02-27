import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'

const meta: Meta = {
  title: 'Foundations/Semantic Tokens',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Overview: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Semantics</h1>
        <p className="docs-copy">
          Semantics map foundations to intent. This is the layer components use to talk about meaning
          ({'`text-primary`'}, {'`surface-secondary`'}, {'`action-primary-hover`'}) instead of direct
          hex values.
        </p>
      </header>

      <div className="docs-grid">
        <article className="docs-card">
          <h3>Surface & Text</h3>
          <p>Tokens for readable contrast and content hierarchy.</p>
          <span className="docs-token">semantic.color.surface.*</span>
          <span className="docs-token">semantic.color.text.*</span>
        </article>

        <article className="docs-card">
          <h3>Borders & Focus</h3>
          <p>Structural borders and accessible focus states for interaction.</p>
          <span className="docs-token">semantic.color.border.*</span>
          <span className="docs-token">semantic.color.focus.*</span>
        </article>

        <article className="docs-card">
          <h3>Actions & Feedback</h3>
          <p>Action states (default/hover/active/disabled) and contextual feedback.</p>
          <span className="docs-token">semantic.color.action.*</span>
          <span className="docs-token">semantic.color.feedback.*</span>
        </article>
      </div>

      <article className="docs-card">
        <h3>Professional Best Practices</h3>
        <ul className="docs-list">
          <li>Components consume semantic tokens only (never direct core tokens).</li>
          <li>Each semantic token documents intent, context, and state.</li>
          <li>Dark mode/theming should swap semantics without breaking components.</li>
          <li>Use a PR checklist to prevent hardcoded color/spacing in components.</li>
        </ul>
      </article>
    </section>
  ),
}
