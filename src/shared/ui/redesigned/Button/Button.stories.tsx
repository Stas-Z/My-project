import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button } from './Button'

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  parameters: {
    docs: { story: { iframeHeight: '100px', inline: false } },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

type Template = StoryObj<typeof Button>

export const Outline: Template = {
  args: { children: 'Text' },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const OutlineDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const OutlineDark: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const OutlineDarkDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const OutlineChoco: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const OutlineChocoDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}

export const OutlineSizeL: Template = {
  args: {
    children: 'Text',
    size: 'l',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const OutlineSizeXl: Template = {
  args: {
    children: 'Text',
    size: 'xl',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Clear: Template = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const ClearDark: Template = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const ClearChoco: Template = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
