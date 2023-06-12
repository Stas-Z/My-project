import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

const people = [
  { value: '1', content: 'Durward' },
  { value: '2', content: 'Kenton' },
  { value: '3', content: 'Therese' },
  { value: '4', content: 'Benedict' },
  { value: '5', content: 'Katelyn' },
]

export const TopLeft = Template.bind({})
TopLeft.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options',
  items: people,
  direction: 'top_left',
}
export const TopRight = Template.bind({})
TopRight.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options',
  items: people,
  direction: 'top_right',
}
export const BottomLeft = Template.bind({})
BottomLeft.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options',
  items: people,
  direction: 'bottom_left',
}
export const BottomRight = Template.bind({})
BottomRight.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options',
  items: people,
  direction: 'bottom_right',
}
