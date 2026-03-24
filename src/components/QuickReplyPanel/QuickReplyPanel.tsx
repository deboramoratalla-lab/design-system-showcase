import * as React from 'react'
import { SendHorizontal } from 'lucide-react'
import { Button } from '../Button'
import './QuickReplyPanel.css'

export interface QuickReplyOption {
  label: string
  value: string
  disabled?: boolean
}

export interface QuickReplyPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  helperText: string
  options: QuickReplyOption[]
  value?: string
  onChange?: (value: string) => void
  actionLabel?: string
  onAction?: () => void
  actionDisabled?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const QuickReplyPanel = React.forwardRef<HTMLDivElement, QuickReplyPanelProps>(
  (
    {
      helperText,
      options,
      value,
      onChange,
      actionLabel = 'Send',
      onAction,
      actionDisabled = false,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cx('ds-quick-reply-panel', className)} {...rest}>
        <p className="ds-quick-reply-panel__helper">{helperText}</p>

        <div className="ds-quick-reply-panel__options">
          {options.map((option) => {
            const isSelected = option.value === value

            return (
              <button
                key={option.value}
                type="button"
                className="ds-quick-reply-panel__chip"
                data-selected={isSelected ? 'true' : undefined}
                disabled={option.disabled}
                onClick={() => onChange?.(option.value)}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div className="ds-quick-reply-panel__footer">
          <Button
            className="ds-quick-reply-panel__action"
            variant="primary"
            size="md"
            leadingIcon={<SendHorizontal />}
            disabled={actionDisabled}
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        </div>
      </div>
    )
  },
)

QuickReplyPanel.displayName = 'QuickReplyPanel'
