import * as React from 'react'
import './FieldHeader.css'

export interface FieldHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  meta?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const FieldHeader = React.forwardRef<HTMLDivElement, FieldHeaderProps>(
  ({ title, description, meta, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-field-header', className)} {...rest}>
        <div className="ds-field-header__head">
          <div className="ds-field-header__title">{title}</div>
          {meta ? <div className="ds-field-header__meta">{meta}</div> : null}
        </div>
        {description ? <div className="ds-field-header__description">{description}</div> : null}
      </div>
    )
  },
)

FieldHeader.displayName = 'FieldHeader'
