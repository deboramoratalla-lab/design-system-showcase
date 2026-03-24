import * as React from 'react'
import './MessageDateDivider.css'

export interface MessageDateDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MessageDateDivider = React.forwardRef<HTMLDivElement, MessageDateDividerProps>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-message-date-divider', className)} {...rest}>
        <span className="ds-message-date-divider__label">{label}</span>
      </div>
    )
  },
)

MessageDateDivider.displayName = 'MessageDateDivider'
