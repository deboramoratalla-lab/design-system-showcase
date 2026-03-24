import * as React from 'react'
import { BottomTabBar, type BottomNavigationItemConfig } from '../BottomTabBar'

export type AthleteTabKey = 'home' | 'ranking' | 'stats' | 'inbox' | 'you'

export interface AthleteTabBarIconConfig {
  icon: React.ReactNode
  selectedIcon?: React.ReactNode
  disabled?: boolean
}

export interface AthleteTabBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  activeKey: AthleteTabKey
  onChange?: (key: AthleteTabKey) => void
  icons: Record<AthleteTabKey, AthleteTabBarIconConfig>
  inboxNotification?: boolean
}

const labels: Record<AthleteTabKey, string> = {
  home: 'Home',
  ranking: 'Ranking',
  stats: 'Stats',
  inbox: 'Inbox',
  you: 'You',
}

export const AthleteTabBar = React.forwardRef<HTMLElement, AthleteTabBarProps>(
  ({ activeKey, onChange, icons, inboxNotification = false, ...rest }, ref) => {
    const items: BottomNavigationItemConfig[] = (Object.keys(labels) as AthleteTabKey[]).map((key) => ({
      key,
      label: labels[key],
      icon: icons[key].icon,
      selectedIcon: icons[key].selectedIcon,
      disabled: icons[key].disabled,
      notification: key === 'inbox' ? inboxNotification : false,
    }))

    return <BottomTabBar ref={ref} items={items} activeKey={activeKey} onChange={(key) => onChange?.(key as AthleteTabKey)} {...rest} />
  },
)

AthleteTabBar.displayName = 'AthleteTabBar'
