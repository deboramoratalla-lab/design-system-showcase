import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResponseCard } from './ResponseCard'
import '../../stories/Documentation/DocsPages.css'
import './ResponseCard.docs.css'

const meta: Meta<typeof ResponseCard> = {
  title: 'Components/Patterns/Response Card',
  component: ResponseCard,
  parameters: { layout: 'centered' },
  args: {
    tone: 'blue',
    children: 'Being with friends, training hard, learning new things.',
  },
  argTypes: {
    tone: { control: 'radio', options: ['blue', 'green', 'orange', 'lilac'] },
    children: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof ResponseCard>

export const Base: Story = {
  render: (args) => <ResponseCard {...args} style={{ width: 343 }} />,
}

export const Tones: Story = {
  render: (args) => (
    <div className="response-card-circuit-column">
      <ResponseCard {...args} tone="blue" style={{ width: 343 }}>
        Being with friends, training hard, learning new things.
      </ResponseCard>
      <ResponseCard {...args} tone="green" style={{ width: 343 }}>
        Improve second serve consistency to 70% in match play.
      </ResponseCard>
      <ResponseCard {...args} tone="orange" style={{ width: 343 }}>
        <strong>Grinder</strong>
        {' — Physical, mentally tough, and willing to stay in rallies until the opponent breaks.'}
      </ResponseCard>
      <ResponseCard {...args} tone="lilac" style={{ width: 343 }}>
        I want to be at my peak performance. Improve my racket skills and win a decisive point.
      </ResponseCard>
    </div>
  ),
}
