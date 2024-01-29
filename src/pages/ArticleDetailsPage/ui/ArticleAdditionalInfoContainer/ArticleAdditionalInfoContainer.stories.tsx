import { Meta, StoryObj } from '@storybook/react'

import { articleMock } from '@/entities/Article/testing'
import AvatarImg from '@/shared/assets/tests/avatar.png'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleAdditionalInfoContainer } from './ArticleAdditionalInfoContainer'

const article = articleMock

export default {
  title: 'pages/ArticleDetailsPage/ArticleAdditionalInfoContainer',
  component: ArticleAdditionalInfoContainer,
  args: { author: { avatar: AvatarImg, id: '1', username: 'admin' } },
  decorators: [
    StoreDecorator({
      articleDetails: { data: article },
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleAdditionalInfoContainer>

type Template = StoryObj<typeof ArticleAdditionalInfoContainer>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const Loading: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT, true),
    StoreDecorator({
      articleDetails: { data: undefined },
    }),
  ],
}
