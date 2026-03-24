import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { BarChart3, HeartPulse, Home, Inbox, UserRound } from 'lucide-react'
import { AthleteTabBar, type AthleteTabBarIconConfig, type AthleteTabKey } from './AthleteTabBar'

const iconSet: Record<AthleteTabKey, AthleteTabBarIconConfig> = {
  home: { icon: <Home />, selectedIcon: <Home fill="currentColor" /> },
  ranking: { icon: <BarChart3 />, selectedIcon: <BarChart3 fill="currentColor" /> },
  stats: { icon: <HeartPulse />, selectedIcon: <HeartPulse fill="currentColor" /> },
  inbox: { icon: <Inbox />, selectedIcon: <Inbox fill="currentColor" /> },
  you: { icon: <UserRound />, selectedIcon: <UserRound fill="currentColor" /> },
}

const meta: Meta<typeof AthleteTabBar> = {
  title: 'Components/Navigation/Athlete Tab Bar',
  component: AthleteTabBar,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof AthleteTabBar>

export const Base: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState<AthleteTabKey>('stats')
    return <AthleteTabBar activeKey={activeKey} onChange={setActiveKey} icons={iconSet} />
  },
}

export const WithInboxNotification: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState<AthleteTabKey>('home')
    return <AthleteTabBar activeKey={activeKey} onChange={setActiveKey} icons={iconSet} inboxNotification />
  },
}
