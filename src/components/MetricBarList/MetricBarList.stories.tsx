import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricBarList } from './MetricBarList'

const meta: Meta<typeof MetricBarList> = {
  title: 'Components/Data Viz/Metric Bar List',
  component: MetricBarList,
  parameters: { layout: 'centered' },
  args: {
    items: [
      { label: 'Energy Level', value: 52 },
      { label: 'Focus Level', value: 88 },
      { label: 'Confidence Level', value: 61 },
      { label: 'Motivation Level', value: 74 },
    ],
    max: 100,
  },
}

export default meta

type Story = StoryObj<typeof MetricBarList>

export const Base: Story = {}
