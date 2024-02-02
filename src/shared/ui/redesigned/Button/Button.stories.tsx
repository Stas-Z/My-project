import { Meta, StoryObj } from '@storybook/react'

import ArrowIcon from '@/shared/assets/tests/arrow-bottom.svg'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button } from './Button'
import { Icon } from '../Icon'

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  parameters: {
    docs: { story: { iframeHeight: '100px', inline: false } },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof Button>

type Template = StoryObj<typeof Button>

export const Filled: Template = {
  args: { children: 'Text', variant: 'filled' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const FilledDark: Template = {
  args: { children: 'Text', variant: 'filled' },
  decorators: [ThemeDecorator(Theme.DARK)],
}
export const FilledChoco: Template = {
  args: { children: 'Text', variant: 'filled' },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}
export const FilledWithAddon: Template = {
  args: {
    children: 'Text',
    variant: 'filled',
    addonRight: <Icon Svg={ArrowIcon} />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const FilledSave: Template = {
  args: { children: 'Text', variant: 'filled', color: 'save' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const FilledCancel: Template = {
  args: { children: 'Text', variant: 'filled', color: 'cancel' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Outline: Template = {
  args: { children: 'Text' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineChoco: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineSizeL: Template = {
  args: {
    children: 'Text',
    size: 'l',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineSizeXl: Template = {
  args: {
    children: 'Text',
    size: 'xl',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSave: Template = {
  args: { children: 'Text', color: 'save' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const OutlineCancel: Template = {
  args: { children: 'Text', color: 'cancel' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const Clear: Template = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
