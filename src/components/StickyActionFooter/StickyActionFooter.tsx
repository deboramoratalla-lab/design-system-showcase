import * as React from 'react'
import { Button, type ButtonVariant } from '../Button'
import './StickyActionFooter.css'

export interface StickyActionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryActionLabel: string
  onPrimaryAction?: () => void
  disabled?: boolean
  helperText?: string
  buttonVariant?: ButtonVariant
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const StickyActionFooter = React.forwardRef<HTMLDivElement, StickyActionFooterProps>(
  (
    {
      primaryActionLabel,
      onPrimaryAction,
      disabled = false,
      helperText,
      buttonVariant = 'primary',
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cx('ds-sticky-action-footer', className)} {...rest}>
        <Button className="ds-sticky-action-footer__button" variant={buttonVariant} disabled={disabled} onClick={onPrimaryAction}>
          {primaryActionLabel}
        </Button>
        {helperText ? <p className="ds-sticky-action-footer__helper">{helperText}</p> : null}
      </div>
    )
  },
)

StickyActionFooter.displayName = 'StickyActionFooter'
