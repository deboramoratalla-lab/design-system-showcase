import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldHeader } from '../FieldHeader'
import { Textarea } from './Textarea'
import '../../stories/Documentation/DocsPages.css'
import './Textarea.docs.css'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form Controls/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  args: {
    label: undefined,
    description: undefined,
    placeholder: 'Write your reflection',
    defaultValue: 'Today, I will focus on attacking short balls.',
    variant: 'fill',
    rows: 2,
  },
  argTypes: {
    label: { control: 'text', table: { defaultValue: { summary: '-' } } },
    description: { control: 'text', table: { defaultValue: { summary: '-' } } },
    placeholder: { control: 'text', table: { defaultValue: { summary: '-' } } },
    error: { control: 'text', table: { defaultValue: { summary: '-' } } },
    variant: { control: 'radio', options: ['outline', 'fill'] },
    rows: { control: { type: 'number', min: 1, max: 8, step: 1 } },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Base: Story = {
  render: (args) => <Textarea {...args} style={{ width: 343 }} />,
}

export const Outlined: Story = {
  render: (args) => (
    <Textarea
      {...args}
      variant="outline"
      defaultValue="Stay focused for 90 minutes in a match."
      rows={1}
      style={{ width: 343 }}
    />
  ),
}

export const InFormContext: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, width: 343 }}>
      <FieldHeader
        title={
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--core-typography-font-family-primary), 'Gustavo', sans-serif",
              fontSize: '16px',
              lineHeight: '22px',
            }}
          >
            Match analysis for your coach
          </h2>
        }
        description={
          <p
            style={{
              margin: 0,
              fontFamily: "var(--core-typography-font-family-secondary), 'Surt', sans-serif",
              fontSize: '14px',
              lineHeight: '20px',
            }}
          >
            What was the biggest turning point in the match?
          </p>
        }
      />
      <Textarea
        {...args}
        label={undefined}
        description={undefined}
        variant="outline"
        defaultValue="I shifted momentum when I started attacking second serves."
        rows={4}
        style={{ width: 343 }}
      />
    </div>
  ),
}

export const WithValue: Story = {
  render: (args) => (
    <Textarea
      {...args}
      defaultValue="I felt more confident after the warm-up and reacted well under pressure."
      rows={3}
      style={{ width: 343 }}
    />
  ),
}

export const WithError: Story = {
  render: (args) => (
    <Textarea
      {...args}
      label="Coach notes"
      description="Summarize what happened and what you want to improve next."
      variant="outline"
      defaultValue="Needs more detail."
      error="Add a clearer summary of what happened."
      rows={3}
      style={{ width: 343 }}
    />
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Textarea
      {...args}
      label="Locked response"
      description="This answer was already submitted."
      disabled
      defaultValue="This field is unavailable."
      rows={3}
      style={{ width: 343 }}
    />
  ),
}
