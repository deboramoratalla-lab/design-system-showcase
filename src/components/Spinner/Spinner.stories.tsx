import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'
import '../../stories/Documentation/DocsPages.css'
import './Spinner.docs.css'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Primitives/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  args: {
    size: 'md',
    tone: 'default',
    label: 'Loading content',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Spinner size.',
      table: { defaultValue: { summary: 'md' } },
    },
    tone: {
      control: 'radio',
      options: ['default', 'inverse'],
      description: 'Color treatment for light or dark surfaces.',
      table: { defaultValue: { summary: 'default' } },
    },
    label: {
      control: 'text',
      description: 'Accessible loading label.',
      table: { defaultValue: { summary: 'Loading' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Base: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="spinner-circuit-row">
      <Spinner {...args} size="sm" />
      <Spinner {...args} size="md" />
      <Spinner {...args} size="lg" />
    </div>
  ),
}

export const Tones: Story = {
  render: (args) => (
    <div className="spinner-tone-grid">
      <div className="spinner-tone-card">
        <Spinner {...args} tone="default" />
      </div>
      <div className="spinner-tone-card spinner-tone-card--inverse">
        <Spinner {...args} tone="inverse" />
      </div>
    </div>
  ),
}
