import { Meta, StoryObj } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Text } from './Text'

export default {
  title: 'shared/redesigned/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Text>

type Template = StoryObj<typeof Text>

export const SizeS: Template = {
  args: {
    size: 's',
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
    size: 'l',
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
    variant: 'error',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
