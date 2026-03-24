import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageDateDivider } from './MessageDateDivider'

const meta: Meta<typeof MessageDateDivider> = {
  title: 'Components/Messaging/Message Date Divider',
  component: MessageDateDivider,
  parameters: { layout: 'centered' },
  args: {
    label: '11/15/2024',
  },
}

export default meta

type Story = StoryObj<typeof MessageDateDivider>

export const Base: Story = {
  render: (args) => <MessageDateDivider {...args} style={{ width: 343 }} />,
}
