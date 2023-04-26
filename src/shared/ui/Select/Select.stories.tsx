import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Light = Template.bind({})
Light.args = {
  label: 'Text Sample',
  options: [
    { value: '1', content: '1' },
    { value: 'a', content: 'a' },
    { value: '+', content: '+' },
  ],
}

export const Dark = Template.bind({})
Dark.args = {
  label: 'Text Sample',
  options: [
    { value: '1', content: '1' },
    { value: 'a', content: 'a' },
    { value: '+', content: '+' },
  ],
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Choco = Template.bind({})
Choco.args = {
  label: 'Text Sample',
  options: [
    { value: '1', content: '1' },
    { value: 'a', content: 'a' },
    { value: '+', content: '+' },
  ],
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
