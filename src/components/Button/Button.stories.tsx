import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRight, Plus } from 'lucide-react'
import { Button, type ButtonProps } from './Button'
import './Button.docs.css'

const meta: Meta<typeof Button> = {
  title: 'Components/Primitives/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    children: 'Say hello',
    disabled: false,
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    loading: false,
    visualState: 'default',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text.',
      table: { defaultValue: { summary: '-' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button interaction.',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'Selects emphasis and visual style.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Defines button size and spacing.',
      table: { defaultValue: { summary: 'md' } },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Renders a circular icon-only button.',
      table: { defaultValue: { summary: 'false' } },
    },
    leadingIcon: {
      control: false,
      description: 'Leading icon element.',
      table: { category: 'Icons' },
    },
    trailingIcon: {
      control: false,
      description: 'Trailing icon element.',
      table: { category: 'Icons' },
    },
    loading: {
      control: 'boolean',
      description: 'Displays spinner and locks interaction.',
      table: { defaultValue: { summary: 'false' } },
    },
    visualState: {
      control: 'radio',
      options: ['default', 'hover', 'active', 'focus'],
      description: 'Preview-only visual state override for docs.',
      table: { defaultValue: { summary: 'default' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

function LoadingPreview(args: ButtonProps) {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    if (!isLoading) return
    const timeout = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timeout)
  }, [isLoading])

  return (
    <div className="button-circuit-row">
      <Button {...args} variant="primary" loading={isLoading} onClick={() => setLoading(true)}>
        Save changes
      </Button>
      <Button {...args} variant="secondary" loading={isLoading} onClick={() => setLoading(true)}>
        Save draft
      </Button>
    </div>
  )
}

export const Base: Story = {
  args: {
    children: 'Say hello',
    variant: 'primary',
    size: 'md',
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="button-circuit-row">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="tertiary">Tertiary</Button>
    </div>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <div className="button-circuit-row">
      <Button {...args} variant="secondary">Cancel</Button>
      <Button {...args} variant="danger">Delete</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="button-circuit-row">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className="button-circuit-row">
      <Button {...args} leadingIcon={<Plus />}>Add to cart</Button>
      <Button {...args} trailingIcon={<ArrowUpRight />}>Terms</Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: (args) => (
    <div className="button-circuit-row">
      <Button {...args} variant="secondary" size="sm" iconOnly leadingIcon={<Plus />} aria-label="Add" title="Add" />
      <Button
        {...args}
        variant="secondary"
        size="md"
        iconOnly
        leadingIcon={<ArrowUpRight />}
        aria-label="Open details"
        title="Open details"
      />
      <Button {...args} variant="primary" size="lg" iconOnly leadingIcon={<Plus />} aria-label="Create" title="Create" />
    </div>
  ),
}

export const Loading: Story = {
  render: (args) => <LoadingPreview {...args} />,
  args: {
    children: 'Save',
  },
}

export const ButtonGroup: Story = {
  render: (args) => (
    <div className="button-circuit-group">
      <Button {...args} variant="secondary">Cancel</Button>
      <Button {...args}>Confirm</Button>
    </div>
  ),
}
