import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticleEditPage from './ArticleEditPage'

export default {
  title: 'pages/ArticleEdit/ArticleCreatePage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [ThemeDecorator(Theme.CHOCOLATE), StoreDecorator({})]
