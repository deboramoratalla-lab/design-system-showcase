import type { Meta, StoryObj } from '@storybook/react-vite'
import './Welcome.css'

type IndexItem = {
  label: string
  href: string
}

type IndexSection = {
  title: string
  subtitle: string
  tone: 'tokens' | 'color' | 'type' | 'layout' | 'brand' | 'components'
  items: IndexItem[]
}

const sections: IndexSection[] = [
  {
    title: 'Design tokens',
    subtitle: 'Architecture and governance',
    tone: 'tokens',
    items: [
      { label: 'Foundations / Overview', href: '?path=/story/foundations-overview--overview' },
      { label: 'Foundations / Design Tokens', href: '?path=/story/foundations-design-tokens--token-index' },
      { label: 'Foundations / Semantic Tokens', href: '?path=/story/foundations-semantic-tokens--overview' },
    ],
  },
  {
    title: 'Color',
    subtitle: 'Brand and primitive scales',
    tone: 'color',
    items: [
      { label: 'Foundations / Color / Brand Colors', href: '?path=/story/foundations-color-brand-colors--brand-colors' },
      { label: 'Foundations / Color / Primitives', href: '?path=/story/foundations-color-primitives--color-primitives' },
      { label: 'Brand / Colors', href: '?path=/story/brand-colors--colors' },
    ],
  },
  {
    title: 'Typography',
    subtitle: 'Type rules and scales',
    tone: 'type',
    items: [
      { label: 'Foundations / Typography', href: '?path=/story/foundations-typography--typography-scale' },
      { label: 'Brand / Typography', href: '?path=/story/brand-typography--typography' },
    ],
  },
  {
    title: 'Layout',
    subtitle: 'Spacing, grid and constraints',
    tone: 'layout',
    items: [
      { label: 'Foundations / Spacing', href: '?path=/story/foundations-spacing--spacing-scale' },
      { label: 'Foundations / Layout', href: '?path=/story/foundations-layout--mobile-grid' },
      { label: 'Foundations / Breakpoints', href: '?path=/story/foundations-breakpoints--breakpoint-system' },
      { label: 'Foundations / Borders & Radius', href: '?path=/story/foundations-borders-radius--borders-and-radius' },
      { label: 'Foundations / Elevations', href: '?path=/story/foundations-elevations--elevation-system' },
      { label: 'Foundations / Focus', href: '?path=/story/foundations-focus--focus-system' },
      { label: 'Foundations / Aspect Ratio', href: '?path=/story/foundations-aspect-ratio--aspect-ratio-system' },
    ],
  },
  {
    title: 'Brand',
    subtitle: 'Identity and expression',
    tone: 'brand',
    items: [
      { label: 'Brand / Overview', href: '?path=/story/brand-overview--cover' },
      { label: 'Brand / Logo', href: '?path=/story/brand-logo--logo-system' },
      { label: 'Brand / Wordmark', href: '?path=/story/brand-wordmark--wordmark-system' },
      { label: 'Brand / Iconography', href: '?path=/story/brand-iconography--iconography' },
      { label: 'Brand / Photography', href: '?path=/story/brand-photography--photography' },
    ],
  },
  {
    title: 'Components',
    subtitle: 'Production UI blocks',
    tone: 'components',
    items: [
      { label: 'Button / Playground', href: '?path=/story/button--playground' },
      { label: 'Button / Figma Playground', href: '?path=/story/button--figma-playground' },
      { label: 'Button / Usage Matrix', href: '?path=/story/button--figma-usage-matrix' },
    ],
  },
]

const quickLinks = [
  { label: 'Foundations', href: '?path=/story/foundations-overview--overview' },
  { label: 'Brand', href: '?path=/story/brand-overview--cover' },
  { label: 'Components', href: '?path=/story/button--playground' },
]

const meta: Meta = {
  title: 'Welcome/Start Here',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const StartHere: Story = {
  render: () => (
    <section className="welcome-page">
      <header className="welcome-header">
        <img className="welcome-logo" src="/brand/wordmark-dark.svg" alt="TAP Mindset" />
        <h1 className="welcome-title">Welcome to TAP Design System</h1>
        <p className="welcome-copy">
          This index links every section in the system so teams can navigate from principles to implementation.
        </p>
      </header>

      <nav className="welcome-quicklinks" aria-label="Primary sections">
        {quickLinks.map((item) => (
          <a key={item.label} href={item.href} className="welcome-quicklink">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="welcome-grid">
        {sections.map((section) => (
          <article key={section.title} className={`welcome-card welcome-card-${section.tone}`}>
            <div className="welcome-card-art" />
            <div className="welcome-card-body">
              <h3>{section.title}</h3>
              <p>{section.subtitle}</p>
              <ul className="welcome-links">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  ),
}
