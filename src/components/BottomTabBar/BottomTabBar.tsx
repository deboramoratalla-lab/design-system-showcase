import * as React from 'react'
import { BottomTabBarItem } from '../BottomTabBarItem'
import './BottomTabBar.css'

export interface BottomNavigationItemConfig {
  key: string
  label: string
  icon: React.ReactNode
  selectedIcon?: React.ReactNode
  notification?: boolean
  disabled?: boolean
}

export interface BottomTabBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  items: BottomNavigationItemConfig[]
  activeKey: string
  onChange?: (key: string) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const BottomTabBar = React.forwardRef<HTMLElement, BottomTabBarProps>(
  ({ items, activeKey, onChange, className, ...rest }, ref) => {
    return (
      <nav ref={ref} className={cx('ds-bottom-tab-bar', className)} aria-label="Bottom navigation" {...rest}>
        <div className="ds-bottom-tab-bar__items">
          {items.map((item) => {
            const isActive = item.key === activeKey

            return (
              <BottomTabBarItem
                key={item.key}
                className="ds-bottom-tab-bar__item"
                active={isActive}
                label={item.label}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                notification={item.notification}
                disabled={item.disabled}
                onClick={() => onChange?.(item.key)}
              />
            )
          })}
        </div>
      </nav>
    )
  },
)

BottomTabBar.displayName = 'BottomTabBar'
