import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Sidebar } from './Sidebar'

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({ user: { authData: {} } })]

export const LightNoAuth = Template.bind({})
LightNoAuth.args = {}
LightNoAuth.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ user: { authData: {} } }),
]

export const DarkNoAuth = Template.bind({})
DarkNoAuth.args = {}
DarkNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
