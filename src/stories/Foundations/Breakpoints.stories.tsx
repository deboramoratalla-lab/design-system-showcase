import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { breakpoints } from './foundationData'

const meta: Meta = {
  title: 'Foundations/Breakpoints',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const BreakpointSystem: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Breakpoints</h1>
        <p className="docs-copy">
          Mobile-first layout system centered on app screens, from 320px to 560px, with a 375px
          default frame. From there, it scales progressively for larger containers.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Breakpoint Tokens</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Width</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {breakpoints.map((breakpoint) => (
              <tr key={breakpoint.token}>
                <td><code>{breakpoint.token}</code></td>
                <td>{breakpoint.px}px</td>
                <td>{breakpoint.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Layout Defaults</h3>
        <div className="docs-demo-line">
          <span className="docs-demo-name">Page margin</span>
          <span className="docs-token">core.spacing.layout.page-margin = 16px</span>
        </div>
        <div className="docs-demo-line">
          <span className="docs-demo-name">Gutter</span>
          <span className="docs-token">core.spacing.layout.gutter = 24px</span>
        </div>
      </article>
    </section>
  ),
}
