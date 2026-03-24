import * as React from 'react'
import { Avatar } from '../Avatar'
import { TextStack } from '../TextStack'
import './ConversationHeader.css'

export interface ConversationHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  roleLabel: string
  avatarSrc?: string
  avatarAlt?: string
  showAvatar?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const ConversationHeader = React.forwardRef<HTMLDivElement, ConversationHeaderProps>(
  (
    {
      name,
      roleLabel,
      avatarSrc,
      avatarAlt,
      showAvatar = true,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cx('ds-conversation-header', className)}
        data-has-avatar={showAvatar ? 'true' : undefined}
        {...rest}
      >
        {showAvatar ? (
          <Avatar
            className="ds-conversation-header__avatar"
            size="md"
            src={avatarSrc}
            name={name}
            alt={avatarAlt}
          />
        ) : null}

        <TextStack
          className="ds-conversation-header__copy"
          gap="xs"
          title={<p className="ds-conversation-header__name">{name}</p>}
          subtitle={<p className="ds-conversation-header__role">{roleLabel}</p>}
        />
      </div>
    )
  },
)

ConversationHeader.displayName = 'ConversationHeader'
