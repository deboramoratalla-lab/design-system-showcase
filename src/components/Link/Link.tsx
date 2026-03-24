import * as React from 'react'
import './Link.css'

export type LinkSize = 'sm' | 'md'
export type LinkTone = 'default' | 'muted' | 'inverse'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: LinkSize
  tone?: LinkTone
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', tone = 'default', leadingIcon, trailingIcon, className, children, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        className={cx('ds-link', className)}
        data-size={size}
        data-tone={tone}
        {...rest}
      >
        {leadingIcon ? (
          <span className="ds-link__icon" aria-hidden>
            {leadingIcon}
          </span>
        ) : null}
        <span className="ds-link__label">{children}</span>
        {trailingIcon ? (
          <span className="ds-link__icon" aria-hidden>
            {trailingIcon}
          </span>
        ) : null}
      </a>
    )
  },
)

Link.displayName = 'Link'
