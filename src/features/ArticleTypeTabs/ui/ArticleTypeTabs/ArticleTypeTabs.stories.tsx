import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
  title: 'features/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleTypeTabs>

type Template = StoryObj<typeof ArticleTypeTabs>

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

export const LightDeprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkDeprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ChocoDeprecated: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
