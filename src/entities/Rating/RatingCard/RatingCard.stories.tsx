import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RatingCard } from './RatingCard'

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
  <RatingCard {...args} />
)

export const WithRating = Template.bind({})
WithRating.args = {
  hasFeedback: true,
  title: 'title',
  rate: 4,
}
export const Light = Template.bind({})
Light.args = {
  feedbackTitle: 'feedbackTitle',
  hasFeedback: true,
  title: 'title',
}

export const Dark = Template.bind({})
Dark.args = {
  feedbackTitle: 'feedbackTitle',
  hasFeedback: true,
  title: 'title',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Choco = Template.bind({})
Choco.args = {
  feedbackTitle: 'feedbackTitle',
  hasFeedback: true,
  title: 'title',
}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
