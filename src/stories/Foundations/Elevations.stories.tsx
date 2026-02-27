import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'

const elevationLevels = [
  {
    name: 'Level 0',
    usage: 'Base surfaces and default containers',
    shadow: 'none',
    examples: 'Page background, section wrappers',
  },
  {
    name: 'Level 1',
    usage: 'Cards and contextual blocks',
    shadow: '0 1px 2px rgba(18, 40, 46, 0.06)',
    examples: 'Cards, list items, inline panels',
  },
  {
    name: 'Level 2',
    usage: 'Interactive popovers and elevated panels',
    shadow: '0 6px 18px rgba(18, 40, 46, 0.1)',
    examples: 'Dropdowns, floating actions, popovers',
  },
  {
    name: 'Level 3',
    usage: 'Modals and critical overlays',
    shadow: '0 12px 32px rgba(18, 40, 46, 0.14)',
    examples: 'Dialogs, drawers, urgent overlays',
  },
]

const meta: Meta = {
  title: 'Foundations/Elevations',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const ElevationSystem: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Elevations</h1>
        <p className="docs-copy">
          Elevation communicates depth and hierarchy across sheets, cards, and overlays.
        </p>
      </header>

      <article className="docs-card docs-stack">
        <h3>Depth Composition Preview</h3>
        <div className="docs-elevation-scene">
          <div className="docs-elevation-stack">
            {elevationLevels.map((level, index) => (
              <div
                key={`scene-${level.name}`}
                className="docs-elevation-layer"
                style={{
                  boxShadow: level.shadow,
                  width: `${100 - index * 7}%`,
                  zIndex: 20 - index,
                }}
              >
                {level.name}
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="docs-card docs-stack">
        <h3>Modal Layering</h3>
        <div className="docs-elevation-real">
          <div className="docs-elevation-real-scrim">
            <div className="docs-elevation-real-phone">
              <div className="docs-elevation-real-modal">
                <h4>Weill Tennis Academy</h4>
                <p>You're about to add this academy. Are you sure?</p>
                <button type="button">Add academy</button>
              </div>
            </div>
          </div>
        </div>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Level</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background screen</td>
              <td><strong>Level 0</strong></td>
              <td>Base context remains visible but de-emphasized.</td>
            </tr>
            <tr>
              <td>Scrim overlay</td>
              <td><strong>Overlay</strong></td>
              <td>Creates visual separation and interaction lock.</td>
            </tr>
            <tr>
              <td>Modal container</td>
              <td><strong>Level 3</strong></td>
              <td>Top priority action and strongest depth cue.</td>
            </tr>
            <tr>
              <td>Primary CTA inside modal</td>
              <td><strong>Level 1</strong></td>
              <td>Interactive emphasis without competing with modal container.</td>
            </tr>
            <tr>
              <td>Calendar bottom sheet (Stats)</td>
              <td><strong>Level 2</strong></td>
              <td>High context change with medium prominence over the base screen.</td>
            </tr>
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Elevation Scale</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Shadow</th>
              <th>Usage</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            {elevationLevels.map((level) => (
              <tr key={level.name}>
                <td><strong>{level.name}</strong></td>
                <td><code>{level.shadow}</code></td>
                <td>{level.usage}</td>
                <td>{level.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  ),
}
