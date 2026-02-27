import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Overview',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Cover: Story = {
  render: () => (
    <div className="brand-page">
      <header className="brand-hero">
        <h1 className="brand-title">Brand Guidelines</h1>
        <p className="brand-subtitle">
          This section documents the visual identity of TAP Mindset and explains how each brand
          element should be applied across product and communication touchpoints.
        </p>
      </header>

      <section className="brand-grid-2">
        <article className="brand-card">
          <h3>What You Will Find</h3>
          <p>
            Logo system, wordmark variants, brand color direction, typography foundations,
            iconography language, and photography principles.
          </p>
        </article>

        <article className="brand-card">
          <h3>How To Use It</h3>
          <p>
            Use these guidelines as the single source of truth before creating interfaces, slides,
            marketing pieces, or product visuals.
          </p>
        </article>
      </section>

      <img className="brand-media" src="/brand/01-portada.svg" alt="TAP cover" />
    </div>
  ),
}
