import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Feedback & Status/Stepper',
  component: Stepper,
  parameters: { layout: 'centered' },
  args: {
    currentStep: 2,
    totalSteps: 4,
  },
}

export default meta

type Story = StoryObj<typeof Stepper>

export const Base: Story = {
  render: (args) => <Stepper {...args} style={{ width: 320 }} />,
}

export const WithLabels: Story = {
  render: (args) => (
    <Stepper
      {...args}
      currentStep={3}
      labels={['Warm-up', 'Focus', 'Execution', 'Review']}
      style={{ width: 343 }}
    />
  ),
}
