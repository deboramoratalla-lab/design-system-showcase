import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDays } from 'lucide-react'
import { StatsDateNavigator } from './StatsDateNavigator'

const meta: Meta<typeof StatsDateNavigator> = {
  title: 'Components/Navigation/Patterns/Stats Date Navigator',
  component: StatsDateNavigator,
  parameters: { layout: 'centered' },
  args: {
    label: 'Today',
    detail: 'Saturday Mar 22, 2025',
    leadingIcon: <CalendarDays />,
  },
}

export default meta

type Story = StoryObj<typeof StatsDateNavigator>

export const Default: Story = {}

export const MonthView: Story = {
  args: {
    label: 'Month',
    detail: 'March 2025',
  },
}
