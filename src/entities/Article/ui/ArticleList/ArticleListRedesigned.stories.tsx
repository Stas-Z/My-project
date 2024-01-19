import { StoryObj, Meta } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleList } from './ArticleList'
import { articleMock } from '../../mocks/data'
import { ArticleView } from '../../model/consts/articleConsts'

export default {
  title: 'entities/Article/ArticleList/Redesigned',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleList>

type Template = StoryObj<typeof ArticleList>

const article = articleMock

export const Grid: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const GridLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const GridDark: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const GridDarkLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const GridChoco: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const GridChocoLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.GRID,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const List: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true), LokiDelayDecorator()],
}

export const ListLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const ListDark: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.DARK, true), LokiDelayDecorator()],
}

export const ListDarkLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const ListChoco: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true), LokiDelayDecorator()],
}

export const ListChocoLoading: Template = {
  args: {
    virtualized: true,
    articles: [article, article, article],
    view: ArticleView.LIST,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
