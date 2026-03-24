import * as React from 'react'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import './InboxConversationItem.css'

export interface InboxConversationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  preview: string
  avatarSrc?: string
  avatarAlt?: string
  roleLabel?: string
  timestamp?: string
  unreadCount?: number
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const InboxConversationItem = React.forwardRef<HTMLButtonElement, InboxConversationItemProps>(
  (
    {
      name,
      preview,
      avatarSrc,
      avatarAlt,
      roleLabel,
      timestamp,
      unreadCount,
      className,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    const hasUnread = Boolean(unreadCount && unreadCount > 0)

    return (
      <button ref={ref} type={type} className={cx('ds-inbox-conversation-item', className)} {...rest}>
        <Avatar className="ds-inbox-conversation-item__avatar" size="md" src={avatarSrc} name={name} alt={avatarAlt} />

        <div className="ds-inbox-conversation-item__body">
          <div className="ds-inbox-conversation-item__copy">
            <p className="ds-inbox-conversation-item__name">{name}</p>
            <p className="ds-inbox-conversation-item__preview">{preview}</p>
          </div>

          <div className="ds-inbox-conversation-item__meta">
            {roleLabel ? <span className="ds-inbox-conversation-item__role">{roleLabel}</span> : null}
            {timestamp ? <span className="ds-inbox-conversation-item__timestamp">{timestamp}</span> : null}
            {hasUnread ? (
              <Badge
                className="ds-inbox-conversation-item__unread"
                size="sm"
                type="notification"
                label={unreadCount}
              />
            ) : null}
          </div>
        </div>
      </button>
    )
  },
)

InboxConversationItem.displayName = 'InboxConversationItem'
