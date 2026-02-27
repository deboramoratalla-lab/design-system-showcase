import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Wordmark',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const WordmarkSystem: Story = {
  render: () => (
    <div className="brand-page">
      <img className="brand-media" src="/brand/03-wordmark.svg" alt="Wordmark" />
      <img className="brand-media" src="/brand/03-wordmark-variants.svg" alt="Wordmark variants" />
    </div>
  ),
}
