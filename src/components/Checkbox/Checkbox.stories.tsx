import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'
import '../../stories/Documentation/DocsPages.css'
import './Checkbox.docs.css'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Primitives/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  args: {
    checked: false,
    size: 'md',
    indeterminate: false,
    visualState: 'enabled',
    'aria-label': 'Checkbox',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox size variant.',
      table: { defaultValue: { summary: 'md' } },
    },
    checked: {
      control: 'boolean',
      description: 'Checked selection state.',
      table: { defaultValue: { summary: 'false' } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Mixed state for partial selection contexts.',
      table: { defaultValue: { summary: 'false' } },
    },
    visualState: {
      control: 'radio',
      options: ['enabled', 'hovered', 'focused', 'disabled'],
      description: 'Preview-only visual state override for docs.',
      table: { defaultValue: { summary: 'enabled' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

function StateCell({
  label,
  children,
  subtle = false,
}: {
  label: string
  children: React.ReactNode
  subtle?: boolean
}) {
  return (
    <div className="checkbox-state-card" data-subtle={subtle ? 'true' : undefined}>
      {children}
      <span className="checkbox-state-label">{label}</span>
    </div>
  )
}

export const Base: Story = {
  args: {
    checked: false,
    indeterminate: false,
    visualState: 'enabled',
    size: 'md',
    'aria-label': 'Checkbox',
  },
  argTypes: {
    visualState: {
      control: false,
      table: { disable: true },
    },
  },
  render: ({ visualState: _visualState, ...args }) => <Checkbox {...args} visualState="enabled" />,
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="checkbox-circuit-row">
      <Checkbox {...args} size="sm" aria-label="Small unchecked" />
      <Checkbox {...args} size="sm" checked aria-label="Small checked" />
      <Checkbox {...args} size="md" aria-label="Medium unchecked" />
      <Checkbox {...args} size="md" checked aria-label="Medium checked" />
      <Checkbox {...args} size="lg" aria-label="Large unchecked" />
      <Checkbox {...args} size="lg" checked aria-label="Large checked" />
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div className="checkbox-state-grid">
      <StateCell label="Enabled">
        <Checkbox {...args} checked={false} visualState="enabled" aria-label="Enabled unchecked" />
      </StateCell>
      <StateCell label="Hovered">
        <Checkbox {...args} checked visualState="hovered" aria-label="Hovered checked" />
      </StateCell>
      <StateCell label="Focused">
        <Checkbox {...args} checked visualState="focused" aria-label="Focused checked" />
      </StateCell>
      <StateCell label="Disabled" subtle>
        <Checkbox {...args} checked={false} visualState="disabled" aria-label="Disabled unchecked" />
      </StateCell>
    </div>
  ),
}

export const SelectionStates: Story = {
  render: (args) => (
    <div className="checkbox-state-grid">
      <StateCell label="Unchecked">
        <Checkbox {...args} checked={false} visualState="enabled" aria-label="Unchecked" />
      </StateCell>
      <StateCell label="Checked">
        <Checkbox {...args} checked visualState="enabled" aria-label="Checked" />
      </StateCell>
      <StateCell label="Indeterminate">
        <Checkbox {...args} indeterminate visualState="enabled" aria-label="Indeterminate" />
      </StateCell>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="checkbox-state-grid">
      <StateCell label="Unchecked" subtle>
        <Checkbox {...args} checked={false} visualState="disabled" aria-label="Disabled unchecked" />
      </StateCell>
      <StateCell label="Checked" subtle>
        <Checkbox {...args} checked visualState="disabled" aria-label="Disabled checked" />
      </StateCell>
      <StateCell label="Indeterminate" subtle>
        <Checkbox {...args} indeterminate visualState="disabled" aria-label="Disabled indeterminate" />
      </StateCell>
    </div>
  ),
}
