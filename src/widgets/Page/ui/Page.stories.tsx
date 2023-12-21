import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import { Page } from './Page'

export default {
  title: 'widgets/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Page>

type Template = StoryObj<typeof Page>

export const Light: Template = {
  args: {
    children: 'Обертка для сраниц',
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: { features: { isAppRedesigned: false } } },
    }),
  ],
}

export const Dark: Template = {
  args: { children: 'Обертка для сраниц' },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Choco: Template = {
  args: { children: 'Обертка для сраниц' },
  decorators: [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})],
}
