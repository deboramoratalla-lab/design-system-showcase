import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'
import '../../stories/Documentation/DocsPages.css'
import './Badge.docs.css'

const meta: Meta<typeof Badge> = {
  title: 'Components/Primitives/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  args: {
    size: 'lg',
    type: 'notification',
    state: 'default',
    label: '8',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
      description: 'Badge size variant.',
      table: { defaultValue: { summary: 'lg' } },
    },
    type: {
      control: 'radio',
      options: ['notification', 'value'],
      description: 'Badge semantic type.',
      table: { defaultValue: { summary: 'notification' } },
    },
    state: {
      control: 'radio',
      options: ['default', 'selected'],
      description: 'Color appearance state.',
      table: { defaultValue: { summary: 'default' } },
    },
    label: {
      control: 'text',
      description: 'Badge content text or numeric value.',
      table: { defaultValue: { summary: '8' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Base: Story = {}

export const Notification: Story = {
  render: (args) => (
    <div className="badge-circuit-row">
      <Badge {...args} type="notification" size="sm" state="default" label="8" />
      <Badge {...args} type="notification" size="sm" state="selected" label="8" />
      <Badge {...args} type="notification" size="lg" state="default" label="8" />
      <Badge {...args} type="notification" size="lg" state="selected" label="8" />
    </div>
  ),
}

export const Value: Story = {
  render: (args) => (
    <div className="badge-circuit-row">
      <Badge {...args} type="value" size="sm" state="default" label="12pt" />
      <Badge {...args} type="value" size="sm" state="selected" label="12pt" />
      <Badge {...args} type="value" size="lg" state="default" label="12pt" />
      <Badge {...args} type="value" size="lg" state="selected" label="12pt" />
    </div>
  ),
}

export const Matrix: Story = {
  render: (args) => (
    <div className="badge-circuit-row">
      <Badge {...args} type="notification" size="sm" state="default" label="8" />
      <Badge {...args} type="notification" size="sm" state="selected" label="8" />
      <Badge {...args} type="notification" size="lg" state="default" label="8" />
      <Badge {...args} type="notification" size="lg" state="selected" label="8" />
      <Badge {...args} type="value" size="lg" state="default" label="12pt" />
      <Badge {...args} type="value" size="lg" state="selected" label="12pt" />
      <Badge {...args} type="value" size="sm" state="default" label="12pt" />
      <Badge {...args} type="value" size="sm" state="selected" label="12pt" />
    </div>
  ),
}
