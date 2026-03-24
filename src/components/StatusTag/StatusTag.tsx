import * as React from 'react'
import './StatusTag.css'

export type StatusTagTone = 'blue' | 'green' | 'orange' | 'lilac' | 'neutral'

export interface StatusTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTagTone
  label?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const StatusTag = React.forwardRef<HTMLSpanElement, StatusTagProps>(
  ({ tone = 'blue', label, className, children, ...rest }, ref) => {
    const content = children ?? label ?? 'Label'

    return (
      <span ref={ref} className={cx('ds-status-tag', className)} data-tone={tone} {...rest}>
        <span className="ds-status-tag__label">{content}</span>
      </span>
    )
  },
)

StatusTag.displayName = 'StatusTag'
