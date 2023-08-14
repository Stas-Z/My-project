import { ComponentStory, ComponentMeta } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Notification } from '@/entities/Notification/testing'
import { Navbar } from './Navbar'

const items: Notification[] = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло какое-то событие',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '4',
    title: 'Уведомление 4',
    description: 'Произошло какое-то событие',
  },
  {
    id: '5',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
  },
]

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [withMock],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: items,
      },
    ],
  },
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
