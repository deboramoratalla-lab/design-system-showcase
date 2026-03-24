import type { Meta, StoryObj } from '@storybook/react-vite'
import './BrandDocs.css'
import { DocsPager } from '../Documentation/DocsPager'

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
    

      <DocsPager
        prevHref="?path=/story/brand-logo--logo-system"
        prevLabel="Brand / Logo"
        nextHref="?path=/story/brand-colors--colors"
        nextLabel="Brand / Colors"
      />
</div>
  ),
}
