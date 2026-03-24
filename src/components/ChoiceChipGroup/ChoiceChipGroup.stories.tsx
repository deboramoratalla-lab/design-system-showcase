import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'
import { Flame, ShieldCheck, Smile, Zap } from 'lucide-react'
import { ChoiceChipGroup } from './ChoiceChipGroup'
import '../../stories/Documentation/DocsPages.css'
import './ChoiceChipGroup.docs.css'

const meta: Meta<typeof ChoiceChipGroup> = {
  title: 'Components/Form Controls/Choice Chip Group',
  component: ChoiceChipGroup,
  parameters: { layout: 'centered' },
  args: {
    selectionMode: 'single',
    value: 'consistent',
  },
  argTypes: {
    options: { control: false },
    selectionMode: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
    value: { control: 'text' },
    onChange: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof ChoiceChipGroup>

const options = [
  { label: 'Highly Driven', value: 'driven', icon: <Flame /> },
  { label: 'Consistent', value: 'consistent', icon: <ShieldCheck /> },
  { label: 'Balanced', value: 'balanced', icon: <Smile /> },
  { label: 'Energized', value: 'energized', icon: <Zap /> },
]

function SingleSelectPreview(args: ComponentProps<typeof ChoiceChipGroup>) {
  const [value, setValue] = useState(typeof args.value === 'string' ? args.value : 'consistent')

  return <ChoiceChipGroup {...args} value={value} selectionMode="single" onChange={(next) => setValue(next as string)} />
}

export const Base: Story = {
  argTypes: {
    selectionMode: {
      control: false,
      table: { disable: true },
    },
  },
  render: (args) => <SingleSelectPreview key={String(args.value ?? '')} {...args} options={options} />,
}

export const MultipleSelect: Story = {
  args: {
    selectionMode: 'multiple',
  },
  argTypes: {
    selectionMode: {
      control: false,
      table: { disable: true },
    },
    value: {
      control: false,
      table: { disable: true },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(['consistent', 'balanced'])

    return (
      <ChoiceChipGroup
        {...args}
        options={options}
        value={value}
        selectionMode="multiple"
        onChange={(next) => setValue(next as string[])}
      />
    )
  },
}

export const DisabledOption: Story = {
  argTypes: {
    selectionMode: {
      control: false,
      table: { disable: true },
    },
  },
  render: (args) => (
    <SingleSelectPreview
      key={String(args.value ?? '')}
      {...args}
      options={[
        { label: 'Highly Driven', value: 'driven', icon: <Flame /> },
        { label: 'Consistent', value: 'consistent', icon: <ShieldCheck /> },
        { label: 'Balanced', value: 'balanced', icon: <Smile />, disabled: true },
        { label: 'Energized', value: 'energized', icon: <Zap /> },
      ]}
    />
  ),
}
