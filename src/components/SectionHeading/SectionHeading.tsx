import * as React from 'react'
import './SectionHeading.css'

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, description, action, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-section-heading', className)} {...rest}>
        <div className="ds-section-heading__copy">
          {eyebrow ? <span className="ds-section-heading__eyebrow">{eyebrow}</span> : null}
          <h2 className="ds-section-heading__title">{title}</h2>
          {description ? <p className="ds-section-heading__description">{description}</p> : null}
        </div>
        {action ? <div className="ds-section-heading__action">{action}</div> : null}
      </div>
    )
  },
)

SectionHeading.displayName = 'SectionHeading'
