import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'
import '../../stories/Documentation/DocsPages.css'
import './Avatar.docs.css'

const personPhotos = {
  athleteRound: '/avatar-assets/avatar-photo-round.svg',
} as const

const brandLogos = {
  academySquare: '/avatar-assets/avatar-logo-square.svg',
} as const

const meta: Meta<typeof Avatar> = {
  title: 'Components/Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'xl',
    type: 'initials',
    shape: 'default',
    initials: 'DM',
    src: undefined,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Avatar size variant from the component set.',
      table: { defaultValue: { summary: 'md' } },
    },
    type: {
      control: 'select',
      options: ['photo', 'logo', 'initials'],
      description: 'Avatar content variant.',
      table: { defaultValue: { summary: 'initials' } },
    },
    shape: {
      control: 'select',
      options: ['round', 'square', 'default'],
      description: 'Container shape variant.',
      table: { defaultValue: { summary: 'default' } },
    },
    src: {
      control: 'text',
      description: 'Image URL for photo/logo variants.',
      table: { defaultValue: { summary: '-' } },
    },
    name: {
      control: 'text',
      description: 'Accessible label and initials source.',
      table: { defaultValue: { summary: '-' } },
    },
    initials: {
      control: 'text',
      description: 'Manual initials override.',
      table: { defaultValue: { summary: '-' } },
    },
    alt: {
      control: 'text',
      description: 'Accessible label override.',
      table: { defaultValue: { summary: '-' } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Base: Story = {
  render: (args) => {
    const fallbackSrc =
      args.type === 'photo'
        ? personPhotos.athleteRound
        : args.type === 'logo'
          ? brandLogos.academySquare
          : undefined

    return <Avatar {...args} src={args.src ?? fallbackSrc} />
  },
  args: {
    size: 'xl',
    type: 'photo',
    shape: 'default',
    initials: 'DM',
    src: undefined,
  },
}

export const Types: Story = {
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar
        {...args}
        size="xl"
        type="photo"
        shape="round"
        name="Athlete profile photo"
        src={personPhotos.athleteRound}
      />
      <Avatar
        {...args}
        size="xl"
        type="logo"
        shape="square"
        name="Academy logo"
        src={brandLogos.academySquare}
      />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="DM" name="Diego Mora" src={undefined} />
    </div>
  ),
}

export const Shapes: Story = {
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar
        {...args}
        size="xl"
        type="photo"
        shape="round"
        name="Round profile"
        src={personPhotos.athleteRound}
      />
      <Avatar {...args} size="xl" type="initials" shape="round" initials="DM" name="Round initials" src={undefined} />
      <Avatar {...args} size="xl" type="logo" shape="square" name="Square logo" src={brandLogos.academySquare} />
      <Avatar {...args} size="xl" type="initials" shape="square" initials="DM" name="Square initials" src={undefined} />
    </div>
  ),
}

export const Fallbacks: Story = {
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar
        {...args}
        size="xl"
        type="photo"
        shape="round"
        initials="DM"
        name="Photo fallback"
        src={undefined}
      />
      <Avatar
        {...args}
        size="xl"
        type="logo"
        shape="square"
        initials="TA"
        name="Logo fallback"
        src={undefined}
      />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="DM" name="Initials fallback" src={undefined} />
    </div>
  ),
}

export const Grouped: Story = {
  render: (args) => (
    <div className="avatar-circuit-group">
      <Avatar {...args} size="md" type="photo" shape="round" name="Player one" src={personPhotos.athleteRound} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="TA" name="Coach initials" src={undefined} />
      <Avatar {...args} size="md" type="logo" shape="square" name="Academy logo" src={brandLogos.academySquare} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="+3" name="More participants" src={undefined} />
    </div>
  ),
}

export const ObjectVariant: Story = {
  name: 'Photo',
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="photo" shape="round" name="Athlete profile photo" src={personPhotos.athleteRound} />
    </div>
  ),
}

export const IdentityVariant: Story = {
  name: 'Logo',
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar {...args} size="xl" type="logo" shape="square" name="Academy logo" src={brandLogos.academySquare} />
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="avatar-circuit-row">
      <Avatar {...args} size="sm" type="initials" shape="default" initials="SM" aria-label="SM" src={undefined} />
      <Avatar {...args} size="md" type="initials" shape="default" initials="MD" aria-label="MD" src={undefined} />
      <Avatar {...args} size="lg" type="initials" shape="default" initials="LG" aria-label="LG" src={undefined} />
      <Avatar {...args} size="xl" type="initials" shape="default" initials="XL" aria-label="XL" src={undefined} />
    </div>
  ),
}
