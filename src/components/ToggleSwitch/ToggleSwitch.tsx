import * as React from 'react'
import './ToggleSwitch.css'

export type ToggleSwitchVisualState = 'default' | 'focus'

export interface ToggleSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  checked?: boolean
  visualState?: ToggleSwitchVisualState
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const ToggleSwitch = React.forwardRef<HTMLButtonElement, ToggleSwitchProps>(
  ({ checked = false, disabled = false, visualState = 'default', className, onClick, ...rest }, ref) => {
    const isDisabled = Boolean(disabled)

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        data-state={visualState !== 'default' ? visualState : undefined}
        data-checked={checked ? 'true' : undefined}
        className={cx('ds-toggle-switch', className)}
        onClick={(event) => {
          if (isDisabled) return
          onClick?.(event)
        }}
        {...rest}
      >
        <span className="ds-toggle-switch__track" aria-hidden>
          <span className="ds-toggle-switch__thumb" />
        </span>
      </button>
    )
  },
)

ToggleSwitch.displayName = 'ToggleSwitch'
