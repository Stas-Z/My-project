import { StoryObj, Meta } from '@storybook/react'

import { LokiDelayDecorator } from '@/shared/config/storybook/LokiDelayDecorator/LokiDelayDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import AppLink from './AppLink'

export default {
  title: 'shared/redesigned/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { to: '/' },
  decorators: [NewDesignDecorator],
} as Meta<typeof AppLink>

type Template = StoryObj<typeof AppLink>

export const Primary: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT), LokiDelayDecorator()],
}

export const Dark: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK), LokiDelayDecorator()],
}

export const Choco: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE), LokiDelayDecorator()],
}

export const Red: Template = {
  args: {
    children: 'Text',
    variant: 'red',
  },
  decorators: [ThemeDecorator(Theme.LIGHT), LokiDelayDecorator()],
}

export const RedDark: Template = {
  args: {
    children: 'Text',
    variant: 'red',
  },
  decorators: [ThemeDecorator(Theme.DARK), LokiDelayDecorator()],
}
