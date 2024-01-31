import { StoryObj, Meta } from '@storybook/react'
import { fireEvent, within } from '@storybook/testing-library'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { RatingCardRedesigned } from './RatingCardRedesigned'

export default {
  title: 'entities/RatingCard/RatingCardRedesigned',
  component: RatingCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof RatingCardRedesigned>

type Template = StoryObj<typeof RatingCardRedesigned>

export const WithRating: Template = {
  args: {
    hasFeedback: true,
    title: 'title',
    rate: 4,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const OpenModal: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
    rate: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await fireEvent.click(canvas.getByTestId('StarRating.3'))
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true), LokiDelayDecorator()],
}
export const Light: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
    rate: 0,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {
    feedbackTitle: 'feedbackTitle',
    hasFeedback: true,
    title: 'title',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
