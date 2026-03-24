import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'
import '../../stories/Documentation/DocsPages.css'
import './Tag.docs.css'

const meta: Meta<typeof Tag> = {
  title: 'Components/Primitives/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  args: {
    tone: 'blue',
    selected: false,
    label: 'Label',
    leadingIcon: true,
  },
  argTypes: {
    tone: {
      control: 'radio',
      options: ['blue', 'green', 'orange', 'lilac'],
    },
    selected: { control: 'boolean' },
    label: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    children: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof Tag>

export const Base: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div className="tag-circuit-column">
      <div className="tag-circuit-row">
        <Tag {...args} tone="blue" selected={false} />
        <Tag {...args} tone="blue" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="green" selected={false} />
        <Tag {...args} tone="green" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="orange" selected={false} />
        <Tag {...args} tone="orange" selected />
      </div>
      <div className="tag-circuit-row">
        <Tag {...args} tone="lilac" selected={false} />
        <Tag {...args} tone="lilac" selected />
      </div>
    </div>
  ),
}

export const WithoutIcon: Story = {
  args: {
    leadingIcon: false,
  },
  render: (args) => (
    <div className="tag-circuit-row">
      <Tag {...args} tone="blue" selected />
      <Tag {...args} tone="green" />
      <Tag {...args} tone="orange" />
      <Tag {...args} tone="lilac" selected />
    </div>
  ),
}
