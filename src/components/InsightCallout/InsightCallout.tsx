import * as React from 'react'
import './InsightCallout.css'

export type InsightCalloutTone = 'positive' | 'neutral' | 'warning'

export interface InsightCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  tone?: InsightCalloutTone
  icon?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const InsightCallout = React.forwardRef<HTMLDivElement, InsightCalloutProps>(
  ({ title, description, tone = 'neutral', icon, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-insight-callout', className)} data-tone={tone} {...rest}>
        {icon ? <span className="ds-insight-callout__icon" aria-hidden>{icon}</span> : null}
        <div className="ds-insight-callout__copy">
          <h3 className="ds-insight-callout__title">{title}</h3>
          <p className="ds-insight-callout__description">{description}</p>
        </div>
      </div>
    )
  },
)

InsightCallout.displayName = 'InsightCallout'
