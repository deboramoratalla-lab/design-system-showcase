import type { Meta, StoryObj } from '@storybook/react-vite'
import { CarouselArrowButton } from './CarouselArrowButton'

const meta: Meta<typeof CarouselArrowButton> = {
  title: 'Components/Navigation/Carousel Arrow Button',
  component: CarouselArrowButton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  args: {
    direction: 'right',
    visualState: 'active',
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

type Story = StoryObj<typeof CarouselArrowButton>

export const Active: Story = {}

export const Inactive: Story = {
  args: {
    visualState: 'inactive',
  },
}

export const Pressed: Story = {
  args: {
    visualState: 'pressed',
  },
}
