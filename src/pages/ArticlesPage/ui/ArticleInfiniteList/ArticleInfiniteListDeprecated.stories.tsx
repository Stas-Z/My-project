import { Meta, StoryObj } from '@storybook/react'

import { ArticleView, entitiesMock } from '@/entities/Article/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleInfiniteList } from './ArticleInfiniteList'

export default {
  title: 'pages/Article/ArticleInfiniteList/Deprecated',
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleInfiniteList>

type Template = StoryObj<typeof ArticleInfiniteList>

const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

export const Grid: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ articlesPage: { entities, ids } }),
    LokiDelayDecorator(),
  ],
}

export const GridLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
    LokiDelayDecorator(),
  ],
}

export const GridDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articlesPage: { entities, ids } }),
    LokiDelayDecorator(),
  ],
}

export const GridDarkLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
    LokiDelayDecorator(),
  ],
}

export const GridChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({ articlesPage: { entities, ids } }),
    LokiDelayDecorator(),
  ],
}

export const GridChocoLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({ articlesPage: { entities, ids, isLoading: true } }),
    LokiDelayDecorator(),
  ],
}

export const List: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
    LokiDelayDecorator(),
  ],
}

export const ListLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: {
        entities,
        ids,
        isLoading: true,
        view: ArticleView.LIST,
      },
    }),
    LokiDelayDecorator(),
  ],
}

export const ListDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
    LokiDelayDecorator(),
  ],
}

export const ListDarkLoading: Template = {
  args: {},
  decorators: [
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
  ],
}

export const ListChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({ articlesPage: { entities, ids, view: ArticleView.LIST } }),
    LokiDelayDecorator(),
  ],
}

export const ListChocoLoading: Template = {
  args: {},
  decorators: [
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
  ],
}

export const Error: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ articlesPage: { entities, ids, error: 'true' } }),
    LokiDelayDecorator(),
  ],
}
