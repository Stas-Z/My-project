import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
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
  decorators: [ThemeDecorator(Theme.LIGHT), NewDesignDecorator],
}

export const Dark: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), NewDesignDecorator],
}

export const Choco: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE), NewDesignDecorator],
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
