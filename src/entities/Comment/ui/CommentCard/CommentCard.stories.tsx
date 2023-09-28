import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentCard } from './CommentCard'
import { Comment } from '../../model/types/comment'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentCard>

type Template = StoryObj<typeof CommentCard>

const comment: Comment = {
  id: '1',
  text: 'some coment',
  user: {
    id: '1',
    username: 'Stas',
    avatar: 'https://avatars.githubusercontent.com/u/116818633',
  },
}

export const Light: Template = {
  args: { comment },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Loading: Template = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: { comment },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const DarkLoading: Template = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: { comment },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const ChocoLoading: Template = {
  args: { isLoading: true },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
