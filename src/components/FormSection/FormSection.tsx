import * as React from 'react'
import { FieldHeader } from '../FieldHeader'
import './FormSection.css'

export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  description?: string
  optional?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ label, description, optional = false, className, children, ...rest }, ref) => {
    return (
      <section ref={ref} className={cx('ds-form-section', className)} {...rest}>
        <FieldHeader
          className="ds-form-section__copy"
          title={<h2 className="ds-form-section__label">{label}</h2>}
          description={description ? <p className="ds-form-section__description">{description}</p> : undefined}
          meta={optional ? <span className="ds-form-section__meta">Optional</span> : undefined}
        />
        {children ? <div className="ds-form-section__content">{children}</div> : null}
      </section>
    )
  },
)

FormSection.displayName = 'FormSection'
