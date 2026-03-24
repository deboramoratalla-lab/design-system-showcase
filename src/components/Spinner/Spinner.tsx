import * as React from 'react'
import './Spinner.css'

export type SpinnerSize = 'sm' | 'md' | 'lg'
export type SpinnerTone = 'default' | 'inverse'

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize
  tone?: SpinnerTone
  label?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = 'md', tone = 'default', label = 'Loading', className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cx('ds-spinner', className)}
        data-size={size}
        data-tone={tone}
        role="status"
        aria-label={label}
        {...rest}
      />
    )
  },
)

Spinner.displayName = 'Spinner'
