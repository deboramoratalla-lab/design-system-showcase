import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'
import { DocsPager } from '../Documentation/DocsPager'

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
    

      <DocsPager
        prevHref="?path=/story/foundations-borders-radius--borders-and-radius"
        prevLabel="Foundations / Borders & Radius"
        nextHref="?path=/story/brand-wordmark--wordmark-system"
        nextLabel="Brand / Wordmark"
      />
</div>
  ),
}
