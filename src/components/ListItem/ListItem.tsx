import * as React from 'react'
import { Clock3 } from 'lucide-react'
import { Avatar } from '../Avatar'
import './ListItem.css'

export type ListItemStatus = 'default' | 'highlighted' | 'subtle-selected' | 'selected'
export type ListItemLeading = 'none' | 'icon' | 'avatar' | 'avatar-rank' | 'radio' | 'number'
export type ListItemTrailing = 'none' | 'checkbox' | 'badge'

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: ListItemStatus
  leading?: ListItemLeading
  trailing?: ListItemTrailing
  title?: string
  showSubtitle?: boolean
  subtitle?: string
  leadingIcon?: React.ReactNode
  avatarSrc?: string
  leadingNumber?: string
  badgeText?: string
  checked?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

const DEFAULT_AVATAR = '/people/profile-dm.jpg'

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      status = 'default',
      leading = 'none',
      trailing = 'none',
      title = 'Title',
      showSubtitle = true,
      subtitle = 'Subtitle',
      leadingIcon,
      avatarSrc = DEFAULT_AVATAR,
      leadingNumber = '3',
      badgeText = '12pt',
      checked = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const normalizedStatus = status === 'selected' ? 'subtle-selected' : status
    const normalizedLeading = leading === 'number' ? 'avatar-rank' : leading

    const renderLeading = () => {
      if (normalizedLeading === 'none') return null

      if (normalizedLeading === 'icon') {
        return (
          <span className="ds-list-item__icon" aria-hidden>
            {leadingIcon ?? <Clock3 />}
          </span>
        )
      }

      if (normalizedLeading === 'avatar') {
        return (
          <Avatar
            size="md"
            type="photo"
            shape="round"
            name="List item avatar"
            src={avatarSrc}
            className="ds-list-item__avatar"
          />
        )
      }

      if (normalizedLeading === 'avatar-rank') {
        return (
          <span className="ds-list-item__avatar-rank" aria-hidden>
            <span className="ds-list-item__rank-number">{leadingNumber}</span>
            <Avatar
              size="md"
              type="photo"
              shape="round"
              name="List item avatar"
              src={avatarSrc}
              className="ds-list-item__avatar"
            />
          </span>
        )
      }

      return <span className={cx('ds-list-item__radio', checked && 'is-checked')} aria-hidden />
    }

    const renderTrailing = () => {
      if (trailing === 'none') return null

      if (trailing === 'checkbox') {
        return <span className={cx('ds-list-item__checkbox', checked && 'is-checked')} aria-hidden />
      }

      return <span className="ds-list-item__badge">{badgeText}</span>
    }

    return (
      <div
        ref={ref}
        className={cx('ds-list-item', className)}
        data-status={normalizedStatus}
        data-leading={normalizedLeading}
        data-trailing={trailing}
        aria-selected={normalizedStatus === 'subtle-selected' ? 'true' : undefined}
        {...rest}
      >
        <div className="ds-list-item__main">
          {normalizedLeading !== 'none' ? <div className="ds-list-item__leading">{renderLeading()}</div> : null}

          <div className="ds-list-item__content">
            <p className="ds-list-item__title">{title}</p>
            {showSubtitle ? <p className="ds-list-item__subtitle">{subtitle}</p> : null}
          </div>
        </div>

        {trailing !== 'none' ? <div className="ds-list-item__trailing">{renderTrailing()}</div> : null}
      </div>
    )
  },
)

ListItem.displayName = 'ListItem'
