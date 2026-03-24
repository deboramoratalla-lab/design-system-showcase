import * as React from 'react'
import { BottomTabBar, type BottomNavigationItemConfig } from '../BottomTabBar'

export type CoachTabKey = 'home' | 'athletes' | 'trainingPlan' | 'profile'

export interface CoachTabBarIconConfig {
  icon: React.ReactNode
  selectedIcon?: React.ReactNode
  disabled?: boolean
}

export interface CoachTabBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  activeKey: CoachTabKey
  onChange?: (key: CoachTabKey) => void
  icons: Record<CoachTabKey, CoachTabBarIconConfig>
}

const labels: Record<CoachTabKey, string> = {
  home: 'Home',
  athletes: 'Athletes',
  trainingPlan: 'Training Plan',
  profile: 'Profile',
}

export const CoachTabBar = React.forwardRef<HTMLElement, CoachTabBarProps>(
  ({ activeKey, onChange, icons, ...rest }, ref) => {
    const items: BottomNavigationItemConfig[] = (Object.keys(labels) as CoachTabKey[]).map((key) => ({
      key,
      label: labels[key],
      icon: icons[key].icon,
      selectedIcon: icons[key].selectedIcon,
      disabled: icons[key].disabled,
    }))

    return <BottomTabBar ref={ref} items={items} activeKey={activeKey} onChange={(key) => onChange?.(key as CoachTabKey)} {...rest} />
  },
)

CoachTabBar.displayName = 'CoachTabBar'
