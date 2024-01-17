import { Meta, StoryObj } from '@storybook/react'

import SearchIcon from '@/shared/assets/tests/search.svg'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Input } from './Input'
import { Icon } from '../Icon'

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>

type Template = StoryObj<typeof Input>

export const sizeS: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
    size: 's',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const sizeM: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
    size: 'm',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const sizeL: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
    size: 'l',
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}
export const WithAddon: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
    addonLeft: <Icon Svg={SearchIcon} />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT, true)],
}

export const Dark: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
  },
  decorators: [ThemeDecorator(Theme.DARK, true)],
}

export const Choco: Template = {
  args: {
    placeholder: 'Text Sample',
    value: '123123',
  },
  decorators: [ThemeDecorator(Theme.CHOCOLATE, true)],
}
