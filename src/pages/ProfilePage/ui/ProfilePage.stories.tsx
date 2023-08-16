import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    router: {
      path: '/profile/:id',
      route: '/profile/1',
    },
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
)

const data = {
  first: 'Станислав',
  lastname: 'Заболотный',
  age: 38,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/116818633',
}

export const Light = Template.bind({})
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
  withMock,
]
export const Dark = Template.bind({})
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
  withMock,
]

export const Choco = Template.bind({})
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    profile: {
      readonly: true,
      form: data,
    },
  }),
  withMock,
]

export const Error = Template.bind({})
Error.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      error: 'true',
    },
  }),
  withMock,
]
Error.parameters = {
  router: {
    path: '/profile/:id',
    route: '/profile/15',
  },
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=15`,
      method: 'GET',
      status: 404,
      response: [],
    },
  ],
}
