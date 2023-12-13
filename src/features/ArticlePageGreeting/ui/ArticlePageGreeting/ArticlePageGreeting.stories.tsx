import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticlePageGreeting } from './ArticlePageGreeting'

export default {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlePageGreeting>

type Template = StoryObj<typeof ArticlePageGreeting>

export const Light: Template = {
  args: {},
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
