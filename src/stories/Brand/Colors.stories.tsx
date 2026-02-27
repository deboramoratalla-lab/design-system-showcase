import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Colors',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Colors: Story = {
  render: () => (
    <div className="brand-page">
      <img className="brand-media" src="/brand/04-colors-primary-secondary.svg" alt="Colors primary secondary" />
      <img className="brand-media" src="/brand/04-colors-highlight.svg" alt="Colors highlight" />
    </div>
  ),
}
