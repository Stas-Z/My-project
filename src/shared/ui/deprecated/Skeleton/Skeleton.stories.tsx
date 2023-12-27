import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Skeleton } from './Skeleton'

export default {
  title: 'shared/deprecated/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Skeleton>

type Template = StoryObj<typeof Skeleton>

export const Circle: Template = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DarkCircle: Template = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ChocoCircle: Template = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Light: Template = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
