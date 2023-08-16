import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ForbiddenPage from './ForbiddenPage'

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />

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
