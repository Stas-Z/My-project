import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { RatingCardDeprecated } from './RatingCardDeprecated'

export default {
  title: 'entities/RatingCard/RatingCardDeprecated',
  component: RatingCardDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RatingCardDeprecated>

type Template = StoryObj<typeof RatingCardDeprecated>

export const WithRating: Template = {
  args: {
    hasFeedback: true,
    title: 'title',
    rate: 4,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Light: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
    rate: 0,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
