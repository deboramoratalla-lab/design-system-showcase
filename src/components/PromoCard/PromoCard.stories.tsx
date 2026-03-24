import type { Meta, StoryObj } from '@storybook/react-vite'
import { PromoCard } from './PromoCard'
import '../../stories/Documentation/DocsPages.css'
import './PromoCard.docs.css'

const meta: Meta<typeof PromoCard> = {
  title: 'Components/Patterns/Promo Card',
  component: PromoCard,
  parameters: { layout: 'centered' },
  args: {
    title: 'Training plan',
    subtitle: 'Nov-23th / Dec-1st',
  },
}

export default meta

type Story = StoryObj<typeof PromoCard>

export const Base: Story = {}

export const WithImage: Story = {
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
  },
}
