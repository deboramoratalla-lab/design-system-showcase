import * as React from 'react'
import { Avatar } from '../Avatar'
import './MessageBubble.css'

export type MessageBubbleDirection = 'incoming' | 'outgoing'

export interface MessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: MessageBubbleDirection
  message: React.ReactNode
  avatarSrc?: string
  avatarAlt?: string
  senderName?: string
  showAvatar?: boolean
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  (
    {
      direction = 'incoming',
      message,
      avatarSrc,
      avatarAlt,
      senderName,
      showAvatar = true,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cx('ds-message-bubble', className)} data-direction={direction} {...rest}>
        {showAvatar ? (
          <Avatar
            className="ds-message-bubble__avatar"
            size="md"
            src={avatarSrc}
            name={senderName}
            alt={avatarAlt}
          />
        ) : null}

        <div className="ds-message-bubble__bubble">
          <div className="ds-message-bubble__content">{message}</div>
        </div>
      </div>
    )
  },
)

MessageBubble.displayName = 'MessageBubble'
