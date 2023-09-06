import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleView, entitiesMock } from '@/entities/Article/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleInfiniteList } from './ArticleInfiniteList'

export default {
  title: 'pages/Article/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  <ArticleInfiniteList {...args} />
)

const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

export const Grid = Template.bind({})
Grid.args = {}
Grid.decorators = [
  StoreDecorator({ articlesPage: { entities, ids } }),
  LokiDelayDecorator(),
]

export const GridLoading = Template.bind({})
GridLoading.args = {}
GridLoading.decorators = [
  StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
  LokiDelayDecorator(),
]

export const GridDark = Template.bind({})
GridDark.args = {}
GridDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ articlesPage: { entities, ids } }),
  LokiDelayDecorator(),
]

export const GridDarkLoading = Template.bind({})
GridDarkLoading.args = {}
GridDarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
  LokiDelayDecorator(),
]

export const GridChoco = Template.bind({})
GridChoco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({ articlesPage: { entities, ids } }),
  LokiDelayDecorator(),
]

export const GridChocoLoading = Template.bind({})
GridChocoLoading.args = {}
GridChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
  LokiDelayDecorator(),
]

export const List = Template.bind({})
List.args = {}
List.decorators = [
  StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
  LokiDelayDecorator(),
]

export const ListLoading = Template.bind({})
ListLoading.args = {}
ListLoading.decorators = [
  StoreDecorator({
    articlesPage: {
      entities,
      ids,
      isLoading: true,
      view: ArticleView.LIST,
    },
  }),
  LokiDelayDecorator(),
]

export const ListDark = Template.bind({})
ListDark.args = {}
ListDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
  LokiDelayDecorator(),
]

export const ListDarkLoading = Template.bind({})
ListDarkLoading.args = {}
ListDarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articlesPage: {
      entities,
      ids,
      isLoading: true,
      view: ArticleView.LIST,
    },
  }),
  LokiDelayDecorator(),
]

export const ListChoco = Template.bind({})
ListChoco.args = {}
ListChoco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
  LokiDelayDecorator(),
]

export const ListChocoLoading = Template.bind({})
ListChocoLoading.args = {}
ListChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articlesPage: {
      entities,
      ids,
      isLoading: true,
      view: ArticleView.LIST,
    },
  }),
  LokiDelayDecorator(),
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({ articlesPage: { entities, ids, error: 'true' } }),
  LokiDelayDecorator(),
]