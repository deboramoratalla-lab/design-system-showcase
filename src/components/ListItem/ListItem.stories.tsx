import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListItem } from './ListItem'
import '../../stories/Documentation/DocsPages.css'
import './ListItem.docs.css'

const meta: Meta<typeof ListItem> = {
  title: 'Components/Primitives/List Item',
  component: ListItem,
  parameters: { layout: 'centered' },
  args: {
    status: 'default',
    leading: 'none',
    trailing: 'none',
    title: 'Title',
    showSubtitle: true,
    subtitle: 'Subtitle',
    leadingNumber: '3',
    badgeText: '12pt',
    checked: false,
  },
  argTypes: {
    status: {
      control: 'radio',
      options: ['default', 'highlighted', 'subtle-selected'],
      description: 'Visual state of the row container.',
      table: { defaultValue: { summary: 'default' } },
    },
    leading: {
      control: 'radio',
      options: ['none', 'icon', 'avatar', 'avatar-rank', 'radio'],
      description: 'Leading element variant.',
      table: { defaultValue: { summary: 'none' } },
    },
    trailing: {
      control: 'radio',
      options: ['none', 'checkbox', 'badge'],
      description: 'Trailing element variant.',
      table: { defaultValue: { summary: 'none' } },
    },
    title: {
      control: 'text',
      description: 'Primary row label.',
      table: { defaultValue: { summary: 'Title' } },
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Shows subtitle line.',
      table: { defaultValue: { summary: 'true' } },
    },
    subtitle: {
      control: 'text',
      description: 'Secondary row label.',
      table: { defaultValue: { summary: 'Subtitle' } },
    },
    leadingIcon: {
      control: false,
      description: 'Custom leading icon element for the icon variant.',
      table: { category: 'Slots' },
    },
    avatarSrc: {
      control: 'text',
      description: 'Avatar image source for avatar/avatar-rank leading variants.',
      table: { defaultValue: { summary: '/people/profile-dm.jpg' } },
    },
    leadingNumber: {
      control: 'text',
      description: 'Numeric token used by avatar-rank leading variant.',
      table: { defaultValue: { summary: '3' } },
    },
    badgeText: {
      control: 'text',
      description: 'Trailing badge label.',
      table: { defaultValue: { summary: '12pt' } },
    },
    checked: {
      control: 'boolean',
      description: 'Selected state for radio/checkbox controls.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof ListItem>

export const Base: Story = {
  args: {
    status: 'default',
    leading: 'none',
    trailing: 'none',
  },
}

export const Leading: Story = {
  render: (args) => (
    <div className="list-item-circuit-column">
      <ListItem {...args} leading="none" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="icon" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="avatar" title="Title" subtitle="Subtitle" />
      <ListItem {...args} leading="avatar-rank" title="Title" subtitle="Subtitle" leadingNumber="3" />
      <ListItem {...args} leading="radio" title="Title" subtitle="Subtitle" checked={false} />
    </div>
  ),
}

export const Trailing: Story = {
  render: (args) => (
    <div className="list-item-circuit-column">
      <ListItem {...args} trailing="none" title="Title" subtitle="Subtitle" />
      <ListItem {...args} trailing="checkbox" title="Title" subtitle="Subtitle" checked={false} />
      <ListItem {...args} trailing="badge" title="Title" subtitle="Subtitle" badgeText="12pt" />
    </div>
  ),
}

export const Status: Story = {
  render: (args) => (
    <div className="list-item-circuit-column">
      <ListItem {...args} status="default" leading="avatar" title="Title" subtitle="Subtitle" />
      <ListItem {...args} status="highlighted" leading="avatar" trailing="badge" badgeText="12pt" />
      <ListItem {...args} status="subtle-selected" leading="none" trailing="none" />
    </div>
  ),
}

export const Matrix: Story = {
  render: (args) => {
    const renderColumn = (status: 'default' | 'highlighted' | 'subtle-selected') => (
      <div className="list-item-matrix__column">
        <ListItem {...args} status={status} leading="none" trailing="none" />
        <ListItem {...args} status={status} leading="icon" trailing="none" />
        <ListItem {...args} status={status} leading="avatar" trailing="none" />
        <ListItem {...args} status={status} leading="avatar-rank" trailing="none" leadingNumber="3" />
        <ListItem {...args} status={status} leading="radio" trailing="none" checked={status === 'highlighted'} />
        <ListItem {...args} status={status} leading="none" trailing="checkbox" checked={status === 'highlighted'} />
        <ListItem {...args} status={status} leading="none" trailing="badge" badgeText="12pt" />
      </div>
    )

    return (
      <div className="list-item-matrix">
        {renderColumn('default')}
        {renderColumn('highlighted')}
        {renderColumn('subtle-selected')}
      </div>
    )
  },
}
