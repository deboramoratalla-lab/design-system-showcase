import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { DocsPager } from '../Documentation/DocsPager'
import { Button } from '../../components/Button'

const focusTokens = [
  { token: 'semantic.color.focus.ring.inner-color', css: '--semantic-color-focus-ring-inner-color', value: '#F9FAFA' },
  { token: 'semantic.color.focus.ring.outer-color', css: '--semantic-color-focus-ring-outer-color', value: '#AEE3F0' },
  { token: 'semantic.color.focus.ring.inner-width', css: '--semantic-color-focus-ring-inner-width', value: '2px' },
  { token: 'semantic.color.focus.ring.outer-width', css: '--semantic-color-focus-ring-outer-width', value: '4px' },
  { token: 'semantic.color.border.focus', css: '--semantic-color-border-focus', value: '#AEE3F0' },
]

const meta: Meta = {
  title: 'Foundations/Focus',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const FocusSystem: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Focus</h1>
        <p className="docs-copy">
          Focus styles define keyboard navigation visibility and accessibility states. Apply ring
          tokens consistently across interactive components.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Focus Tokens</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>CSS Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {focusTokens.map((item) => (
              <tr key={item.token}>
                <td><code>{item.token}</code></td>
                <td><code>{item.css}</code></td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Preview</h3>
        <div className="docs-focus-preview">
          <Button variant="primary" visualState="default">Button default</Button>
          <Button variant="primary" visualState="focus">Button focused</Button>
          <Button variant="secondary" visualState="focus">Secondary focused</Button>
        </div>
      </article>
    

      <DocsPager
        prevHref="?path=/story/foundations-elevations--elevation-system"
        prevLabel="Foundations / Elevations"
        nextHref="?path=/story/foundations-aspect-ratio--aspect-ratio-system"
        nextLabel="Foundations / Aspect Ratio"
      />
</section>
  ),
}
