import { action } from '@storybook/addon-actions'
import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentFormRedesigned } from './CommentFormRedesigned'

export default {
  title: 'entities/Comment/CommentForm/CommentFormRedesigned',
  component: CommentFormRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentFormRedesigned>

type Template = StoryObj<typeof CommentFormRedesigned>

export const Loading: Template = {
  args: { onSendComment: action('onSendComment'), isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT, true), StoreDecorator({})],
}

export const Light: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.LIGHT, true), StoreDecorator({})],
}

export const Dark: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.DARK, true), StoreDecorator({})],
}

export const Choco: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true), StoreDecorator({})],
}
