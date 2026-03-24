import * as React from 'react'
import './TextStack.css'

export interface TextStackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  subtitle?: React.ReactNode
  gap?: 'xs' | 'sm'
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const TextStack = React.forwardRef<HTMLDivElement, TextStackProps>(
  ({ title, subtitle, gap = 'xs', className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cx('ds-text-stack', className)} data-gap={gap} {...rest}>
        <div className="ds-text-stack__title">{title}</div>
        {subtitle ? <div className="ds-text-stack__subtitle">{subtitle}</div> : null}
      </div>
    )
  },
)

TextStack.displayName = 'TextStack'
