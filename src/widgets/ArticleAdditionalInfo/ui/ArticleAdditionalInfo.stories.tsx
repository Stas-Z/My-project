import { Meta, StoryObj } from '@storybook/react'

import AvatarImg from '@/shared/assets/tests/avatar.png'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo'

export default {
  title: 'widgets/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  args: { author: { avatar: AvatarImg, id: '1', username: 'admin' } },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleAdditionalInfo>

type Template = StoryObj<typeof ArticleAdditionalInfo>

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
