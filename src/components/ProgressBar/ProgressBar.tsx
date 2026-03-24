import * as React from 'react'
import './ProgressBar.css'

export type ProgressBarState = 'initial' | '01' | '02' | '03' | '04' | 'complete'

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: ProgressBarState
  ariaLabel?: string
}

const completedStepsByState: Record<ProgressBarState, number> = {
  initial: 0,
  '01': 1,
  '02': 2,
  '03': 3,
  '04': 4,
  complete: 5,
}

const markerLeftByState: Record<ProgressBarState, number> = {
  initial: 0,
  '01': 56,
  '02': 125,
  '03': 194,
  '04': 263,
  complete: 319,
}

const pendingStepRects = [
  { left: 1, width: 65, edge: 'start' as const },
  { left: 70, width: 65 },
  { left: 139, width: 65 },
  { left: 208, width: 65 },
  { left: 277, width: 65, edge: 'end' as const },
]

const dividerOffsets = [67, 136, 205, 274]

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ state = 'initial', ariaLabel, className, ...rest }, ref) => {
    const completedSteps = completedStepsByState[state]
    const markerLeft = markerLeftByState[state]

    return (
      <div
        ref={ref}
        className={cx('ds-progress-bar', className)}
        data-state={state}
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={completedSteps}
        aria-valuetext={`${completedSteps} of 5 steps complete`}
        {...rest}
      >
        <div className="ds-progress-bar__track" aria-hidden>
          <div className="ds-progress-bar__pending">
            {pendingStepRects.map((segment, index) => (
              <span
                key={index}
                className="ds-progress-bar__pending-step"
                data-visible={index >= completedSteps ? 'true' : undefined}
                data-edge={segment.edge}
                style={{ left: `${segment.left}px`, width: `${segment.width}px` }}
              />
            ))}
          </div>

          {dividerOffsets.map((offset) => (
            <span key={offset} className="ds-progress-bar__divider" style={{ left: `${offset}px` }} />
          ))}
        </div>

        <span className="ds-progress-bar__marker" style={{ left: `${markerLeft}px` }}>
          <svg className="ds-progress-bar__check" viewBox="0 0 16 16" aria-hidden>
            <path d="M3 8.5L6.5 12L13 5.5" />
          </svg>
        </span>
      </div>
    )
  },
)

ProgressBar.displayName = 'ProgressBar'
