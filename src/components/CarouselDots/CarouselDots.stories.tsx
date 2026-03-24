import type { Meta, StoryObj } from '@storybook/react-vite'
import { CarouselDots } from './CarouselDots'

const meta: Meta<typeof CarouselDots> = {
  title: 'Components/Navigation/Carousel Dots',
  component: CarouselDots,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  args: {
    slideCount: 4,
    activeIndex: 0,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, borderRadius: 12, background: '#12282e' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CarouselDots>

export const Base: Story = {}

export const Middle: Story = {
  args: {
    slideCount: 6,
    activeIndex: 2,
  },
}
