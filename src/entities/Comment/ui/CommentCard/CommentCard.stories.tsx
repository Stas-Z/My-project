import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Comment } from '../../model/types/comment'
import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

const comment: Comment = {
  id: '1',
  text: 'some coment',
  user: {
    id: '1',
    username: 'Stas',
    avatar: 'https://avatars.githubusercontent.com/u/116818633',
  },
}

export const Light = Template.bind({})
Light.args = { comment }
export const Loading = Template.bind({})
Loading.args = { isLoading: true }

export const Dark = Template.bind({})
Dark.args = { comment }
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const DarkLoading = Template.bind({})
DarkLoading.args = { isLoading: true }
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = { comment }
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
export const ChocoLoading = Template.bind({})
ChocoLoading.args = { isLoading: true }
ChocoLoading.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
