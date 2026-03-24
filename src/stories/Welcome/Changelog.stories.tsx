import type { Meta, StoryObj } from '@storybook/react-vite'
import './Welcome.css'
import { DocsPager } from '../Documentation/DocsPager'

const releases = [
  {
    version: 'v1.2.0',
    date: 'February 27, 2026',
    added: [
      'Design Tokens page rebuilt as a filterable token library.',
      'Token previews added for color, spacing, typography, border, radius, breakpoint, and opacity.',
      'Download actions by category and full foundations export.',
    ],
    changed: [
      'Welcome shortcuts simplified to the 3 main sections.',
      'Next navigation buttons unified across documentation pages.',
    ],
    fixed: [
      'Token rows now resolve reference values in previews.',
      'Sidebar ordering cleanup for foundations and brand sections.',
    ],
  },
  {
    version: 'v1.1.0',
    date: 'February 26, 2026',
    added: [
      'Brand Colors and Color Primitives split into dedicated pages.',
      'Typography docs expanded with real token scales.',
    ],
    changed: [
      'Documentation style refreshed with cleaner spacing and lighter body weights.',
    ],
    fixed: [
      'Iconography listing updated to include all available asset entries.',
    ],
  },
  {
    version: 'v1.0.0',
    date: 'February 25, 2026',
    added: [
      'Initial TAP Design System documentation structure in Storybook.',
      'Foundations, Brand, and Components top-level sections.',
    ],
    changed: ['Button playground aligned with Figma component logic.'],
    fixed: ['Initial token sync issues between exported JSON and docs examples.'],
  },
]

const meta: Meta = {
  title: 'Welcome/Changelog',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Updates: Story = {
  render: () => (
    <section className="welcome-page">
      <header className="welcome-header">
        <h1 className="welcome-title">Changelog</h1>
        <p className="welcome-copy">
          Recent updates to documentation structure, token inventory, and component guidance.
        </p>
      </header>

      <section className="welcome-changelog-list">
        {releases.map((release) => (
          <article key={release.version} className="welcome-changelog-card">
            <header className="welcome-changelog-head">
              <h2>{release.version}</h2>
              <span>{release.date}</span>
            </header>

            <div className="welcome-changelog-group">
              <h3>Added</h3>
              <ul>
                {release.added.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="welcome-changelog-group">
              <h3>Changed</h3>
              <ul>
                {release.changed.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="welcome-changelog-group">
              <h3>Fixed</h3>
              <ul>
                {release.fixed.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <DocsPager
        prevHref="?path=/story/welcome-start-here--start-here"
        prevLabel="Welcome / Start Here"
        nextHref="?path=/story/foundations-design-tokens--token-index"
        nextLabel="Foundations / Design Tokens"
      />
    </section>
  ),
}
