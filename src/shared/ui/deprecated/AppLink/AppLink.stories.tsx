import { StoryObj, Meta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import AppLink, { AppLinkTheme } from './AppLink'

export default {
  title: 'shared/deprecated/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { to: '/' },
} as Meta<typeof AppLink>

type Template = StoryObj<typeof AppLink>

export const Primary: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Choco: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Inverted: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const InvertedDark: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const InvertedChoco: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Red: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const RedDark: Template = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
