import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Messaging/Banner',
  component: Banner,
  parameters: { layout: 'centered' },
  args: {
    title: 'Main notification title',
    description: 'Description text goes here',
    tone: 'info',
    dismissible: true,
  },
}

export default meta

type Story = StoryObj<typeof Banner>

export const Base: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Banner {...args} tone="info" />
      <Banner {...args} tone="success" />
      <Banner {...args} tone="error" />
      <Banner {...args} tone="warning" />
    </div>
  ),
}

export const Dismissible: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)

    if (!visible) {
      return <p style={{ margin: 0 }}>Banner dismissed.</p>
    }

    return <Banner {...args} onDismiss={() => setVisible(false)} />
  },
}
