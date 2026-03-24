import type { Meta, StoryObj } from '@storybook/react-vite'
import { MetricLegendList } from './MetricLegendList'

const meta: Meta<typeof MetricLegendList> = {
  title: 'Components/Data Viz/Metric Legend List',
  component: MetricLegendList,
  parameters: { layout: 'centered' },
  args: {
    items: [
      { label: 'Energy Level', value: '80%', color: '#dceff4' },
      { label: 'Focus Level', value: '30%', color: '#9fddec' },
      { label: 'Confidence Level', value: '30%', color: '#52bed6' },
      { label: 'Motivation Level', value: '50%', color: '#195a76' },
    ],
  },
}

export default meta

type Story = StoryObj<typeof MetricLegendList>

export const Base: Story = {}
