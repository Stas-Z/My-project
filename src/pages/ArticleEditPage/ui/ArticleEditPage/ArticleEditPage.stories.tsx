import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import ArticleEditPage from './ArticleEditPage'

export default {
  title: 'pages/ArticleEdit/ArticleEditPage',
  component: ArticleEditPage,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleEditPage>

type Template = StoryObj<typeof ArticleEditPage>

export const Deprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}
export const Redesigned: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT, true), StoreDecorator({})],
}
