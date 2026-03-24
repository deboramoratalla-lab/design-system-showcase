import * as React from 'react'
import './Card.css'

export type CardVariant = 'elevated' | 'outlined' | 'subtle'
export type CardPadding = 'sm' | 'md' | 'lg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  interactive?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'outlined', padding = 'md', interactive = false, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx('ds-card', className)}
        data-variant={variant}
        data-padding={padding}
        data-interactive={interactive ? 'true' : undefined}
        {...rest}
      />
    )
  },
)

Card.displayName = 'Card'
