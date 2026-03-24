import * as React from 'react'
import './TextField.css'

export type TextFieldVariant = 'outline' | 'fill'
export type TextFieldLabelPlacement = 'top' | 'floating'

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  error?: string
  variant?: TextFieldVariant
  labelPlacement?: TextFieldLabelPlacement
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      description,
      error,
      variant = 'outline',
      labelPlacement = 'top',
      leadingIcon,
      trailingIcon,
      className,
      id,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const fieldId = id ?? generatedId
    const descriptionId = description ? `${fieldId}-description` : undefined
    const errorId = error ? `${fieldId}-error` : undefined
    const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <label
        className={cx('ds-text-field', className)}
        data-disabled={disabled ? 'true' : undefined}
        data-label-placement={labelPlacement}
        data-variant={variant}
      >
        {label && labelPlacement === 'top' ? <span className="ds-text-field__label">{label}</span> : null}
        {description ? (
          <span id={descriptionId} className="ds-text-field__description">
            {description}
          </span>
        ) : null}
        <span className="ds-text-field__field">
          {label && labelPlacement === 'floating' ? (
            <span className="ds-text-field__floating-label">{label}</span>
          ) : null}
          {leadingIcon ? (
            <span className="ds-text-field__icon" aria-hidden>
              {leadingIcon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={fieldId}
            className="ds-text-field__control"
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={ariaDescribedBy}
            disabled={disabled}
            {...rest}
          />
          {trailingIcon ? (
            <span className="ds-text-field__icon" aria-hidden>
              {trailingIcon}
            </span>
          ) : null}
        </span>
        {error ? <span id={errorId} className="ds-text-field__error">{error}</span> : null}
      </label>
    )
  },
)

TextField.displayName = 'TextField'
