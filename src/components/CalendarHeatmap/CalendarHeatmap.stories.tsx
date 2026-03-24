import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CalendarHeatmap, type CalendarHeatmapDay } from './CalendarHeatmap'

const meta: Meta<typeof CalendarHeatmap> = {
  title: 'Components/Data Viz/Calendar Heatmap',
  component: CalendarHeatmap,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof CalendarHeatmap>

const baseDays: CalendarHeatmapDay[] = [
  '24', '25', '26', '27', '28', '1', '2',
  '3', '4', '5', '6', '7', '8', '9',
  '10', '11', '12', '13', '14', '15', '16',
  '17', '18', '19', '20', '21', '22', '23',
  '24', '25', '26', '27', '28', '29', '30',
  '31', '1', '2', '3', '4', '5', '6',
].map((label, index) => ({
  date: `2025-03-${String(index + 1).padStart(2, '0')}`,
  label,
  state: index % 5 === 0 ? 'complete' : index % 3 === 0 ? 'partial' : 'empty',
}))

export const Base: Story = {
  render: () => {
    const [selected, setSelected] = useState('2025-03-06')

    const days = baseDays.map((day) => ({
      ...day,
      state: day.date === selected ? 'selected' : day.state,
    }))

    return <CalendarHeatmap monthLabel="March" yearLabel="2025" days={days} onSelectDay={setSelected} />
  },
}
