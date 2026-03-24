import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChoiceChipGroup } from '../ChoiceChipGroup'
import { FormSection } from './FormSection'

const meta: Meta<typeof FormSection> = {
  title: 'Components/Content & Structure/Form Section',
  component: FormSection,
  parameters: { layout: 'centered' },
  args: {
    label: 'Energy Level',
    description: 'How energized do you feel today? Please, choose an option.',
    optional: false,
  },
}

export default meta

type Story = StoryObj<typeof FormSection>

export const Base: Story = {
  render: (args) => (
    <FormSection {...args}>
      <ChoiceChipGroup
        selectionMode="single"
        value="well-balanced"
        options={[
          { label: 'Fully Energized', value: 'fully-energized' },
          { label: 'Well-Balanced', value: 'well-balanced' },
          { label: 'Up & Down', value: 'up-down' },
          { label: 'Drained', value: 'drained' },
        ]}
      />
    </FormSection>
  ),
}
