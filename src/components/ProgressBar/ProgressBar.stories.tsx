import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback & Status/Progress Bar',
  component: ProgressBar,
  parameters: { layout: 'centered' },
  args: {
    state: '03',
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['initial', '01', '02', '03', '04', 'complete'],
    },
  },
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Base: Story = {}

export const Matrix: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '16px', width: '343px' }}>
      <ProgressBar {...args} state="initial" />
      <ProgressBar {...args} state="01" />
      <ProgressBar {...args} state="02" />
      <ProgressBar {...args} state="03" />
      <ProgressBar {...args} state="04" />
      <ProgressBar {...args} state="complete" />
    </div>
  ),
}
