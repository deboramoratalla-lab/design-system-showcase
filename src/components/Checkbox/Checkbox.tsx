import * as React from 'react'
import './Checkbox.css'

export type CheckboxSize = 'sm' | 'md' | 'lg'
export type CheckboxVisualState = 'enabled' | 'hovered' | 'focused' | 'disabled'

export interface CheckboxProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: CheckboxSize
  checked?: boolean
  indeterminate?: boolean
  visualState?: CheckboxVisualState
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      size = 'md',
      checked = false,
      indeterminate = false,
      visualState = 'enabled',
      disabled = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = Boolean(disabled || visualState === 'disabled')

    return (
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        data-size={size}
        data-checked={checked ? 'true' : undefined}
        data-indeterminate={indeterminate ? 'true' : undefined}
        data-state={visualState !== 'enabled' ? visualState : undefined}
        className={cx('ds-checkbox', className)}
        {...rest}
      >
        <span className="ds-checkbox__control" aria-hidden>
          <span className="ds-checkbox__mark" />
        </span>
      </button>
    )
  },
)

Checkbox.displayName = 'Checkbox'
