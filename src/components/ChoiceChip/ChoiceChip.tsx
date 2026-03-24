import * as React from 'react'
import './ChoiceChip.css'

export interface ChoiceChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const ChoiceChip = React.forwardRef<HTMLButtonElement, ChoiceChipProps>(
  ({ selected = false, leadingIcon, trailingIcon, className, children, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx('ds-choice-chip', className)}
        data-selected={selected ? 'true' : undefined}
        aria-pressed={selected}
        {...rest}
      >
        {leadingIcon ? <span className="ds-choice-chip__icon" aria-hidden>{leadingIcon}</span> : null}
        <span className="ds-choice-chip__label">{children}</span>
        {trailingIcon ? <span className="ds-choice-chip__icon" aria-hidden>{trailingIcon}</span> : null}
      </button>
    )
  },
)

ChoiceChip.displayName = 'ChoiceChip'
