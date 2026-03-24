import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUpRight, Link2 } from 'lucide-react'
import { Link } from './Link'
import '../../stories/Documentation/DocsPages.css'
import './Link.docs.css'

const meta: Meta<typeof Link> = {
  title: 'Components/Primitives/Link',
  component: Link,
  parameters: { layout: 'centered' },
  args: {
    href: '#',
    children: 'Open details',
    size: 'md',
    tone: 'default',
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'Link destination.',
      table: { defaultValue: { summary: '#' } },
    },
    children: {
      control: 'text',
      description: 'Visible link label.',
      table: { defaultValue: { summary: '-' } },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      description: 'Text size variant.',
      table: { defaultValue: { summary: 'md' } },
    },
    tone: {
      control: 'radio',
      options: ['default', 'muted', 'inverse'],
      description: 'Color treatment for different surfaces.',
      table: { defaultValue: { summary: 'default' } },
    },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const Base: Story = {}

export const WithIcons: Story = {
  render: (args) => (
    <div className="link-circuit-row">
      <Link {...args} leadingIcon={<Link2 />}>Read the brief</Link>
      <Link {...args} trailingIcon={<ArrowUpRight />}>Open in new tab</Link>
    </div>
  ),
}

export const Tones: Story = {
  render: (args) => (
    <div className="link-tone-stack">
      <Link {...args} tone="default">Primary link</Link>
      <Link {...args} tone="muted">Muted link</Link>
      <div className="link-tone-inverse-surface">
        <Link {...args} tone="inverse">Inverse link</Link>
      </div>
    </div>
  ),
}
