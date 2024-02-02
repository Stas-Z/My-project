import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentCardRedesigned } from './CommentCardRedesigned'
import { Comment } from '../../../model/types/comment'

export default {
  title: 'entities/Comment/CommentCard/CommentCardRedesigned',
  component: CommentCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof CommentCardRedesigned>

type Template = StoryObj<typeof CommentCardRedesigned>

const comment: Comment = {
  id: '1',
  text: 'some coment',
  user: {
    id: '1',
    username: 'Stas',
    avatar: 'https://avatars.githubusercontent.com/u/116818633',
  },
}

const comment2: Comment = {
  id: '1',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat earum, autem esse saepe perferendis deserunt placeat. Temporibus distinctio earum unde hic culpa placeat? Earum atque quasi et eius aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat earum, autem esse saepe perferendis deserunt placeat. Temporibus distinctio earum unde hic culpa placeat? Earum atque quasi et eius aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat earum, autem esse saepe perferendis deserunt placeat. Temporibus distinctio earum unde hic culpa placeat? Earum atque quasi et eius aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat earum, autem esse saepe perferendis deserunt placeat. Temporibus distinctio earum unde hic culpa placeat? Earum atque quasi et eius aliquam.',
  user: {
    id: '1',
    username: 'Stas',
    avatar: 'https://avatars.githubusercontent.com/u/116818633',
  },
}

export const LongComment: Template = {
  args: { comment: comment2 },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <div style={{ maxWidth: '780px' }}>
        <Story />
      </div>
    ),
  ],
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
