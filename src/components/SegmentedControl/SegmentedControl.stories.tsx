import { useState, type ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SegmentedControl } from './SegmentedControl'
import '../../stories/Documentation/DocsPages.css'
import './SegmentedControl.docs.css'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/Form Controls/Segmented Control',
  component: SegmentedControl,
  parameters: { layout: 'centered' },
  args: {
    options: [
      { label: 'Daily', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Monthly', value: 'monthly' },
    ],
    value: 'daily',
  },
  argTypes: {
    value: { control: 'text' },
    options: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof SegmentedControl>

function InteractivePreview(args: ComponentProps<typeof SegmentedControl>) {
  const [value, setValue] = useState(args.value)

  return <SegmentedControl {...args} value={value} onChange={setValue} />
}

export const Base: Story = {
  render: (args) => <InteractivePreview key={args.value} {...args} />,
}

export const DisabledOption: Story = {
  render: (args) => {
    return (
      <InteractivePreview
        key={args.value}
        {...args}
        options={[
          { label: 'Daily', value: 'daily' },
          { label: 'Weekly', value: 'weekly', disabled: true },
          { label: 'Monthly', value: 'monthly' },
        ]}
      />
    )
  },
}
