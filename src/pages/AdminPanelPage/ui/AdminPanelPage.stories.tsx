import { StoryObj, Meta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

import AdminPanelPage from './AdminPanelPage'

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AdminPanelPage>

type Template = StoryObj<typeof AdminPanelPage>

export const Light: Template = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      scrollSave: {
        scroll: {
          articles: 500,
        },
      },
    }),
  ],
}
export const Dark: Template = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      scrollSave: {
        scroll: {
          articles: 500,
        },
      },
    }),
  ],
}
export const Choco: Template = {
  decorators: [
    ThemeDecorator(Theme.CHOCOLATE),
    StoreDecorator({
      scrollSave: {
        scroll: {
          articles: 500,
        },
      },
    }),
  ],
}
