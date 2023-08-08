import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { NotFoundPage } from './NotFoundPage'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const Light = Template.bind({})
Light.decorators = [
  StoreDecorator({
    scrollSave: {
      scroll: {
        articles: 500,
      },
    },
  }),
]
export const Dark = Template.bind({})
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    scrollSave: {
      scroll: {
        articles: 500,
      },
    },
  }),
]
export const Choco = Template.bind({})
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    scrollSave: {
      scroll: {
        articles: 500,
      },
    },
  }),
]
