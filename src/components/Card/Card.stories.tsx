import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight } from 'lucide-react'
import { Card } from './Card'
import '../../stories/Documentation/DocsPages.css'
import './Card.docs.css'

const meta: Meta<typeof Card> = {
  title: 'Components/Primitives/Card',
  component: Card,
  parameters: { layout: 'centered' },
  args: {
    variant: 'outlined',
    padding: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Base: Story = {
  args: {
    variant: "outlined"
  },

  render: (args) => (
    <Card {...args} style={{ width: 320 }}>
      <strong>Training plan</strong>
      <p style={{ margin: 0, color: 'var(--semantic-color-text-secondary)' }}>
        Generic surface to compose richer product cards.
      </p>
    </Card>
  )
}

export const Interactive: Story = {
  args: {
    interactive: true,
  },
  render: (args) => (
    <Card {...args} style={{ width: 320 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <strong>Open weekly report</strong>
          <p style={{ margin: '4px 0 0', color: 'var(--semantic-color-text-secondary)' }}>
            Useful as a reusable container beneath product patterns.
          </p>
        </div>
        <ArrowRight size={18} />
      </div>
    </Card>
  ),
}
