import * as React from 'react'
import './Radio.css'

export type RadioSize = 'sm' | 'md' | 'lg'
export type RadioVisualState = 'enabled' | 'hovered' | 'focused' | 'disabled'

export interface RadioProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  size?: RadioSize
  checked?: boolean
  visualState?: RadioVisualState
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  (
    { size = 'md', checked = false, visualState = 'enabled', disabled = false, className, ...rest },
    ref,
  ) => {
    const isDisabled = Boolean(disabled || visualState === 'disabled')

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={checked}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        data-size={size}
        data-checked={checked ? 'true' : undefined}
        data-state={visualState !== 'enabled' ? visualState : undefined}
        className={cx('ds-radio', className)}
        {...rest}
      >
        <span className="ds-radio__control" aria-hidden>
          <span className="ds-radio__dot" />
        </span>
      </button>
    )
  },
)

Radio.displayName = 'Radio'
