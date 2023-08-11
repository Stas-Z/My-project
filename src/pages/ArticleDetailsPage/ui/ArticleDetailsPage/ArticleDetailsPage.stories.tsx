import { QueryStatus } from '@reduxjs/toolkit/dist/query'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { Theme } from '@/app/providers/ThemeProvider'
import { articleMock, articlesMock } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ArticleDetailsPage from './ArticleDetailsPage'

const articles = articlesMock

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
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
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
)

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

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    articleDetails: { data: article },
    articleComments: { entities: entitiesComments, ids: idsComments },
    user: { authData: { id: '1' } },
  }),
  withMock,
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=4`,
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
}
Loading.decorators = [
  StoreDecorator({
    articleDetails: { isLoading: true },
    articleComments: {
      isLoading: true,
      entities: entitiesComments,
      ids: idsComments,
    },
  }),
  withMock,
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
  withMock,
]
Error.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=4`,
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
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { data: article },
    articleComments: { entities: entitiesComments, ids: idsComments },
    [rtkApi.reducerPath]: {
      queries: { 'getArticleRecommendationsList(4)': { data: articles } },
    },
  }),
  withMock,
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { data: article },
    articleComments: { entities: entitiesComments, ids: idsComments },
    [rtkApi.reducerPath]: {
      queries: { 'getArticleRecommendationsList(4)': { data: articles } },
    },
  }),
  withMock,
]
