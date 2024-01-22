import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleDetails } from './ArticleDetails'
import { articleMock } from '../../model/mocks/data'

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetails>

type Template = StoryObj<typeof ArticleDetails>

const article = articleMock

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const Loading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      articleDetails: { isLoading: true },
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
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const DarkLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: { isLoading: true },
    }),
  ],
}

export const DarkError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const ChocoLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articleDetails: { isLoading: true },
    }),
  ],
}

export const ChocoError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
}
