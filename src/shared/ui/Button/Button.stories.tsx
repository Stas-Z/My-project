import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}
export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  children: 'Text',
  disabled: true,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryDarkDisabled = Template.bind({})
PrimaryDarkDisabled.args = {
  children: 'Text',
  disabled: true,
}
PrimaryDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryChoco = Template.bind({})
PrimaryChoco.args = {
  children: 'Text',
}
PrimaryChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const PrimaryChocoDisabled = Template.bind({})
PrimaryChocoDisabled.args = {
  children: 'Text',
  disabled: true,
}
PrimaryChocoDisabled.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
export const ClearDark = Template.bind({})
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearChoco = Template.bind({})
ClearChoco.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}
ClearChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInvertedChoco = Template.bind({})
ClearInvertedChoco.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInvertedChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
export const OutlineDisabled = Template.bind({})
OutlineDisabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
export const OutlineSizeLDisable = Template.bind({})
OutlineSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
export const OutlineSizeXl = Template.bind({})
OutlineSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
export const OutlineSizeXlDisable = Template.bind({})
OutlineSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OutlineDarkDisable = Template.bind({})
OutlineDarkDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
OutlineDarkDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeL = Template.bind({})
OutlineDarkSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeLDisable = Template.bind({})
OutlineDarkSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
OutlineDarkSizeLDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeXl = Template.bind({})
OutlineDarkSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
OutlineDarkSizeXl.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDarkSizeXlDisable = Template.bind({})
OutlineDarkSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}
OutlineDarkSizeXlDisable.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineChoco = Template.bind({})
OutlineChoco.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineChoco.decorators = [ThemeDecorator(Theme.CHOCOLATE)]
export const OutlineChocoDisable = Template.bind({})
OutlineChocoDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
OutlineChocoDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeL = Template.bind({})
OutlineChocoSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
OutlineChocoSizeL.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeLDisable = Template.bind({})
OutlineChocoSizeLDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
  disabled: true,
}
OutlineChocoSizeLDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeXl = Template.bind({})
OutlineChocoSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
OutlineChocoSizeXl.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const OutlineChocoSizeXlDisable = Template.bind({})
OutlineChocoSizeXlDisable.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
  disabled: true,
}
OutlineChocoSizeXlDisable.decorators = [ThemeDecorator(Theme.CHOCOLATE)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXl = Template.bind({})
SquareSizeXl.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
