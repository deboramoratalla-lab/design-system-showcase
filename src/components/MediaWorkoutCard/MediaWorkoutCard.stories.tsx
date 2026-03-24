import type { Meta, StoryObj } from '@storybook/react-vite'
import { MediaWorkoutCard } from './MediaWorkoutCard'
import '../../stories/Documentation/DocsPages.css'
import './MediaWorkoutCard.docs.css'

const meta: Meta<typeof MediaWorkoutCard> = {
  title: 'Components/Patterns/Media Workout Card',
  component: MediaWorkoutCard,
  parameters: { layout: 'centered' },
  args: {
    title: 'Your mental workout',
    description: "Once you start the video, you'll need to watch it to the end. Stay focused and make it count!",
    statusLabel: 'To do',
    ctaLabel: 'Start mental workout',
  },
}

export default meta

type Story = StoryObj<typeof MediaWorkoutCard>

export const Base: Story = {}

export const WithImage: Story = {
  args: {
    thumbnailSrc:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
  },
}
