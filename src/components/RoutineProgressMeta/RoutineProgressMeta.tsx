import * as React from 'react'
import { StatusTag, type StatusTagTone } from '../StatusTag'
import './RoutineProgressMeta.css'

export interface RoutineProgressMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  statusLabel: string
  statusTone?: StatusTagTone
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const RoutineProgressMeta = React.forwardRef<HTMLDivElement, RoutineProgressMetaProps>(
  ({ title, description, statusLabel, statusTone = 'blue', className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-routine-progress-meta', className)} {...rest}>
        <div className="ds-routine-progress-meta__row">
          <span className="ds-routine-progress-meta__title">{title}</span>
          <StatusTag className="ds-routine-progress-meta__badge" tone={statusTone} label={statusLabel} />
        </div>

        <span className="ds-routine-progress-meta__description">{description}</span>
      </div>
    )
  },
)

RoutineProgressMeta.displayName = 'RoutineProgressMeta'
