import type React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Bookmark,
  Box,
  Calendar,
  Check,
  Clock,
  Download,
  Edit3,
  Eye,
  EyeOff,
  Filter,
  Heart,
  Home,
  Link2,
  Mail,
  Menu,
  MoreHorizontal,
  Pause,
  Phone,
  Play,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  Upload,
  User,
  X,
} from 'lucide-react'
import { Button } from './Button'
import { customIconRegistry } from '../../icons/custom/registry'
const iconRegistry = {
  box: Box,
  plus: Plus,
  check: Check,
  search: Search,
  bell: Bell,
  star: Star,
  x: X,
  settings: Settings,
  user: User,
  heart: Heart,
  home: Home,
  mail: Mail,
  phone: Phone,
  calendar: Calendar,
  clock: Clock,
  download: Download,
  upload: Upload,
  link: Link2,
  trash: Trash2,
  edit: Edit3,
  eye: Eye,
  eyeOff: EyeOff,
  filter: Filter,
  menu: Menu,
  more: MoreHorizontal,
  play: Play,
  pause: Pause,
  bookmark: Bookmark,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  ...customIconRegistry,
} as const

type IconOption = 'none' | keyof typeof iconRegistry
const iconOptions: IconOption[] = ['none', ...Object.keys(iconRegistry) as Array<keyof typeof iconRegistry>]

function iconFromOption(option: IconOption): React.ReactNode {
  if (option === 'none') return undefined
  const Icon = iconRegistry[option]
  return <Icon />
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    iconOnly: false,
    leadingIcon: 'none',
    trailingIcon: 'none',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    visualState: { control: 'select', options: ['default', 'hover', 'active', 'focus'] },
    leadingIcon: {
      control: 'select',
      options: iconOptions,
      mapping: Object.fromEntries(iconOptions.map((name) => [name, iconFromOption(name)])),
    },
    trailingIcon: {
      control: 'select',
      options: iconOptions,
      mapping: Object.fromEntries(iconOptions.map((name) => [name, iconFromOption(name)])),
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '132px repeat(4, max-content)',
  gap: 12,
  alignItems: 'center',
} satisfies React.CSSProperties

const sectionStyle = {
  display: 'grid',
  gap: 12,
} satisfies React.CSSProperties

const boardStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(620px, 1fr) minmax(340px, 420px)',
  gap: 28,
  maxWidth: 1160,
  alignItems: 'start',
} satisfies React.CSSProperties

const panelStyle = {
  border: '1px dashed #c8a9ff',
  borderRadius: 16,
  padding: 20,
  display: 'grid',
  gap: 24,
} satisfies React.CSSProperties

const variants = ['primary', 'secondary', 'tertiary', 'danger'] as const

type FigmaPlaygroundArgs = {
  size: 'sm' | 'md' | 'lg'
  color: 'primary' | 'secondary' | 'tertiary' | 'danger'
  state: 'enabled' | 'hover' | 'pressed' | 'focus' | 'disabled'
  leftArrow: boolean
  leadingIconOn: boolean
  leadingIconName: IconOption
  labelOn: boolean
  labelText: string
  trailingIconOn: boolean
  trailingIconName: IconOption
  rightArrow: boolean
}

export const Playground: Story = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    iconOnly: false,
    leadingIcon: 'none',
    trailingIcon: 'none',
  },
}

