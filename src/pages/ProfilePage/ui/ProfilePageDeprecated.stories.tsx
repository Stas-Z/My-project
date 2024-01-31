import { Meta, StoryObj } from '@storybook/react'

import { Country } from '@/entities/Country/testing'
import { Currency } from '@/entities/Currency/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage/Deprecated',
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
} as Meta<typeof ProfilePage>

type Template = StoryObj<typeof ProfilePage>

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

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const Dark: Template = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const Choco: Template = {
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      profile: {
        readonly: true,
        form: data,
      },
    }),
  ],
}

export const Error: Template = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: true,
        error: 'true',
      },
    }),
  ],
  parameters: {
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
  },
}
