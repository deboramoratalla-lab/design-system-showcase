import * as React from 'react'
import { Badge } from '../Badge'
import { MetricLegendList, type MetricLegendItem } from '../MetricLegendList'
import './MetricSection.css'

export interface MetricSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  scoreLabel?: React.ReactNode
  chart: React.ReactNode
  legendItems: MetricLegendItem[]
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MetricSection = React.forwardRef<HTMLElement, MetricSectionProps>(
  ({ title, scoreLabel, chart, legendItems, className, ...rest }, ref) => {
    return (
      <section ref={ref} className={cx('ds-metric-section', className)} {...rest}>
        <div className="ds-metric-section__head">
          <h2 className="ds-metric-section__title">{title}</h2>
          {scoreLabel ? <Badge type="value" size="sm">{scoreLabel}</Badge> : null}
        </div>

        <div className="ds-metric-section__body">
          <div className="ds-metric-section__chart">{chart}</div>
          <MetricLegendList items={legendItems} />
        </div>
      </section>
    )
  },
)

MetricSection.displayName = 'MetricSection'
