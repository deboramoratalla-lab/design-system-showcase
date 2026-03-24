import * as React from 'react'
import './DonutChart.css'

export interface DonutChartSegment {
  label: string
  value: number
  color: string
}

export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  segments: DonutChartSegment[]
  size?: 'sm' | 'md'
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const DonutChart = React.forwardRef<HTMLDivElement, DonutChartProps>(
  ({ segments, size = 'md', className, style, ...rest }, ref) => {
    const total = segments.reduce((sum, item) => sum + Math.max(item.value, 0), 0) || 1
    let offset = 0

    const gradient = segments
      .map((segment) => {
        const start = (offset / total) * 100
        offset += Math.max(segment.value, 0)
        const end = (offset / total) * 100
        return `${segment.color} ${start}% ${end}%`
      })
      .join(', ')

    return (
      <div
        ref={ref}
        className={cx('ds-donut-chart', className)}
        data-size={size}
        role="img"
        aria-label={segments.map((segment) => `${segment.label}: ${segment.value}`).join(', ')}
        style={
          {
            ...(style as React.CSSProperties | undefined),
            ['--donut-gradient' as string]: `conic-gradient(${gradient})`,
          } as React.CSSProperties
        }
        {...rest}
      >
        <span className="ds-donut-chart__ring" aria-hidden />
      </div>
    )
  },
)

DonutChart.displayName = 'DonutChart'
