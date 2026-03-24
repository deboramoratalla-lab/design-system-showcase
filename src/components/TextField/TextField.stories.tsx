import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search as SearchIcon, X } from 'lucide-react'
import { FieldHeader } from '../FieldHeader'
import { TextField } from './TextField'
import '../../stories/Documentation/DocsPages.css'
import './TextField.docs.css'

const meta: Meta<typeof TextField> = {
  title: 'Components/Form Controls/Text Field',
  component: TextField,
  parameters: { layout: 'centered' },
  args: {
    label: 'Session title',
    description: 'Generic field primitive for shorter text inputs.',
    placeholder: 'Write a title',
    defaultValue: '',
    variant: 'outline',
    labelPlacement: 'top',
  },
  argTypes: {
    label: { control: 'text', table: { defaultValue: { summary: '-' } } },
    description: { control: 'text', table: { defaultValue: { summary: '-' } } },
    placeholder: { control: 'text', table: { defaultValue: { summary: '-' } } },
    error: { control: 'text', table: { defaultValue: { summary: '-' } } },
    variant: { control: 'radio', options: ['outline', 'fill'] },
    labelPlacement: { control: 'radio', options: ['top', 'floating'] },
    disabled: { control: 'boolean' },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Base: Story = {
  render: (args) => <TextField {...args} style={{ width: 320 }} />,
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
            Opponent Name
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
            Who are you facing today? Please, write an answer.
          </p>
        }
      />
      <TextField
        {...args}
        label="Opponent Name"
        labelPlacement="floating"
        description={undefined}
        defaultValue="Mike Thompsom"
        style={{ width: 343 }}
      />
    </div>
  ),
}

export const FloatingLabel: Story = {
  render: (args) => (
    <TextField
      {...args}
      label="Opponent Name"
      labelPlacement="floating"
      defaultValue="Mike Thompsom"
      style={{ width: 343 }}
    />
  ),
}

export const WithValue: Story = {
  render: (args) => <TextField {...args} defaultValue="Pre-practice routine" style={{ width: 320 }} />,
}

export const WithError: Story = {
  render: (args) => (
    <TextField
      {...args}
      label="Search"
      placeholder="Try searching"
      defaultValue="bad input"
      error="This value needs a clearer label."
      style={{ width: 320 }}
    />
  ),
}

export const Search: Story = {
  render: (args) => (
    <TextField
      {...args}
      label={undefined}
      placeholder="Search routines"
      leadingIcon={<SearchIcon />}
      trailingIcon={<X />}
      style={{ width: 343 }}
    />
  ),
}

export const Filled: Story = {
  render: (args) => (
    <TextField
      {...args}
      label={undefined}
      variant="fill"
      placeholder="Search routines"
      leadingIcon={<SearchIcon />}
      trailingIcon={<X />}
      style={{ width: 343 }}
    />
  ),
}

export const Disabled: Story = {
  render: (args) => <TextField {...args} label="Disabled field" placeholder="Unavailable" disabled style={{ width: 320 }} />,
}
