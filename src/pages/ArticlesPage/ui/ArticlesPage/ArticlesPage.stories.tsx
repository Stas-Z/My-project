import { Meta, StoryObj } from '@storybook/react'

import { ArticleView, entitiesMock } from '@/entities/Article/testing'
import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ArticlesPage from './ArticlesPage'

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    loki: {
      skip: true,
    },
  },
} as Meta<typeof ArticlesPage>

type Template = StoryObj<typeof ArticlesPage>

const entities = entitiesMock
const ids = ['1', '2', '3', '4', '5']

export const FirstVisit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids },
    }),
    LokiDelayDecorator(),
  ],
}
export const Grid: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids, isLoading: true },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articlesPage: { entities, ids },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridDarkLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articlesPage: { entities, ids, isLoading: true },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articlesPage: { entities, ids },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridChocoLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articlesPage: { entities, ids, isLoading: true },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const List: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids, view: ArticleView.LIST },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
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
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const ListDark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articlesPage: { entities, ids, view: ArticleView.LIST },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
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
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const ListChoco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articlesPage: { entities, ids, view: ArticleView.LIST },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
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
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    LokiDelayDecorator(),
  ],
}

export const GridRedesigned: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    NewDesignDecorator,
    LokiDelayDecorator(),
  ],
}
export const ListRedesigned: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articlesPage: { entities, ids, view: ArticleView.LIST },
      user: { authData: { jsonSettings: { isArticlesPageWasOpend: true } } },
    }),
    NewDesignDecorator,
    LokiDelayDecorator(),
  ],
}
