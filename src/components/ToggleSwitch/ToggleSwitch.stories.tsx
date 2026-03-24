import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToggleSwitch, type ToggleSwitchProps } from './ToggleSwitch'
import '../../stories/Documentation/DocsPages.css'
import './ToggleSwitch.docs.css'

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/Primitives/Toggle Switch',
  component: ToggleSwitch,
  parameters: { layout: 'centered' },
  args: {
    checked: false,
    disabled: false,
    visualState: 'default',
    'aria-label': 'Toggle switch',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Current on/off state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction.',
      table: { defaultValue: { summary: 'false' } },
    },
    visualState: {
      control: 'radio',
      options: ['default', 'focus'],
      description: 'Preview-only visual state override for docs.',
      table: { defaultValue: { summary: 'default' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof ToggleSwitch>

function InteractivePreview(args: ToggleSwitchProps) {
  const [value, setValue] = useState(Boolean(args.checked))

  return (
    <ToggleSwitch
      {...args}
      checked={value}
      onClick={() => {
        if (args.disabled) return
        setValue((prev) => !prev)
      }}
    />
  )
}

export const Base: Story = {
  render: (args) => <InteractivePreview {...args} />,
}

export const States: Story = {
  render: (args) => (
    <div className="toggle-switch-circuit-row">
      <ToggleSwitch {...args} checked={false} aria-label="Off" />
      <ToggleSwitch {...args} checked aria-label="On" />
      <ToggleSwitch {...args} checked visualState="focus" aria-label="Focused on" />
      <ToggleSwitch {...args} checked={false} disabled aria-label="Disabled off" />
    </div>
  ),
}

export const InFormRow: Story = {
  render: (args) => (
    <div className="toggle-switch-form-preview">
      <label className="toggle-switch-form-row">
        <span>Email notifications</span>
        <ToggleSwitch {...args} checked aria-label="Email notifications" />
      </label>
      <label className="toggle-switch-form-row">
        <span>Weekly summary</span>
        <ToggleSwitch {...args} checked={false} aria-label="Weekly summary" />
      </label>
      <label className="toggle-switch-form-row">
        <span>Beta updates</span>
        <ToggleSwitch {...args} checked={false} disabled aria-label="Beta updates" />
      </label>
    </div>
  ),
}
