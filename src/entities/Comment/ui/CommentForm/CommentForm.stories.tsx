import { action } from '@storybook/addon-actions'
import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentForm } from './CommentForm'

export default {
  title: 'entities/Comment/CommentForm',
  component: CommentForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentForm>

type Template = StoryObj<typeof CommentForm>

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
