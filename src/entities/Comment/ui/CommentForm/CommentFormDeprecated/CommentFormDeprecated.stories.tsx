import { action } from '@storybook/addon-actions'
import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentFormDeprecated } from './CommentFormDeprecated'

export default {
  title: 'entities/Comment/CommentForm/CommentFormDeprecated',
  component: CommentFormDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentFormDeprecated>

type Template = StoryObj<typeof CommentFormDeprecated>

export const Loading: Template = {
  args: { onSendComment: action('onSendComment'), isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Light: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Dark: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Choco: Template = {
  args: { onSendComment: action('onSendComment') },
  decorators: [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})],
}
