import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AnimationDecorator } from 'shared/config/storybook/AnimationDecorator/AnimationDecorator'
import { Drawer } from './Drawer'

const data =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iste ut obcaecati, esse temporibus et quasi, omnis dolorum eveniet quos eius corrupti nam magni inventore excepturi dolor! Officiis, placeat sed.'

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [AnimationDecorator()],
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  children: data,
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: <div style={{ color: '#04ff04' }}>{data}</div>,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  isOpen: true,
  children: data,
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
