import type { Meta, StoryObj } from '@storybook/react-vite'
import { InboxConversationItem } from './InboxConversationItem'

const meta: Meta<typeof InboxConversationItem> = {
  title: 'Components/Messaging/Inbox Conversation Item',
  component: InboxConversationItem,
  parameters: { layout: 'centered' },
  args: {
    name: 'Martha Wayne',
    preview: 'Good work today at practice, keep it up!',
    avatarSrc: '/people/coach-ana.jpg',
  },
}

export default meta

type Story = StoryObj<typeof InboxConversationItem>

export const RoleLabel: Story = {
  args: {
    roleLabel: 'Coach',
  },
}

export const TimestampAndUnread: Story = {
  args: {
    timestamp: '18:30',
    unreadCount: 1,
  },
}
