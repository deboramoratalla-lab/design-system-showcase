import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { TaskChecklistItem } from './TaskChecklistItem'
import '../../stories/Documentation/DocsPages.css'
import './TaskChecklistItem.docs.css'

const meta: Meta<typeof TaskChecklistItem> = {
  title: 'Components/Patterns/Task Checklist Item',
  component: TaskChecklistItem,
  parameters: { layout: 'centered' },
  args: {
    title: 'Do a ten minute yoga session',
    timeRange: '08:00 AM - 10:00 AM',
    checked: false,
  },
}

export default meta

type Story = StoryObj<typeof TaskChecklistItem>

export const Base: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(Boolean(args.checked))

    return <TaskChecklistItem {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Matrix: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '12px' }}>
      <TaskChecklistItem {...args} checked={false} />
      <TaskChecklistItem {...args} checked />
      <TaskChecklistItem {...args} title="Try a new stretching exercise for my sore leg and do it twice today" />
      <TaskChecklistItem {...args} title="Be more patient with myself" timeRange={undefined} />
    </div>
  ),
}
