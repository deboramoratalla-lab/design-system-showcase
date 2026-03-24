import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageBubble } from './MessageBubble'

const meta: Meta<typeof MessageBubble> = {
  title: 'Components/Messaging/Message Bubble',
  component: MessageBubble,
  parameters: { layout: 'centered' },
  args: {
    message: "Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home.",
    avatarSrc: '/people/coach-ana.jpg',
    senderName: 'Martha Wayne',
  },
}

export default meta

type Story = StoryObj<typeof MessageBubble>

export const Incoming: Story = {}

export const Outgoing: Story = {
  args: {
    direction: 'outgoing',
    message: 'Thanks coach!',
    avatarSrc: '/people/profile-dm.jpg',
    senderName: 'Debora Moratalla',
  },
}
