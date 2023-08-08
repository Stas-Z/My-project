import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Light = Template.bind({})
Light.args = {
  placeholder: 'Text Sample',
  value: '123123',
}
export const Dark = Template.bind({})
Dark.args = {
  placeholder: 'Text Sample',
  value: '123123',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  placeholder: 'Text Sample',
  value: '123123',
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
