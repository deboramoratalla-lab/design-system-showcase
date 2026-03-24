import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertTriangle, Smile, TrendingUp } from 'lucide-react'
import { InsightCallout } from './InsightCallout'

const meta: Meta<typeof InsightCallout> = {
  title: 'Components/Feedback & Status/Insight Callout',
  component: InsightCallout,
  parameters: { layout: 'centered' },
  args: {
    title: "You've completed 61,29% of the month",
    description: 'Not bad, but you only nailed one full week. Consistency is still the main lever.',
    tone: 'neutral',
    icon: <TrendingUp />,
  },
}

export default meta

type Story = StoryObj<typeof InsightCallout>

export const Base: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '12px' }}>
      <InsightCallout {...args} tone="positive" icon={<Smile />} />
      <InsightCallout {...args} tone="neutral" icon={<TrendingUp />} />
      <InsightCallout {...args} tone="warning" icon={<AlertTriangle />} />
    </div>
  ),
}
