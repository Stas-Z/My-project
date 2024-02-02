import { Meta, StoryObj } from '@storybook/react'

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { EditableProfileCardHeaderRedesigned } from './EditableProfileCardHeaderRedesigned'

export default {
  title:
    'features/Profile/EditableProfileCardHeader/EditableProfileCardHeaderRedesigned',
  component: EditableProfileCardHeaderRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as Meta<typeof EditableProfileCardHeaderRedesigned>

type Template = StoryObj<typeof EditableProfileCardHeaderRedesigned>

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
