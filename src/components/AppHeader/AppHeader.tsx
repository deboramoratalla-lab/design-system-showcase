import * as React from 'react'
import { Button } from '../Button'
import { TextStack } from '../TextStack'
import './AppHeader.css'

export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  onLeadingClick?: () => void
  onTrailingClick?: () => void
  centerTitle?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const AppHeader = React.forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      title,
      subtitle,
      leadingIcon,
      trailingIcon,
      onLeadingClick,
      onTrailingClick,
      centerTitle = false,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cx('ds-app-header', className)}
        data-centered={centerTitle ? 'true' : undefined}
        {...rest}
      >
        <div className="ds-app-header__rail">
          {leadingIcon ? (
            <Button
              className="ds-app-header__action"
              leadingIcon={leadingIcon}
              iconOnly
              aria-label="Leading action"
              title="Leading action"
              onClick={onLeadingClick}
              variant="secondary"
              size="sm"
            />
          ) : (
            <span className="ds-app-header__spacer" aria-hidden />
          )}

          <TextStack
            className="ds-app-header__copy"
            gap="sm"
            title={<h1 className="ds-app-header__title">{title}</h1>}
            subtitle={subtitle ? <p className="ds-app-header__subtitle">{subtitle}</p> : undefined}
          />

          {trailingIcon ? (
            <Button
              className="ds-app-header__action"
              leadingIcon={trailingIcon}
              iconOnly
              aria-label="Trailing action"
              title="Trailing action"
              onClick={onTrailingClick}
              variant="secondary"
              size="sm"
            />
          ) : (
            <span className="ds-app-header__spacer" aria-hidden />
          )}
        </div>
      </header>
    )
  },
)

AppHeader.displayName = 'AppHeader'
