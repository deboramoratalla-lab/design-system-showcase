import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home } from 'lucide-react'
import { BottomTabBarItem } from './BottomTabBarItem'

const meta: Meta<typeof BottomTabBarItem> = {
  title: 'Components/Navigation/Primitives/Bottom Tab Bar Item',
  component: BottomTabBarItem,
  parameters: { layout: 'centered' },
  args: {
    label: 'Home',
    icon: <Home />,
    selectedIcon: <Home fill="currentColor" />,
  },
}

export default meta

type Story = StoryObj<typeof BottomTabBarItem>

export const Default: Story = {}

export const Active: Story = {
  args: {
    active: true,
  },
}

export const WithNotification: Story = {
  args: {
    notification: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
