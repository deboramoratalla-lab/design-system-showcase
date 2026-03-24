import type { Meta, StoryObj } from '@storybook/react-vite'
import { DayContextCard } from './DayContextCard'
import '../../stories/Documentation/DocsPages.css'
import './DayContextCard.docs.css'

const meta: Meta<typeof DayContextCard> = {
  title: 'Components/Patterns/Day Context Card',
  component: DayContextCard,
  parameters: { layout: 'centered' },
  args: {
    dayType: 'practice',
    weekday: 'Saturday',
    date: 'Oct 30, 2024',
  },
}

export default meta

type Story = StoryObj<typeof DayContextCard>

export const Base: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '12px' }}>
      <DayContextCard {...args} dayType="practice" />
      <DayContextCard {...args} dayType="rest" />
      <DayContextCard {...args} dayType="competition" />
    </div>
  ),
}
