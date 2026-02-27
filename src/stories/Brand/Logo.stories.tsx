import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Logo',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const LogoSystem: Story = {
  render: () => (
    <div className="brand-page">
      <img className="brand-media" src="/brand/02-logo-black.svg" alt="Logo black" />
      <img className="brand-media" src="/brand/02-logo-white.svg" alt="Logo white" />
      <img className="brand-media" src="/brand/02-logo-color.svg" alt="Logo color" />
      <img className="brand-media" src="/brand/02-logo-inspiration.svg" alt="Logo inspiration" />
    </div>
  ),
}
