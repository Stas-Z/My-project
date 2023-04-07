import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { LoginForm } from './LoginForm'

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
export const withError = Template.bind({})
withError.args = {}
withError.decorators = [
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
export const withErrorDark = Template.bind({})
withErrorDark.args = {}
withErrorDark.decorators = [
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
