import * as React from 'react'
import './Textarea.css'

export type TextareaVariant = 'outline' | 'fill'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  description?: string
  error?: string
  variant?: TextareaVariant
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, description, error, variant = 'fill', className, id, disabled = false, rows = 2, ...rest }, ref) => {
    const generatedId = React.useId()
    const fieldId = id ?? generatedId
    const descriptionId = description ? `${fieldId}-description` : undefined
    const errorId = error ? `${fieldId}-error` : undefined
    const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <label
        className={cx('ds-textarea', className)}
        data-disabled={disabled ? 'true' : undefined}
        data-variant={variant}
      >
        {label ? <span className="ds-textarea__label">{label}</span> : null}
        {description ? <span id={descriptionId} className="ds-textarea__description">{description}</span> : null}
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          className="ds-textarea__control"
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={ariaDescribedBy}
          disabled={disabled}
          {...rest}
        />
        {error ? <span id={errorId} className="ds-textarea__error">{error}</span> : null}
      </label>
    )
  },
)

Textarea.displayName = 'Textarea'
