import * as React from 'react'
import './Badge.css'

export type BadgeSize = 'sm' | 'lg'
export type BadgeState = 'default' | 'selected'
export type BadgeType = 'notification' | 'value'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: BadgeSize
  state?: BadgeState
  type?: BadgeType
  label?: string | number
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ size = 'lg', state = 'default', type = 'notification', label, className, children, ...rest }, ref) => {
    const content = children ?? label ?? (type === 'value' ? '12pt' : '8')

    return (
      <span
        ref={ref}
        className={cx('ds-badge', className)}
        data-size={size}
        data-state={state}
        data-type={type}
        {...rest}
      >
        <span className="ds-badge__label">{content}</span>
      </span>
    )
  },
)

Badge.displayName = 'Badge'
