import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import LoginForm from './LoginForm'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
]
export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [
  StoreDecorator({
    loginForm: { error: 'ERROR' },
  }),
]
export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
]
export const WithErrorDark = Template.bind({})
WithErrorDark.args = {}
WithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { error: 'ERROR' },
  }),
]
export const LoadingDark = Template.bind({})
LoadingDark.args = {}
LoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
]
export const WithErrorChoco = Template.bind({})
WithErrorChoco.args = {}
WithErrorChoco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    loginForm: { error: 'ERROR' },
  }),
]
export const LoadingChoco = Template.bind({})
LoadingChoco.args = {}
LoadingChoco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    loginForm: { username: 'admin', password: '123', isLoading: true },
  }),
]
