import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowLeft, X } from 'lucide-react'
import { AppHeader } from './AppHeader'

const meta: Meta<typeof AppHeader> = {
  title: 'Components/Navigation/Patterns/App Header',
  component: AppHeader,
  parameters: { layout: 'centered' },
  args: {
    title: 'Stats',
    subtitle: 'Track your progress and stay on course.',
  },
}

export default meta

type Story = StoryObj<typeof AppHeader>

export const Default: Story = {}

export const WithActions: Story = {
  args: {
    title: 'Pre-Practice Routine',
    subtitle: '1 of 3',
    leadingIcon: <ArrowLeft />,
    trailingIcon: <X />,
    centerTitle: true,
  },
}
