import * as React from 'react'
import './MetricLegendList.css'

export interface MetricLegendItem {
  label: string
  value: number | string
  color: string
}

export interface MetricLegendListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MetricLegendItem[]
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MetricLegendList = React.forwardRef<HTMLUListElement, MetricLegendListProps>(
  ({ items, className, ...rest }, ref) => {
    return (
      <ul ref={ref} className={cx('ds-metric-legend-list', className)} {...rest}>
        {items.map((item) => (
          <li key={item.label} className="ds-metric-legend-list__item">
            <span className="ds-metric-legend-list__label-wrap">
              <span
                className="ds-metric-legend-list__dot"
                style={{ backgroundColor: item.color }}
                aria-hidden
              />
              <span className="ds-metric-legend-list__label">{item.label}</span>
            </span>
            <span className="ds-metric-legend-list__value">{item.value}</span>
          </li>
        ))}
      </ul>
    )
  },
)

MetricLegendList.displayName = 'MetricLegendList'
