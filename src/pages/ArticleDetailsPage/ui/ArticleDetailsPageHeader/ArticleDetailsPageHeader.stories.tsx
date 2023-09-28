import { StoryObj, Meta } from '@storybook/react'

import { articleMock } from '@/entities/Article/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetailsPageHeader>

type Template = StoryObj<typeof ArticleDetailsPageHeader>

const data = articleMock

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: { id: '1', username: 'Stas' } },
      articleDetails: { data },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: { authData: { id: '1', username: 'Stas' } },
      articleDetails: { data },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      user: { authData: { id: '1', username: 'Stas' } },
      articleDetails: { data },
    }),
  ],
}
