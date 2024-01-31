import { Meta, StoryObj } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { EditableProfileCardHeaderDeprecated } from './EditableProfileCardHeaderDeprecated'

export default {
  title:
    'features/Profile/EditableProfileCardHeader/EditableProfileCardHeaderDeprecated',
  component: EditableProfileCardHeaderDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCardHeaderDeprecated>

type Template = StoryObj<typeof EditableProfileCardHeaderDeprecated>

export const Light: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: true,
      },
    }),
  ],
}

export const LightEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        readonly: false,
      },
    }),
  ],
}

export const Dark: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        readonly: true,
      },
    }),
  ],
}

export const DarkEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        readonly: false,
      },
    }),
  ],
}

export const Choco: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      profile: {
        readonly: true,
      },
    }),
  ],
}

export const ChocoEdit: Template = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      profile: {
        readonly: false,
      },
    }),
  ],
}