export const FigmaPlayground: StoryObj<FigmaPlaygroundArgs> = {
  parameters: {
    controls: { expanded: true },
  },
  args: {
    size: 'lg',
    color: 'primary',
    state: 'enabled',
    leftArrow: false,
    leadingIconOn: false,
    leadingIconName: 'box',
    labelOn: true,
    labelText: 'Label',
    trailingIconOn: true,
    trailingIconName: 'box',
    rightArrow: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      name: 'Size',
      table: { category: '<button>' },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      name: 'Color',
      table: { category: '<button>' },
    },
    state: {
      control: 'select',
      options: ['enabled', 'hover', 'pressed', 'focus', 'disabled'],
      name: 'State',
      table: { category: '<button>' },
    },
    leftArrow: {
      control: 'boolean',
      name: 'Left arrow?',
      table: { category: '_button innards' },
    },
    leadingIconOn: {
      control: 'boolean',
      name: 'Leading icon?',
      table: { category: '_button innards' },
    },
    leadingIconName: {
      control: 'select',
      options: iconOptions,
      name: '↳ leading icon',
      table: { category: '_button innards' },
      if: { arg: 'leadingIconOn', truthy: true },
    },
    labelOn: {
      control: 'boolean',
      name: 'Label?',
      table: { category: '_button innards' },
    },
    labelText: {
      control: 'text',
      name: '↳ label',
      table: { category: '_button innards' },
    },
    trailingIconOn: {
      control: 'boolean',
      name: 'Trailing icon?',
      table: { category: '_button innards' },
    },
    trailingIconName: {
      control: 'select',
      options: iconOptions,
      name: '↳ trailing icon',
      table: { category: '_button innards' },
      if: { arg: 'trailingIconOn', truthy: true },
    },
    rightArrow: {
      control: 'boolean',
      name: 'Right arrow?',
      table: { category: '_button innards' },
    },
  },
  render: (args) => {
    const visualState =
      args.state === 'hover'
        ? 'hover'
        : args.state === 'pressed'
          ? 'active'
          : args.state === 'focus'
            ? 'focus'
            : 'default'

    const leadingIcon = args.leftArrow
      ? <ArrowLeft />
      : args.leadingIconOn
        ? iconFromOption(args.leadingIconName)
        : undefined

    const trailingIcon = args.rightArrow
      ? <ArrowRight />
      : args.trailingIconOn
        ? iconFromOption(args.trailingIconName)
        : undefined

    const singleIconForIconOnly = leadingIcon ?? trailingIcon

    return (
      <div style={{ minHeight: 320, display: 'grid', placeItems: 'center' }}>
        <Button
          size={args.size}
          variant={args.color}
          disabled={args.state === 'disabled'}
          visualState={visualState}
          iconOnly={!args.labelOn}
          leadingIcon={!args.labelOn ? singleIconForIconOnly : leadingIcon}
          trailingIcon={!args.labelOn ? undefined : trailingIcon}
          aria-label={!args.labelOn ? args.labelText : undefined}
        >
          {args.labelOn ? args.labelText : undefined}
        </Button>
      </div>
    )
  },
}

export const FigmaUsageMatrix: Story = {
  render: () => (
    <div style={boardStyle}>
      <div style={panelStyle}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} style={sectionStyle}>
            <h4 style={{ margin: 0 }}>{size.toUpperCase()}</h4>
            <div style={rowStyle}>
              <span>Default</span>
              {variants.map((variant) => (
                <Button key={`${size}-${variant}-default`} size={size} variant={variant}>Label</Button>
              ))}
            </div>
            <div style={rowStyle}>
              <span>Hover</span>
              {variants.map((variant) => (
                <Button key={`${size}-${variant}-hover`} size={size} variant={variant} visualState="hover">Label</Button>
              ))}
            </div>
            <div style={rowStyle}>
              <span>Active</span>
              {variants.map((variant) => (
                <Button key={`${size}-${variant}-active`} size={size} variant={variant} visualState="active">Label</Button>
              ))}
            </div>
            <div style={rowStyle}>
              <span>Focus</span>
              {variants.map((variant) => (
                <Button key={`${size}-${variant}-focus`} size={size} variant={variant} visualState="focus">Label</Button>
              ))}
            </div>
            <div style={rowStyle}>
              <span>Disabled</span>
              {variants.map((variant) => (
                <Button key={`${size}-${variant}-disabled`} size={size} variant={variant} disabled>Label</Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h4 style={{ margin: 0 }}>Button usage</h4>
        <div style={rowStyle}>
          <span>Default</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-default`} variant={variant}>Label</Button>
          ))}
        </div>
        <div style={rowStyle}>
          <span>Leading icon</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-leading`} variant={variant} leadingIcon={<Box />}>Label</Button>
          ))}
        </div>
        <div style={rowStyle}>
          <span>Trailing icon</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-trailing`} variant={variant} trailingIcon={<Box />}>Label</Button>
          ))}
        </div>
        <div style={rowStyle}>
          <span>Back icon</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-back`} variant={variant} leadingIcon={<ArrowLeft />}>Label</Button>
          ))}
        </div>
        <div style={rowStyle}>
          <span>Next icon</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-next`} variant={variant} trailingIcon={<ArrowRight />}>Label</Button>
          ))}
        </div>
        <div style={rowStyle}>
          <span>Icon only</span>
          {variants.map((variant) => (
            <Button key={`usage-${variant}-icon`} aria-label={`${variant} icon button`} variant={variant} iconOnly leadingIcon={<Box />} />
          ))}
        </div>
        <div style={{ color: '#5f7479', fontSize: 12, lineHeight: 1.3 }}>
          Constrain width as needed
        </div>
      </div>
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button loading>Label</Button>
      <Button loading variant="secondary">Label</Button>
      <Button loading variant="tertiary">Label</Button>
      <Button loading variant="danger">Label</Button>
    </div>
  ),
}
