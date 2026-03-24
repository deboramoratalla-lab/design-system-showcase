import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { BarChart3, FileText, Home, UserRound } from 'lucide-react'
import { CoachTabBar, type CoachTabBarIconConfig, type CoachTabKey } from './CoachTabBar'

const iconSet: Record<CoachTabKey, CoachTabBarIconConfig> = {
  home: { icon: <Home />, selectedIcon: <Home fill="currentColor" /> },
  athletes: { icon: <BarChart3 />, selectedIcon: <BarChart3 fill="currentColor" /> },
  trainingPlan: { icon: <FileText />, selectedIcon: <FileText fill="currentColor" /> },
  profile: { icon: <UserRound />, selectedIcon: <UserRound fill="currentColor" /> },
}

const meta: Meta<typeof CoachTabBar> = {
  title: 'Components/Navigation/Product/Coach Tab Bar',
  component: CoachTabBar,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof CoachTabBar>

export const Default: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState<CoachTabKey>('athletes')
    return <CoachTabBar activeKey={activeKey} onChange={setActiveKey} icons={iconSet} />
  },
}
