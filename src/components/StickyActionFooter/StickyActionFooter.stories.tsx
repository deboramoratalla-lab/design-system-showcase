import type { Meta, StoryObj } from '@storybook/react-vite'
import { StickyActionFooter } from './StickyActionFooter'
import '../../stories/Documentation/DocsPages.css'
import './StickyActionFooter.docs.css'

const meta: Meta<typeof StickyActionFooter> = {
  title: 'Components/Patterns/Sticky Action Footer',
  component: StickyActionFooter,
  parameters: { layout: 'centered' },
  args: {
    primaryActionLabel: 'Next',
    helperText: "Remember, you can't continue until all fields are completed.",
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof StickyActionFooter>

export const Base: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
