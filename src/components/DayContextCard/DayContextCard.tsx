import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { TextStack } from '../TextStack'
import './DayContextCard.css'

export type DayContextCardDayType = 'practice' | 'rest' | 'competition'

export interface DayContextCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dayType: DayContextCardDayType
  weekday: string
  date: string
  title?: string
  trailingIcon?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

const LABEL_BY_DAY_TYPE: Record<DayContextCardDayType, string> = {
  practice: 'Practice day',
  rest: 'Rest day',
  competition: 'Competition day',
}

export const DayContextCard = React.forwardRef<HTMLButtonElement, DayContextCardProps>(
  ({ dayType, weekday, date, title, trailingIcon, className, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-day-context-card', className)}
        data-day-type={dayType}
        {...rest}
      >
        <TextStack
          className="ds-day-context-card__copy"
          title={<span className="ds-day-context-card__title">{title ?? LABEL_BY_DAY_TYPE[dayType]}</span>}
          subtitle={
            <span className="ds-day-context-card__meta">
              {weekday} <span aria-hidden> </span> {date}
            </span>
          }
        />

        <span className="ds-day-context-card__icon" aria-hidden>
          {trailingIcon ?? <ChevronDown />}
        </span>
      </button>
    )
  },
)

DayContextCard.displayName = 'DayContextCard'
