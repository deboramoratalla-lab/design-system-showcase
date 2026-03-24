import type { Meta, StoryObj } from '@storybook/react-vite'
import { RoutineProgressMeta } from './RoutineProgressMeta'

const meta: Meta<typeof RoutineProgressMeta> = {
  title: 'Components/Feedback & Status/Routine Progress Meta',
  component: RoutineProgressMeta,
  parameters: { layout: 'centered' },
  args: {
    title: 'Morning Routine',
    description: 'Time to make progress, your goals are waiting.',
    statusLabel: '1/2 steps',
    statusTone: 'blue',
  },
}

export default meta

type Story = StoryObj<typeof RoutineProgressMeta>

export const Base: Story = {}
