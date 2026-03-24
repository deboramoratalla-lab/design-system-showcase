import * as React from 'react'
import './BottomTabBarItem.css'

export interface BottomTabBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon: React.ReactNode
  selectedIcon?: React.ReactNode
  active?: boolean
  notification?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const BottomTabBarItem = React.forwardRef<HTMLButtonElement, BottomTabBarItemProps>(
  ({ label, icon, selectedIcon, active = false, notification = false, className, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-bottom-tab-bar-item', className)}
        data-active={active ? 'true' : undefined}
        {...rest}
      >
        <span className="ds-bottom-tab-bar-item__icon" aria-hidden>
          {active && selectedIcon ? selectedIcon : icon}
          {notification ? <span className="ds-bottom-tab-bar-item__notification-dot" /> : null}
        </span>
        <span className="ds-bottom-tab-bar-item__label">{label}</span>
      </button>
    )
  },
)

BottomTabBarItem.displayName = 'BottomTabBarItem'
