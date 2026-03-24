import * as React from 'react'
import './MetricBarList.css'

export interface MetricBarItem {
  label: string
  value: number
}

export interface MetricBarListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MetricBarItem[]
  max?: number
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MetricBarList = React.forwardRef<HTMLDivElement, MetricBarListProps>(
  ({ items, max = 100, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-metric-bar-list', className)} {...rest}>
        {items.map((item) => {
          const percentage = `${Math.round((Math.max(item.value, 0) / Math.max(max, 1)) * 100)}%`

          return (
            <div
              key={item.label}
              className="ds-metric-bar-list__row"
              style={{ ['--metric-bar-value' as string]: percentage } as React.CSSProperties}
            >
              <div className="ds-metric-bar-list__head">
                <span className="ds-metric-bar-list__label">{item.label}</span>
                <span className="ds-metric-bar-list__value">{item.value}%</span>
              </div>
              <span className="ds-metric-bar-list__bar" aria-hidden>
                <span className="ds-metric-bar-list__bar-fill" />
              </span>
            </div>
          )
        })}
      </div>
    )
  },
)

MetricBarList.displayName = 'MetricBarList'
