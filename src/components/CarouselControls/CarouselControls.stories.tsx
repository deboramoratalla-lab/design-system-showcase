import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CarouselArrowButton } from '../CarouselArrowButton'
import { CarouselDots } from '../CarouselDots'
import { CarouselControls } from './CarouselControls'

const meta: Meta<typeof CarouselControls> = {
  title: 'Components/Navigation/Carousel Controls',
  component: CarouselControls,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  args: {
    slideCount: 5,
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

type Story = StoryObj<typeof CarouselControls>

export const Base: Story = {
  render: (args) => {
    const initialActiveIndex = args.activeIndex ?? 0
    const slideCount = args.slideCount ?? 1
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex)
    const maxIndex = slideCount - 1

    return (
      <CarouselControls
        {...args}
        slideCount={slideCount}
        activeIndex={activeIndex}
        previousDisabled={activeIndex <= 0}
        nextDisabled={activeIndex >= maxIndex}
        onPrevious={() => setActiveIndex((value) => Math.max(value - 1, 0))}
        onNext={() => setActiveIndex((value) => Math.min(value + 1, maxIndex))}
      />
    )
  },
}

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <CarouselControls slideCount={2} activeIndex={0} previousDisabled />
      <CarouselControls slideCount={3} activeIndex={1} />
      <CarouselControls slideCount={5} activeIndex={4} nextDisabled />
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <CarouselArrowButton direction="left" visualState="pressed" aria-label="Previous slide" />
        <CarouselDots slideCount={2} activeIndex={0} />
        <CarouselArrowButton direction="right" visualState="pressed" aria-label="Next slide" />
      </div>
    </div>
  ),
}
