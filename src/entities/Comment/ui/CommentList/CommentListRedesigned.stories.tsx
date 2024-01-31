import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentList } from './CommentList'
import { Comment } from '../../model/types/comment'

export default {
  title: 'entities/Comment/CommentList/Redesigned',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>

type Template = StoryObj<typeof CommentList>

const comments: Comment[] = [
  {
    id: '1',
    text: 'some coment',
    user: {
      id: '1',
      username: 'Stas',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
  {
    id: '2',
    text: 'some coment 2',
    user: {
      id: '1',
      username: 'Stas',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
  {
    id: '3',
    text: 'some coment 3',
    user: {
      id: '1',
      username: 'Stas',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
]

export const Light: Template = {
  args: { comments },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Loading: Template = {
  args: { comments, isLoading: true },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const NoComments: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: { comments },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const DarkLoading: Template = {
  args: { comments, isLoading: true },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const DarkNoComments: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: { comments },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const ChocoLoading: Template = {
  args: { comments, isLoading: true },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const ChocoNoComments: Template = {
  args: {},
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
