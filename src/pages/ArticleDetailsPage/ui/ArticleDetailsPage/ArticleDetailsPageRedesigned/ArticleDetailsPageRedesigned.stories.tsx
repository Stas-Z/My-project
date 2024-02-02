import { Meta, StoryObj } from '@storybook/react'

import { articleMock, articlesMock } from '@/entities/Article/testing'
import { rtkApi } from '@/shared/api/rtkApi'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleDetailsPageRedesigned } from './ArticleDetailsPageRedesigned'

const articles = articlesMock

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageRedesigned',
  component: ArticleDetailsPageRedesigned,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
    mockData: [
      {
        url: `${__API__}/articles?_limit=4&_expand=user:1`,
        method: 'GET',
        status: 200,
        response: articles,
      },
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 3,
            feedback: '',
          },
        ],
      },
    ],
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof ArticleDetailsPageRedesigned>

type Template = StoryObj<typeof ArticleDetailsPageRedesigned>

const article = articleMock

const entitiesComments = {
  1: {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
  2: {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
}
const idsComments = ['1', '2']

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: { data: article },
      articleComments: { entities: entitiesComments, ids: idsComments },
      user: { authData: { id: '1' } },
    }),
  ],
}

export const Loading: Template = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4&_expand=user:1`,
        method: 'GET',
        status: 200,
        response: articles,
        delay: 100000,
      },
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 400,
        response: [],
        delay: 100000,
      },
    ],
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: { isLoading: true },
      articleComments: {
        isLoading: true,
        entities: entitiesComments,
        ids: idsComments,
      },
    }),
  ],
}

export const Error: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4&_expand=user:1`,
        method: 'GET',
        status: 404,
        response: [],
      },
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 400,
        response: [],
      },
    ],
  },
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: { data: article },
      articleComments: { entities: entitiesComments, ids: idsComments },
      [rtkApi.reducerPath]: {
        queries: { 'getArticleRecommendationsList(4)': { data: articles } },
      },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articleDetails: { data: article },
      articleComments: { entities: entitiesComments, ids: idsComments },
      [rtkApi.reducerPath]: {
        queries: { 'getArticleRecommendationsList(4)': { data: articles } },
      },
    }),
  ],
}
