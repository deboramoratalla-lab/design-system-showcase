import * as React from 'react'
import './ResponseCard.css'

export type ResponseCardTone = 'blue' | 'green' | 'orange' | 'lilac'

export interface ResponseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: ResponseCardTone
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const ResponseCard = React.forwardRef<HTMLDivElement, ResponseCardProps>(
  ({ tone = 'blue', className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-response-card', className)} data-tone={tone} {...rest}>
        <div className="ds-response-card__body">{children}</div>
      </div>
    )
  },
)

ResponseCard.displayName = 'ResponseCard'
