import * as React from 'react'
import './RadioCardGroup.css'

export interface RadioCardOption {
  title: string
  description?: string
  value: string
  disabled?: boolean
}

export interface RadioCardGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: RadioCardOption[]
  value?: string
  onChange?: (value: string) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const RadioCardGroup = React.forwardRef<HTMLDivElement, RadioCardGroupProps>(
  ({ options, value, onChange, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-radio-card-group', className)} role="radiogroup" {...rest}>
        {options.map((option) => {
          const checked = option.value === value

          return (
            <button
              key={option.value}
              type="button"
              className="ds-radio-card-group__item"
              data-selected={checked ? 'true' : undefined}
              disabled={option.disabled}
              onClick={() => onChange?.(option.value)}
            >
              <span className="ds-radio-card-group__copy">
                <span className="ds-radio-card-group__title">{option.title}</span>
                {option.description ? (
                  <span className="ds-radio-card-group__description">{option.description}</span>
                ) : null}
              </span>
              <span className="ds-radio-card-group__control" data-selected={checked ? 'true' : undefined} aria-hidden>
                <span className="ds-radio-card-group__dot" />
              </span>
            </button>
          )
        })}
      </div>
    )
  },
)

RadioCardGroup.displayName = 'RadioCardGroup'
