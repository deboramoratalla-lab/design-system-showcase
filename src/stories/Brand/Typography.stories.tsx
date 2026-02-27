import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'

const meta: Meta = {
  title: 'Brand/Typography',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Typography: Story = {
  render: () => (
    <div className="brand-page">
      <img className="brand-media" src="/brand/05-typography-gustavo-01.svg" alt="Typography Gustavo 01" />
      <img className="brand-media" src="/brand/05-typography-gustavo-02.svg" alt="Typography Gustavo 02" />
      <img className="brand-media" src="/brand/05-typography-surt-01.svg" alt="Typography Surt 01" />
      <img className="brand-media" src="/brand/05-typography-surt-02.svg" alt="Typography Surt 02" />
    </div>
  ),
}
