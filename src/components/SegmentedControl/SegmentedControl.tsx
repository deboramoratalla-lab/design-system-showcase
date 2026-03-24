import * as React from 'react'
import './SegmentedControl.css'

export interface SegmentedControlOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SegmentedControlOption[]
  value: string
  onChange?: (value: string) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const SegmentedControl = React.forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ options, value, onChange, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-segmented-control', className)} role="tablist" {...rest}>
        {options.map((option) => {
          const isSelected = option.value === value

          return (
            <button
              key={option.value}
              type="button"
              className="ds-segmented-control__item"
              data-selected={isSelected ? 'true' : undefined}
              role="tab"
              aria-selected={isSelected}
              disabled={option.disabled}
              onClick={() => onChange?.(option.value)}
            >
              <span className="ds-segmented-control__label">{option.label}</span>
            </button>
          )
        })}
      </div>
    )
  },
)

SegmentedControl.displayName = 'SegmentedControl'
