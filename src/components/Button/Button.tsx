import * as React from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVisualState = 'default' | 'hover' | 'active' | 'focus'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  iconOnly?: boolean
  loading?: boolean
  visualState?: ButtonVisualState
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leadingIcon,
      trailingIcon,
      iconOnly = false,
      loading = false,
      visualState = 'default',
      disabled,
      className,
      children,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = Boolean(disabled || loading)
    const hasLabel = !iconOnly && children != null
    const iconOnlyIcon = leadingIcon ?? trailingIcon
    const resolvedLeadingIcon = iconOnly ? iconOnlyIcon : leadingIcon
    const resolvedTrailingIcon = iconOnly ? undefined : trailingIcon

    return (
      <button
        ref={ref}
        type={type}
        data-variant={variant}
        data-size={size}
        data-icon-only={iconOnly ? 'true' : undefined}
        data-loading={loading ? 'true' : undefined}
        data-state={visualState !== 'default' ? visualState : undefined}
        className={cx('ds-button', className)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        <span className="ds-button__inner">
          {loading ? (
            <span className="ds-button__spinner" aria-hidden />
          ) : (
            <>
              {resolvedLeadingIcon ? (
                <span className="ds-button__icon" aria-hidden>
                  {resolvedLeadingIcon}
                </span>
              ) : null}

              {hasLabel ? <span className="ds-button__label">{children}</span> : null}

              {resolvedTrailingIcon ? (
                <span className="ds-button__icon" aria-hidden>
                  {resolvedTrailingIcon}
                </span>
              ) : null}
            </>
          )}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
