import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, Inbox, UserRound } from 'lucide-react'
import { useState } from 'react'
import { BottomTabBar } from './BottomTabBar'

const items = [
  { key: 'home', label: 'Home', icon: <Home />, selectedIcon: <Home fill="currentColor" /> },
  { key: 'inbox', label: 'Inbox', icon: <Inbox />, selectedIcon: <Inbox fill="currentColor" />, notification: true },
  { key: 'profile', label: 'Profile', icon: <UserRound />, selectedIcon: <UserRound fill="currentColor" /> },
]

const meta: Meta<typeof BottomTabBar> = {
  title: 'Components/Navigation/Patterns/Bottom Tab Bar',
  component: BottomTabBar,
  parameters: { layout: 'centered' },
  args: {
    items,
    activeKey: 'home',
  },
}

export default meta

type Story = StoryObj<typeof BottomTabBar>

export const Interactive: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey)

    return <BottomTabBar {...args} activeKey={activeKey} onChange={setActiveKey} />
  },
}

export const DisabledItem: Story = {
  args: {
    items: items.map((item) => (item.key === 'profile' ? { ...item, disabled: true } : item)),
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey)

    return <BottomTabBar {...args} activeKey={activeKey} onChange={setActiveKey} />
  },
}
