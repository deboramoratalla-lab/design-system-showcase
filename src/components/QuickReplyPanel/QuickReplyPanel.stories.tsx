import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { QuickReplyPanel } from './QuickReplyPanel'

const options = [
  { label: 'Thanks coach!', value: 'thanks' },
  { label: 'Yes coach.', value: 'yes' },
  { label: 'Hello.', value: 'hello' },
  { label: 'No coach.', value: 'no' },
  { label: "I've completed the task.", value: 'completed' },
  { label: 'Noted!', value: 'noted' },
  { label: 'Still working on it.', value: 'working' },
  { label: 'Thanks for the feedback!', value: 'feedback' },
  { label: "I'm ready!", value: 'ready' },
]

const meta: Meta<typeof QuickReplyPanel> = {
  title: 'Components/Messaging/Quick Reply Panel',
  component: QuickReplyPanel,
  parameters: { layout: 'centered' },
  args: {
    helperText: 'Select a quick reply to respond to your coach.',
    options,
  },
}

export default meta

type Story = StoryObj<typeof QuickReplyPanel>

export const Base: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>('thanks')
    return <QuickReplyPanel {...args} value={value} onChange={setValue} />
  },
}
