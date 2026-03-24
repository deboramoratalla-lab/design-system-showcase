import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'
import { RadioCardGroup } from './RadioCardGroup'
import '../../stories/Documentation/DocsPages.css'
import './RadioCardGroup.docs.css'

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Components/Form Controls/Radio Card Group',
  component: RadioCardGroup,
  parameters: { layout: 'centered' },
  args: {
    value: 'quick-reset',
  },
  argTypes: {
    options: { control: false },
    value: { control: 'text' },
    onChange: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof RadioCardGroup>

const options = [
  {
    title: 'Quick reset',
    description: 'A short tool to help you recover and refocus.',
    value: 'quick-reset',
  },
  {
    title: 'Breathing drill',
    description: 'A calmer option to lower stress before training.',
    value: 'breathing-drill',
  },
]

function InteractivePreview(args: ComponentProps<typeof RadioCardGroup>) {
  const [value, setValue] = useState(typeof args.value === 'string' ? args.value : 'quick-reset')

  return <RadioCardGroup {...args} value={value} onChange={setValue} />
}

export const Base: Story = {
  render: (args) => <InteractivePreview key={String(args.value ?? '')} {...args} options={options} />,
}

export const DisabledOption: Story = {
  render: (args) => (
    <InteractivePreview
      key={String(args.value ?? '')}
      {...args}
      options={[
        {
          title: 'Quick reset',
          description: 'A short tool to help you recover and refocus.',
          value: 'quick-reset',
        },
        {
          title: 'Breathing drill',
          description: 'A calmer option to lower stress before training.',
          value: 'breathing-drill',
          disabled: true,
        },
      ]}
    />
  ),
}
