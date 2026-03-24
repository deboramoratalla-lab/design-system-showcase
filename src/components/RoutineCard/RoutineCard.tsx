import * as React from 'react'
import { RoutineProgressMeta } from '../RoutineProgressMeta'
import { ChevronRight, Check, Clock3 } from 'lucide-react'
import './RoutineCard.css'

export type RoutineCardState = 'todo' | 'inProgress' | 'done' | 'locked'
export type RoutineCardTone = 'blue' | 'orange' | 'green' | 'lilac'

export interface RoutineCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  description: string
  icon?: React.ReactNode
  stepsDone: number
  stepsTotal: number
  state?: RoutineCardState
  tone?: RoutineCardTone
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const RoutineCard = React.forwardRef<HTMLButtonElement, RoutineCardProps>(
  (
    {
      title,
      description,
      icon,
      stepsDone,
      stepsTotal,
      state = 'todo',
      tone = 'blue',
      className,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const safeTotal = Math.max(stepsTotal, 1)
    const safeDone = Math.min(Math.max(stepsDone, 0), safeTotal)
    const progressPercentage = `${Math.round((safeDone / safeTotal) * 100)}%`
    const statusLabel =
      state === 'locked' ? 'Blocked' : state === 'done' ? 'Complete' : `${safeDone}/${safeTotal} steps`
    const statusTone = state === 'locked' ? 'neutral' : tone

    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-routine-card', className)}
        data-tone={tone}
        data-state={state}
        style={{ ['--routine-progress' as string]: progressPercentage } as React.CSSProperties}
        {...rest}
      >
        <span className="ds-routine-card__progress" aria-hidden>
          <span className="ds-routine-card__progress-fill" />
        </span>

        <span className="ds-routine-card__content">
          <span className="ds-routine-card__icon" aria-hidden>
            {icon ?? (state === 'done' ? <Check /> : <Clock3 />)}
          </span>

          <span className="ds-routine-card__body">
            <RoutineProgressMeta
              title={title}
              description={description}
              statusLabel={statusLabel}
              statusTone={statusTone}
            />
          </span>

          <span className="ds-routine-card__arrow" aria-hidden>
            <ChevronRight />
          </span>
        </span>
      </button>
    )
  },
)

RoutineCard.displayName = 'RoutineCard'
