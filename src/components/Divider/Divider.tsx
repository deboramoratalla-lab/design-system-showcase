import * as React from 'react'
import './Divider.css'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerTone = 'subtle' | 'strong'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation
  tone?: DividerTone
  inset?: 'none' | 'sm' | 'md'
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', tone = 'subtle', inset = 'none', className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cx('ds-divider', className)}
        data-orientation={orientation}
        data-tone={tone}
        data-inset={inset}
        {...rest}
      />
    )
  },
)

Divider.displayName = 'Divider'
