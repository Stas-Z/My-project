import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { CommentList } from './CommentList'
import { Comment } from '../../model/types/comment'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
)

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

export const Light = Template.bind({})
Light.args = { comments }
export const Loading = Template.bind({})
Loading.args = { comments, isLoading: true }
export const NoComments = Template.bind({})
NoComments.args = {}

export const Dark = Template.bind({})
Dark.args = { comments }
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const DarkLoading = Template.bind({})
DarkLoading.args = { comments, isLoading: true }
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)]
export const DarkNoComments = Template.bind({})
DarkNoComments.args = {}
DarkNoComments.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { comments }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
export const ChocoLoading = Template.bind({})
ChocoLoading.args = { comments, isLoading: true }
ChocoLoading.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
export const ChocoNoComments = Template.bind({})
ChocoNoComments.args = {}
ChocoNoComments.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
