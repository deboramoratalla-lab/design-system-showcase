import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'
import '../../stories/Documentation/DocsPages.css'
import './Radio.docs.css'

const meta: Meta<typeof Radio> = {
  title: 'Components/Primitives/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  args: {
    size: 'md',
    checked: false,
    disabled: false,
    visualState: 'enabled',
    'aria-label': 'Radio button',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Radio size variant.',
      table: { defaultValue: { summary: 'md' } },
    },
    checked: {
      control: 'boolean',
      description: 'Checked selection state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction.',
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

type Story = StoryObj<typeof Radio>

export const Base: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Radio {...args} size="sm" checked={false} aria-label="Small unchecked" />
      <Radio {...args} size="sm" checked aria-label="Small checked" />
      <Radio {...args} size="md" checked={false} aria-label="Medium unchecked" />
      <Radio {...args} size="md" checked aria-label="Medium checked" />
      <Radio {...args} size="lg" checked={false} aria-label="Large unchecked" />
      <Radio {...args} size="lg" checked aria-label="Large checked" />
    </div>
  ),
}

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Radio {...args} size="md" checked={false} visualState="enabled" aria-label="Enabled unchecked" />
        <Radio {...args} size="md" checked visualState="enabled" aria-label="Enabled checked" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Radio {...args} size="md" checked={false} visualState="hovered" aria-label="Hovered unchecked" />
        <Radio {...args} size="md" checked visualState="hovered" aria-label="Hovered checked" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Radio {...args} size="md" checked={false} visualState="focused" aria-label="Focused unchecked" />
        <Radio {...args} size="md" checked visualState="focused" aria-label="Focused checked" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Radio {...args} size="md" checked={false} visualState="disabled" aria-label="Disabled unchecked" />
        <Radio {...args} size="md" checked visualState="disabled" aria-label="Disabled checked" />
      </div>
    </div>
  ),
}
