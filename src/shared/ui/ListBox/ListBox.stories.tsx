import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

const people = [
  { value: '1', content: 'Durward' },
  { value: '2', content: 'Kenton' },
  { value: '3', content: 'Therese' },
  { value: '4', content: 'Benedict' },
  { value: '5', content: 'Katelyn' },
]

export const Light = Template.bind({})
Light.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options list',
  items: people,
}

export const Dark = Template.bind({})
Dark.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options list',
  items: people,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  label: 'Text Sample',
  value: undefined,
  defaultValue: 'Options list',
  items: people,
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
