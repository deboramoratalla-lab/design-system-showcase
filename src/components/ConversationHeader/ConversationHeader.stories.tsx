import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConversationHeader } from './ConversationHeader'

const meta: Meta<typeof ConversationHeader> = {
  title: 'Components/Messaging/Conversation Header',
  component: ConversationHeader,
  parameters: { layout: 'centered' },
  args: {
    name: 'Martha Wayne',
    roleLabel: 'Coach',
    avatarSrc: '/people/coach-ana.jpg',
    showAvatar: true,
  },
}

export default meta

type Story = StoryObj<typeof ConversationHeader>

export const WithAvatar: Story = {}

export const Compact: Story = {
  args: {
    showAvatar: false,
  },
}
