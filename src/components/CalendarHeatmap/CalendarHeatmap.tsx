import * as React from 'react'
import './CalendarHeatmap.css'

export type CalendarHeatmapDayState = 'empty' | 'partial' | 'complete' | 'selected'

export interface CalendarHeatmapDay {
  date: string
  label: string
  state: CalendarHeatmapDayState
}

export interface CalendarHeatmapProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  monthLabel: string
  yearLabel: string
  days: CalendarHeatmapDay[]
  weekdays?: string[]
  onSelectDay?: (date: string) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const CalendarHeatmap = React.forwardRef<HTMLDivElement, CalendarHeatmapProps>(
  (
    {
      monthLabel,
      yearLabel,
      days,
      weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      onSelectDay,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cx('ds-calendar-heatmap', className)} {...rest}>
        <div className="ds-calendar-heatmap__header">
          <span className="ds-calendar-heatmap__month">{monthLabel}</span>
          <span className="ds-calendar-heatmap__year">{yearLabel}</span>
        </div>

        <div className="ds-calendar-heatmap__weekday-row" aria-hidden>
          {weekdays.map((day, index) => (
            <span key={`${day}-${index}`} className="ds-calendar-heatmap__weekday">
              {day}
            </span>
          ))}
        </div>

        <div className="ds-calendar-heatmap__grid">
          {days.map((day) => (
            <button
              key={day.date}
              type="button"
              className="ds-calendar-heatmap__day"
              data-state={day.state}
              onClick={() => onSelectDay?.(day.date)}
              aria-label={`${day.label}, ${day.state}`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>
    )
  },
)

CalendarHeatmap.displayName = 'CalendarHeatmap'
