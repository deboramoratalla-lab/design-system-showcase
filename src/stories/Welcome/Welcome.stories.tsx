import type { MouseEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import './Welcome.css'

type IndexItem = {
  href: string
}

type IndexSection = {
  title: string
  subtitle: string
  tone: 'tokens' | 'brand' | 'components'
  item: IndexItem
}

const sections: IndexSection[] = [
  {
    title: 'Foundations',
    subtitle: 'Core rules and token architecture',
    tone: 'tokens',
    item: { href: '?path=/story/foundations-design-tokens--token-index' },
  },
  {
    title: 'Brand',
    subtitle: 'Identity and expression',
    tone: 'brand',
    item: { href: '?path=/story/brand-logo--logo-system' },
  },
  {
    title: 'Components',
    subtitle: 'Production UI blocks',
    tone: 'components',
    item: { href: '?path=/docs/components-primitives-avatar--docs' },
  },
]

const toManagerPath = (href: string) => {
  if (href.startsWith('?path=')) return `/${href}`
  if (href.startsWith('/?path=')) return href
  return href
}

const goToStory = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const targetWindow = window.parent ?? window
  targetWindow.location.assign(toManagerPath(href))
}

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
        <h1 className="welcome-title">Welcome to TAP Design System</h1>
        <p className="welcome-copy">
          A single source of truth for TAP UI decisions. Start from foundations, align with brand,
          then implement production-ready components.
        </p>
      </header>

      <section className="welcome-intro">
        <h2>How to use this space</h2>
        <ul>
          <li>Use <strong>Foundations</strong> to understand rules, scales, and token structure.</li>
          <li>Use <strong>Brand</strong> to apply visual identity consistently.</li>
          <li>Use <strong>Components</strong> to build and ship aligned UI faster.</li>
        </ul>
      </section>

      <section className="welcome-shortcuts">
        <h2>Shortcuts</h2>
        <div className="welcome-grid">
          {sections.map((section) => (
            <a
              key={section.title}
              className={`welcome-card welcome-card-${section.tone}`}
              href={toManagerPath(section.item.href)}
              onClick={goToStory(section.item.href)}
            >
              <div className="welcome-card-art" />
              <div className="welcome-card-body">
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  ),
}
