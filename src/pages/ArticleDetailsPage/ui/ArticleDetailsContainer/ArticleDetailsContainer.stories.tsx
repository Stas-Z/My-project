import { Meta, StoryObj } from '@storybook/react'

import { articleMock } from '@/entities/Article/testing'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleDetailsContainer } from './ArticleDetailsContainer'

const article = articleMock
export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsContainer',
  component: ArticleDetailsContainer,
  decorators: [
    StoreDecorator({
      articleDetails: { data: article },
    }),
    NewDesignDecorator,
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsContainer>

type Template = StoryObj<typeof ArticleDetailsContainer>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
