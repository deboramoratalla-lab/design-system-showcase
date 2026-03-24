import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Primitives/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  args: {
    items: [
      { label: 'Tab', value: 'first' },
      { label: 'Tab 2', value: 'second' },
    ],
    value: 'first',
  },
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Tabs {...args} value={value} onChange={setValue} />
  },
}

export const ThreeOptions: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return (
      <Tabs
        items={[
          { label: 'Overview', value: 'overview' },
          { label: 'Stats', value: 'stats' },
          { label: 'History', value: 'history' },
        ]}
        value={value}
        onChange={setValue}
      />
    )
  },
}
