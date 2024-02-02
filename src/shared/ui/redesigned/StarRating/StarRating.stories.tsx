import { StoryObj, Meta } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { StarRating } from './StarRating'

export default {
  title: 'shared/redesigned/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof StarRating>

type Template = StoryObj<typeof StarRating>

export const Star1: Template = {
  args: { size: 50, selectedStars: 1 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Star2: Template = {
  args: { size: 50, selectedStars: 2 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Star3: Template = {
  args: { size: 50, selectedStars: 3 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Star4: Template = {
  args: { size: 50, selectedStars: 4 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Star5: Template = {
  args: { size: 50, selectedStars: 5 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Light: Template = {
  args: { size: 50 },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: { size: 50 },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: { size: 50 },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
