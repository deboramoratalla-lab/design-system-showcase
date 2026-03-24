import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  AppHeader,
  ConversationHeader,
  InboxConversationItem,
  MessageBubble,
  MessageDateDivider,
  QuickReplyPanel,
  Tabs,
} from '../../components'
import './MessagingFlows.css'

const meta = {
  title: 'Components/Messaging/Inbox Thread',
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta

type Story = StoryObj

export const InboxOverview: Story = {
  render: () => (
    <section className="messaging-flow">
      <div className="messaging-flow__section">
        <div className="messaging-flow__header">
          <AppHeader title="Inbox" centerTitle />
        </div>

        <div className="messaging-flow__tabs">
          <Tabs
            items={[
              { label: 'Coaches', value: 'coaches' },
              { label: 'Mental', value: 'mental' },
            ]}
            value="coaches"
          />
        </div>

        <div className="messaging-flow__list">
          <InboxConversationItem
            name="Martha Wayne"
            preview="Good work today at practice, keep it up!"
            avatarSrc="/people/coach-ana.jpg"
            timestamp="18:30"
            unreadCount={1}
          />

          <InboxConversationItem
            name="George Matt"
            preview="You need to do the session of todays mental."
            avatarSrc="/people/jamie.jpg"
            roleLabel="Mental Coach"
          />
        </div>
      </div>
    </section>
  ),
}

export const ConversationThread: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>('thanks')

    return (
      <section className="messaging-flow">
        <div className="messaging-flow__section">
          <div className="messaging-flow__header">
            <AppHeader title="Inbox" centerTitle />
          </div>

          <div className="messaging-flow__stack">
            <div className="messaging-flow__conversation-header">
              <ConversationHeader
                name="Martha Wayne"
                roleLabel="Coach"
                avatarSrc="/people/coach-ana.jpg"
              />
            </div>

            <div className="messaging-flow__conversation">
              <MessageDateDivider label="11/15/2024" />

              <MessageBubble
                direction="incoming"
                avatarSrc="/people/coach-ana.jpg"
                senderName="Martha Wayne"
                message="Good work today at practice, keep it up! Don't forget to get your post practice routine ready when you get home."
              />

              <MessageBubble
                direction="outgoing"
                avatarSrc="/people/profile-dm.jpg"
                senderName="Debora Moratalla"
                message="Thanks coach!"
              />

              <MessageDateDivider label="11/16/2024" />

              <MessageBubble
                direction="incoming"
                avatarSrc="/people/coach-ana.jpg"
                senderName="Martha Wayne"
                message="Keep your focus tomorrow and check in after the session."
              />
            </div>
          </div>

          <QuickReplyPanel
            helperText="Select a quick reply to respond to your coach."
            value={value}
            onChange={setValue}
            options={[
              { label: 'Thanks coach!', value: 'thanks' },
              { label: 'Yes coach.', value: 'yes' },
              { label: 'Hello.', value: 'hello' },
              { label: 'No coach.', value: 'no' },
              { label: "I've completed the task.", value: 'completed' },
              { label: 'Noted!', value: 'noted' },
              { label: 'Still working on it.', value: 'working' },
              { label: 'Thanks for the feedback!', value: 'feedback' },
              { label: "I'm ready!", value: 'ready' },
            ]}
          />
        </div>
      </section>
    )
  },
}
