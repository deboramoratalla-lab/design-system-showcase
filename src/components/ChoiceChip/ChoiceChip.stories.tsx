import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, CircleX } from 'lucide-react'
import { ChoiceChip } from './ChoiceChip'
import '../../stories/Documentation/DocsPages.css'
import './ChoiceChip.docs.css'

const meta: Meta<typeof ChoiceChip> = {
  title: 'Components/Form Controls/Choice Chip',
  component: ChoiceChip,
  parameters: { layout: 'centered' },
  args: {
    children: 'Label',
    selected: false,
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
  argTypes: {
    children: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof ChoiceChip>

export const Base: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
  },
}

export const States: Story = {
  render: (args) => (
    <div className="choice-chip-circuit-row">
      <ChoiceChip {...args}>Default</ChoiceChip>
      <ChoiceChip {...args} selected>Selected</ChoiceChip>
      <ChoiceChip {...args} disabled>Disabled</ChoiceChip>
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className="choice-chip-circuit-column">
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected>Label</ChoiceChip>
        <ChoiceChip {...args}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled>Label</ChoiceChip>
      </div>
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected leadingIcon={<CircleX />}>Label</ChoiceChip>
        <ChoiceChip {...args} leadingIcon={<CircleX />}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled leadingIcon={<CircleX />}>Label</ChoiceChip>
      </div>
      <div className="choice-chip-circuit-row">
        <ChoiceChip {...args} selected trailingIcon={<Box />}>Label</ChoiceChip>
        <ChoiceChip {...args} trailingIcon={<Box />}>Label</ChoiceChip>
        <ChoiceChip {...args} disabled trailingIcon={<Box />}>Label</ChoiceChip>
      </div>
    </div>
  ),
}
