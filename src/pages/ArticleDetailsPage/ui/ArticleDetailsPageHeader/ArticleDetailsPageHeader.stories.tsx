import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { articleMock } from 'entities/Article'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  <ArticleDetailsPageHeader {...args} />
)

const data = articleMock

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    user: { authData: { id: '1', username: 'Stas' } },
    articleDetails: { data },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: { id: '1', username: 'Stas' } },
    articleDetails: { data },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    user: { authData: { id: '1', username: 'Stas' } },
    articleDetails: { data },
  }),
]
