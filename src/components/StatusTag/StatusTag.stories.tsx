import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatusTag } from './StatusTag'

const meta: Meta<typeof StatusTag> = {
  title: 'Components/Feedback & Status/Status Tag',
  component: StatusTag,
  parameters: { layout: 'centered' },
  args: {
    tone: 'blue',
    label: '0/2 steps',
  },
  argTypes: {
    tone: {
      control: 'radio',
      options: ['blue', 'green', 'orange', 'lilac', 'neutral'],
    },
    label: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof StatusTag>

export const Base: Story = {}

export const Matrix: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <StatusTag {...args} tone="blue" label="0/2 steps" />
        <StatusTag {...args} tone="orange" label="0/2 steps" />
        <StatusTag {...args} tone="green" label="0/2 steps" />
        <StatusTag {...args} tone="lilac" label="0/3 steps" />
        <StatusTag {...args} tone="neutral" label="Blocked" />
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <StatusTag {...args} tone="blue" label="Complete" />
        <StatusTag {...args} tone="orange" label="Complete" />
        <StatusTag {...args} tone="green" label="Complete" />
        <StatusTag {...args} tone="lilac" label="2/3 steps" />
      </div>
    </div>
  ),
}
