import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const AuthLight = Template.bind({})
AuthLight.args = {}
AuthLight.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const AuthDark = Template.bind({})
AuthDark.args = {}
AuthDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})]

export const AuthChoco = Template.bind({})
AuthChoco.args = {}
AuthChoco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    user: { authData: {} },
  }),
]
