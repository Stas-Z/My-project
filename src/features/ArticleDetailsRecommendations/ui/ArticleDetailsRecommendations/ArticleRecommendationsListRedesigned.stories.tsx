import { Meta, StoryObj } from '@storybook/react'

import { articlesMock } from '@/entities/Article/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ArticleRecommendationsList from './ArticleRecommendationsList'

const articles = articlesMock

export default {
  title: 'features/Article/ArticleDetailsRecommendations/Redesigned',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4&_expand=user:1`,
        method: 'GET',
        status: 200,
        response: articles,
      },
    ],
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleRecommendationsList>

type Template = StoryObj<typeof ArticleRecommendationsList>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({}),
    LokiDelayDecorator(),
  ],
}
