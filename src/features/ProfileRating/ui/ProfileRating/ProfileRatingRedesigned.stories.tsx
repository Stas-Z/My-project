import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ProfileRating } from './ProfileRating'

export default {
  title: 'features/Profile/ProfileRating/Redesigned',
  component: ProfileRating,
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileRating>

type Template = StoryObj<typeof ProfileRating>

export const WithoutRate: Template = {
  args: { profileId: '1' },
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [{}],
      },
    ],
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      user: { authData: { id: '1' } },
    }),
  ],
}

export const Light: Template = {
  args: { profileId: '1' },
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      user: { authData: { id: '1' } },
    }),
  ],
}
