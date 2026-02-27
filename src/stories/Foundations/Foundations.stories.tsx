import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'

const meta: Meta = {
  title: 'Foundations/Overview',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Overview: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Foundations</h1>
        <p className="docs-copy">
          Foundations define the visual primitives of TAP: base color scales, spacing, typography,
          radius, borders, opacity and breakpoints. This section includes real subpages with
          applied tokens and usage criteria.
        </p>
      </header>

      <div className="docs-grid">
        <article className="docs-card">
          <h3>Color Primitives</h3>
          <p>Base scales for neutrals and categories: ice blue, avocado green, egg orange, and grape lilac.</p>
          <span className="docs-token">core.color.brand.*</span>
          <span className="docs-token">core.color.neutral.*</span>
        </article>

        <article className="docs-card">
          <h3>Typography</h3>
          <p>Families, weights, sizes, line-heights, and letter-spacing with Surt and Gustavo.</p>
          <span className="docs-token">core.typography.*</span>
        </article>

        <article className="docs-card">
          <h3>Spacing & Layout</h3>
          <p>Spacing scale and layout rules for consistency across screens and components.</p>
          <span className="docs-token">core.spacing.*</span>
          <span className="docs-token">core.breakpoint.*</span>
        </article>

        <article className="docs-card">
          <h3>Focus & Accessibility</h3>
          <p>Focus rings and keyboard navigation visibility for interactive controls.</p>
          <span className="docs-token">semantic.color.focus.*</span>
          <span className="docs-token">semantic.color.border.focus</span>
        </article>

        <article className="docs-card">
          <h3>Depth & Media Rules</h3>
          <p>Elevation hierarchy and approved aspect-ratio constraints for visual stability.</p>
          <span className="docs-token">elevation scale (interim)</span>
          <span className="docs-token">aspect ratio constraints</span>
        </article>

        <article className="docs-card">
          <h3>Token Architecture</h3>
          <p>Index of core, semantic, and component token namespaces used in implementation.</p>
          <span className="docs-token">core.*</span>
          <span className="docs-token">semantic.* / component.*</span>
        </article>
      </div>

      <article className="docs-card">
        <h3>Recommended Documentation</h3>
        <ul className="docs-list">
          <li>Token name, value, and unit.</li>
          <li>When to use each token and when not to.</li>
          <li>Figma token to code token mapping.</li>
          <li>Minimal visual examples by category.</li>
          <li>Consistent naming and structure between Figma and code.</li>
        </ul>
      </article>
    </section>
  ),
}
