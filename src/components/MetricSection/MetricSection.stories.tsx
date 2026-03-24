import type { Meta, StoryObj } from '@storybook/react-vite'
import { DonutChart } from '../DonutChart'
import { MetricSection } from './MetricSection'
import '../../stories/Documentation/DocsPages.css'
import './MetricSection.docs.css'

const meta: Meta<typeof MetricSection> = {
  title: 'Components/Patterns/Metric Section',
  component: MetricSection,
  parameters: { layout: 'centered' },
  args: {
    title: 'Readiness',
    scoreLabel: '60%',
    chart: (
      <DonutChart
        size="md"
        segments={[
          { label: 'Energy Level', value: 80, color: '#dceff4' },
          { label: 'Focus Level', value: 30, color: '#9fddec' },
          { label: 'Confidence Level', value: 30, color: '#52bed6' },
          { label: 'Motivation Level', value: 50, color: '#195a76' },
        ]}
      />
    ),
    legendItems: [
      { label: 'Energy Level', value: '80%', color: '#dceff4' },
      { label: 'Focus Level', value: '30%', color: '#9fddec' },
      { label: 'Confidence Level', value: '30%', color: '#52bed6' },
      { label: 'Motivation Level', value: '50%', color: '#195a76' },
    ],
  },
}

export default meta

type Story = StoryObj<typeof MetricSection>

export const Base: Story = {
  render: (args) => <MetricSection {...args} style={{ width: 343 }} />,
}

export const LongTitle: Story = {
  render: (args) => (
    <MetricSection
      {...args}
      title="Readiness and focus balance over the last 7 training sessions"
      scoreLabel="68%"
      style={{ width: 343 }}
    />
  ),
}

export const WithoutScoreLabel: Story = {
  render: (args) => <MetricSection {...args} scoreLabel={undefined} style={{ width: 343 }} />,
}
