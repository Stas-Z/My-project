import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticlesPageFilters } from './ArticlesPageFilters'

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesPageFilters>

type Template = StoryObj<typeof ArticlesPageFilters>

export const Light: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})],
}
