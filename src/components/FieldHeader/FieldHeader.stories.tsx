import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldHeader } from './FieldHeader'

const meta: Meta<typeof FieldHeader> = {
  title: 'Components/Content & Structure/Field Header',
  component: FieldHeader,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof FieldHeader>

export const Base: Story = {
  render: (args) => (
    <div style={{ width: 343 }}>
      <FieldHeader
        {...args}
        title={
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--core-typography-font-family-primary), 'Gustavo', sans-serif",
              fontSize: 'calc(var(--core-typography-font-size-22) * 1px)',
              lineHeight: 'calc(var(--core-typography-line-height-24) * 1px)',
            }}
          >
            Energy Level
          </h2>
        }
        description={
          <p
            style={{
              margin: 0,
              fontFamily: "var(--core-typography-font-family-secondary), 'Surt', sans-serif",
              fontSize: 'calc(var(--core-typography-font-size-15) * 1px)',
              lineHeight: 'calc(var(--core-typography-line-height-20) * 1px)',
            }}
          >
            How energized do you feel today? Please, choose an option.
          </p>
        }
        meta={
          <span
            style={{
              fontFamily: "var(--core-typography-font-family-secondary), 'Surt', sans-serif",
              fontSize: 'calc(var(--core-typography-font-size-12) * 1px)',
              lineHeight: 'calc(var(--core-typography-line-height-16) * 1px)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--semantic-color-text-secondary)',
            }}
          >
            Optional
          </span>
        }
      />
    </div>
  ),
}
