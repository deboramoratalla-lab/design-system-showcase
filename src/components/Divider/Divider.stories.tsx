import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Content & Structure/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  args: {
    orientation: 'horizontal',
    tone: 'subtle',
    inset: 'none',
  },
}

export default meta

type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Divider {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'stretch', height: 48 }}>
      <span>Left</span>
      <Divider {...args} style={{ marginInline: 12 }} />
      <span>Right</span>
    </div>
  ),
}
