import type { Meta, StoryObj } from '@storybook/react-vite'
import '../Documentation/DocsPages.css'
import { DocsPager } from '../Documentation/DocsPager'

const ratios = [
  {
    label: '1:1',
    usage: 'Profile avatars and compact utility visuals',
    value: '1 / 1',
    frame: '96 x 96',
    src: '/people/profile-dm.jpg',
    fit: 'cover' as const,
  },
  {
    label: '4:3',
    usage: 'Editorial and card media blocks',
    value: '4 / 3',
    frame: '320 x 240',
    src: '/brand/photo-onboarding-2.svg',
    fit: 'cover' as const,
  },
  {
    label: '16:9',
    usage: 'Video, tutorials, and cover media',
    value: '16 / 9',
    frame: '320 x 180',
    src: '/brand/07-photography-1.svg',
    fit: 'cover' as const,
  },
  {
    label: '3:4',
    usage: 'Portrait stories and onboarding media',
    value: '3 / 4',
    frame: '240 x 320',
    src: '/brand/photo-onboarding-4.svg',
    fit: 'cover' as const,
  },
]

const realAppReferences = [
  {
    screen: 'Homepage / Mental workout card',
    element: 'Media preview block',
    ratio: '16:9',
    recommendation: 'Use for video and rich media cards',
  },
  {
    screen: 'Profile',
    element: 'Avatar photo',
    ratio: '1:1',
    recommendation: 'Keep circular masks from square sources',
  },
  {
    screen: 'Homepage, Define Your Playing Style, Profile',
    element: 'Main mobile canvas',
    ratio: '9:19.5',
    recommendation: 'Use full device screenshot ratio for references',
  },
  {
    screen: 'You / Progress map',
    element: 'Feature illustration area',
    ratio: '4:3',
    recommendation: 'Use for content-led illustration cards',
  },
  {
    screen: 'Your vision / Vision board',
    element: 'Image tiles in 3-column grid',
    ratio: '1:1',
    recommendation: 'Keep all tiles square for rhythm and consistent crop behavior',
  },
  {
    screen: 'Your vision / Expanded tile modal',
    element: 'Focused media preview',
    ratio: '3:4',
    recommendation: 'Use portrait ratio when a tile is opened in modal focus mode',
  },
  {
    screen: 'Stats / Daily',
    element: 'Donut chart blocks',
    ratio: '1:1',
    recommendation: 'Keep circular charts in square containers to avoid distortion',
  },
  {
    screen: 'Stats / Weekly',
    element: 'Bar chart module',
    ratio: '4:3',
    recommendation: 'Use medium landscape ratio for multi-point charts in mobile',
  },
  {
    screen: 'Stats / Monthly',
    element: 'Calendar card container',
    ratio: '4:3',
    recommendation: 'Use stable card ratio for month overview and progress context',
  },
  {
    screen: 'Stats / Weekly selector',
    element: 'Calendar bottom sheet',
    ratio: '4:5',
    recommendation: 'Use portrait sheet ratio for date selection overlays',
  },
  {
    screen: 'Post-Competition Routine',
    element: 'Primary content canvas',
    ratio: '9:19.5',
    recommendation: 'Full mobile canvas ratio for screen-level composition',
  },
]

const chartPatterns = [
  { module: 'Daily donut charts', ratio: '1:1', note: 'Preserve circle geometry and label alignment' },
  { module: 'Weekly bars', ratio: '4:3', note: 'Balances readability and vertical rhythm on mobile' },
  { module: 'Monthly line chart', ratio: '16:9', note: 'Wide ratio for temporal trend scanning' },
  { module: 'Calendar bottom sheet', ratio: '4:5', note: 'Portrait ratio optimized for touch navigation' },
]

const meta: Meta = {
  title: 'Foundations/Aspect Ratio',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const AspectRatioSystem: Story = {
  render: () => (
    <section className="docs-page">
      <header className="docs-hero">
        <h1 className="docs-title">Aspect Ratio</h1>
        <p className="docs-copy">
          Aspect ratio rules keep image and media layouts stable across devices.
        </p>
      </header>

      <div className="docs-ratio-list">
        {ratios.map((ratio) => (
          <article key={ratio.label} className="docs-ratio-row">
            <div className="docs-ratio-preview-wrap">
              <div className="docs-ratio-box" style={{ aspectRatio: ratio.value }}>
                {ratio.label === '1:1' ? (
                  <div className="docs-ratio-avatar">
                    <img src={ratio.src} alt={`${ratio.label} example`} style={{ objectFit: ratio.fit }} />
                  </div>
                ) : (
                  <img src={ratio.src} alt={`${ratio.label} example`} style={{ objectFit: ratio.fit }} />
                )}
              </div>
            </div>

            <div className="docs-ratio-meta">
              <h3>{ratio.label}</h3>
              <p>{ratio.usage}</p>
              <div className="docs-ratio-meta-line">
                <span className="docs-token">ratio {ratio.value}</span>
                <span className="docs-token">frame {ratio.frame}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <article className="docs-card docs-stack">
        <h3>Application Map</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Screen</th>
              <th>Element</th>
              <th>Ratio</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {realAppReferences.map((item) => (
              <tr key={`${item.screen}-${item.element}`}>
                <td>{item.screen}</td>
                <td>{item.element}</td>
                <td><strong>{item.ratio}</strong></td>
                <td>{item.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Stats Ratios</h3>
        <table className="docs-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Recommended ratio</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            {chartPatterns.map((item) => (
              <tr key={item.module}>
                <td>{item.module}</td>
                <td><strong>{item.ratio}</strong></td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="docs-card docs-stack">
        <h3>Tile Transition</h3>
        <div className="docs-ratio-transition">
          <div className="docs-ratio-transition-box is-square">
            <span>Grid</span>
            <code>1:1</code>
          </div>
          <div className="docs-ratio-transition-arrow">→</div>
          <div className="docs-ratio-transition-box is-portrait">
            <span>Expanded</span>
            <code>3:4</code>
          </div>
        </div>
      </article>
    

      <DocsPager
        prevHref="?path=/story/foundations-focus--focus-system"
        prevLabel="Foundations / Focus"
        nextHref="?path=/story/foundations-borders-radius--borders-and-radius"
        nextLabel="Foundations / Borders & Radius"
      />
    </section>
  ),
}
