import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Text>

type Template = StoryObj<typeof Text>

export const SizeS: Template = {
  args: {
    size: TextSize.S,
    title: 'Title Sample',
    text: 'Text Sample',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SizeM: Template = {
  args: {
    title: 'Title Sample',
    text: 'Text Sample',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SizeL: Template = {
  args: {
    title: 'Title Sample',
    text: 'Text Sample',
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OnlyTitle: Template = {
  args: {
    title: 'Title Sample',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OnlyText: Template = {
  args: {
    text: 'Text Sample',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    title: 'Title Sample',
    text: 'Text Sample',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    title: 'Title Sample',
    text: 'Text Sample',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Error: Template = {
  args: {
    title: 'Title Sample',
    text: 'Text Sample',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
