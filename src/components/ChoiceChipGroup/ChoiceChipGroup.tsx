import * as React from 'react'
import { ChoiceChip } from '../ChoiceChip'
import './ChoiceChipGroup.css'

export type ChoiceChipSelectionMode = 'single' | 'multiple'

export interface ChoiceChipOption {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface ChoiceChipGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ChoiceChipOption[]
  value?: string | string[]
  selectionMode?: ChoiceChipSelectionMode
  onChange?: (value: string | string[]) => void
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function toArray(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value
  return value ? [value] : []
}

export const ChoiceChipGroup = React.forwardRef<HTMLDivElement, ChoiceChipGroupProps>(
  ({ options, value, selectionMode = 'single', onChange, className, ...rest }, ref) => {
    const selectedValues = toArray(value)

    return (
      <div ref={ref} className={cx('ds-choice-chip-group', className)} {...rest}>
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value)

          return (
            <ChoiceChip
              key={option.value}
              selected={isSelected}
              disabled={option.disabled}
              leadingIcon={option.icon}
              onClick={() => {
                if (!onChange) return

                if (selectionMode === 'single') {
                  onChange(option.value)
                  return
                }

                const next = isSelected
                  ? selectedValues.filter((item) => item !== option.value)
                  : [...selectedValues, option.value]

                onChange(next)
              }}
            >
              {option.label}
            </ChoiceChip>
          )
        })}
      </div>
    )
  },
)

ChoiceChipGroup.displayName = 'ChoiceChipGroup'
