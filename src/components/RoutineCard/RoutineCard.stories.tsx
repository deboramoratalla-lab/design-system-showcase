import type { Meta, StoryObj } from '@storybook/react-vite'
import { Moon, Sun } from 'lucide-react'
import { RoutineCard } from './RoutineCard'
import '../../stories/Documentation/DocsPages.css'
import './RoutineCard.docs.css'

const meta: Meta<typeof RoutineCard> = {
  title: 'Components/Patterns/Routine Card',
  component: RoutineCard,
  parameters: { layout: 'centered' },
  args: {
    title: 'Morning Routine',
    description: 'Time to make progress, your goals are waiting.',
    stepsDone: 0,
    stepsTotal: 2,
    tone: 'blue',
    state: 'todo',
  },
}

export default meta

type Story = StoryObj<typeof RoutineCard>

export const Base: Story = {}

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '12px' }}>
      <RoutineCard {...args} state="todo" tone="blue" icon={<Sun />} />
      <RoutineCard {...args} state="inProgress" tone="orange" stepsDone={1} icon={<Sun />} />
      <RoutineCard {...args} state="done" tone="green" stepsDone={2} />
      <RoutineCard {...args} state="locked" tone="lilac" title="Night Routine" icon={<Moon />} />
    </div>
  ),
}
