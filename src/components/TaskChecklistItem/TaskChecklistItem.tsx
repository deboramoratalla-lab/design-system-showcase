import * as React from 'react'
import { Clock3 } from 'lucide-react'
import './TaskChecklistItem.css'

export interface TaskChecklistItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  timeRange?: string
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const TaskChecklistItem = React.forwardRef<HTMLButtonElement, TaskChecklistItemProps>(
  (
    {
      title,
      timeRange,
      checked = false,
      disabled = false,
      onCheckedChange,
      className,
      type = 'button',
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-task-checklist-item', className)}
        data-checked={checked ? 'true' : undefined}
        aria-pressed={checked}
        disabled={disabled}
        onClick={(event) => {
          onClick?.(event)

          if (!event.defaultPrevented) {
            onCheckedChange?.(!checked)
          }
        }}
        {...rest}
      >
        <span className="ds-task-checklist-item__body">
          {timeRange ? (
            <span className="ds-task-checklist-item__time">
              <Clock3 aria-hidden />
              <span>{timeRange}</span>
            </span>
          ) : null}

          <span className="ds-task-checklist-item__title">{title}</span>
        </span>

        <span className="ds-task-checklist-item__checkbox" aria-hidden />
      </button>
    )
  },
)

TaskChecklistItem.displayName = 'TaskChecklistItem'
