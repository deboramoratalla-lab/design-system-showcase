import * as React from 'react'
import { TextStack } from '../TextStack'
import './StatsDateNavigator.css'

export interface StatsDateNavigatorProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  detail: string
  leadingIcon?: React.ReactNode
  onLeadingClick?: () => void
  leadingButtonLabel?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const StatsDateNavigator = React.forwardRef<HTMLDivElement, StatsDateNavigatorProps>(
  ({ label, detail, leadingIcon, onLeadingClick, leadingButtonLabel = 'Change date', className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-stats-date-navigator', className)} {...rest}>
        <button type="button" className="ds-stats-date-navigator__button" onClick={onLeadingClick} aria-label={leadingButtonLabel}>
          {leadingIcon}
        </button>

        <TextStack
          className="ds-stats-date-navigator__copy"
          title={<strong className="ds-stats-date-navigator__label">{label}</strong>}
          subtitle={<span className="ds-stats-date-navigator__detail">{detail}</span>}
        />
      </div>
    )
  },
)

StatsDateNavigator.displayName = 'StatsDateNavigator'
