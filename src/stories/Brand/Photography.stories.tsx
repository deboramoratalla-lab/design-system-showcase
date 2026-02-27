import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Photography',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Photography: Story = {
  render: () => (
    <div className="brand-page">
      <img className="brand-media" src="/brand/07-photography-1.svg" alt="Photography 1" />
      <img className="brand-media" src="/brand/07-photography-2.svg" alt="Photography 2" />
    </div>
  ),
}
