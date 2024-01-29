import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned'
import { articleMock } from '../../../model/mocks/data'

export default {
  title: 'entities/Article/ArticleDetails/ArticleDetailsRedesigned',
  component: ArticleDetailsRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsRedesigned>

type Template = StoryObj<typeof ArticleDetailsRedesigned>

const article = articleMock

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const Loading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      articleDetails: { isLoading: true },
    }),
  ],
}

export const Error: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const DarkLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      articleDetails: { isLoading: true },
    }),
  ],
}

export const DarkError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK, true),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
}

export const ChocoLoading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      articleDetails: { isLoading: true },
    }),
  ],
}

export const ChocoError: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE, true),
    StoreDecorator({
      articleDetails: { error: 'error' },
    }),
  ],
}
