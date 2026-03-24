import type { Meta, StoryObj } from '@storybook/react-vite'
import { DonutChart } from './DonutChart'

const meta: Meta<typeof DonutChart> = {
  title: 'Components/Data Viz/Donut Chart',
  component: DonutChart,
  parameters: { layout: 'centered' },
  args: {
    segments: [
      { label: 'Energy Level', value: 80, color: '#dceff4' },
      { label: 'Focus Level', value: 30, color: '#9fddec' },
      { label: 'Confidence Level', value: 30, color: '#52bed6' },
      { label: 'Motivation Level', value: 50, color: '#195a76' },
    ],
    size: 'md',
  },
}

export default meta

type Story = StoryObj<typeof DonutChart>

export const Base: Story = {}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}
