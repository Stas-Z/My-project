import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock, entitiesMock } from 'entities/Article'
import ArticleDetailsPage from './ArticleDetailsPage'

export default {
  title: 'pages/Article/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
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

const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    articleDetails: { data: article },
    articleDetailsComments: { entities: entitiesComments, ids: idsComments },
    articleRecommendationsList: { entities, ids },
  }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    articleDetails: { isLoading: true },
    articleDetailsComments: {
      isLoading: true,
      entities: entitiesComments,
      ids: idsComments,
    },
    articleRecommendationsList: { isLoading: true, entities, ids },
  }),
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { data: article },
    articleDetailsComments: { entities: entitiesComments, ids: idsComments },
    articleRecommendationsList: { entities, ids },
  }),
]

export const DarkLoading = Template.bind({})
DarkLoading.args = {}
DarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { isLoading: true },
    articleDetailsComments: {
      isLoading: true,
      entities: entitiesComments,
      ids: idsComments,
    },
    articleRecommendationsList: { isLoading: true, entities, ids },
  }),
]

export const DarkError = Template.bind({})
DarkError.args = {}
DarkError.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { data: article },
    articleDetailsComments: { entities: entitiesComments, ids: idsComments },
    articleRecommendationsList: { entities, ids },
  }),
]

export const ChocoLoading = Template.bind({})
ChocoLoading.args = {}
ChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { isLoading: true },
    articleDetailsComments: {
      isLoading: true,
      entities: entitiesComments,
      ids: idsComments,
    },
    articleRecommendationsList: { isLoading: true, entities, ids },
  }),
]

export const ChocoError = Template.bind({})
ChocoError.args = {}
ChocoError.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]
