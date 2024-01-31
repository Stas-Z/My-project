import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ArticleRating from './ArticleRating'

export default {
  title: 'features/ArticleRating/Redesigned',
  component: ArticleRating,
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleRating>

type Template = StoryObj<typeof ArticleRating>

export const WithoutRate: Template = {
  args: { articleId: '1' },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
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
  args: { articleId: '1' },
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      user: { authData: { id: '1' } },
    }),
  ],
}
