import * as React from 'react'
import './Tabs.css'

export interface TabsItem {
  label: string
  value: string
  disabled?: boolean
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabsItem[]
  value: string
  onChange?: (value: string) => void
  ariaLabel?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ items, value, onChange, ariaLabel = 'Tabs', className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx('ds-tabs', className)}
        role="tablist"
        aria-label={ariaLabel}
        {...rest}
      >
        {items.map((item) => {
          const isSelected = item.value === value

          return (
            <button
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-disabled={item.disabled || undefined}
              disabled={item.disabled}
              className="ds-tabs__item"
              data-selected={isSelected ? 'true' : undefined}
              onClick={() => onChange?.(item.value)}
            >
              <span className="ds-tabs__label">{item.label}</span>
              <span className="ds-tabs__indicator" aria-hidden />
            </button>
          )
        })}
      </div>
    )
  },
)

Tabs.displayName = 'Tabs'
