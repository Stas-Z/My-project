import { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/deprecated/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: { story: { iframeHeight: '100px', inline: false } },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

type Template = StoryObj<typeof Button>

export const Primary: Template = {
  args: { children: 'Text' },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const PrimaryDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const PrimaryDark: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryDarkDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const PrimaryChoco: Template = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const PrimaryChocoDisabled: Template = {
  args: {
    children: 'Text',
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Clear: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const ClearInverted: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ClearInvertedDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const ClearInvertedChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const Outline: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDisabled: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const OutlineDark: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineDarkSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineChoco: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeL: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeLDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeXl: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const OutlineChocoSizeXlDisable: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE)],
}

export const BackgroundTheme: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const BackgroundInverted: Template = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Square: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareSizeL: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const SquareSizeXl: Template = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}
