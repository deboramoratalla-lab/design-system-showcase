import * as React from 'react'
import { CircleX } from 'lucide-react'
import './Tag.css'

export type TagTone = 'blue' | 'green' | 'orange' | 'lilac'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone
  selected?: boolean
  leadingIcon?: boolean
  label?: string
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ tone = 'blue', selected = false, leadingIcon = true, label, className, children, ...rest }, ref) => {
    const content = children ?? label ?? 'Label'

    return (
      <span
        ref={ref}
        className={cx('ds-tag', className)}
        data-tone={tone}
        data-selected={selected ? 'true' : undefined}
        {...rest}
      >
        {leadingIcon ? (
          <span className="ds-tag__icon" aria-hidden>
            <CircleX />
          </span>
        ) : null}
        <span className="ds-tag__label">{content}</span>
      </span>
    )
  },
)

Tag.displayName = 'Tag'
