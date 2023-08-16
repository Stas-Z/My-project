import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from '../../mocks/data'
import { ArticleDetails } from './ArticleDetails'

export default {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
)

const article = articleMock

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    articleDetails: { data: article },
  }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    articleDetails: { isLoading: true },
  }),
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { data: article },
  }),
]

export const DarkLoading = Template.bind({})
DarkLoading.args = {}
DarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { isLoading: true },
  }),
]

export const DarkError = Template.bind({})
DarkError.args = {}
DarkError.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { data: article },
  }),
]

export const ChocoLoading = Template.bind({})
ChocoLoading.args = {}
ChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { isLoading: true },
  }),
]

export const ChocoError = Template.bind({})
ChocoError.args = {}
ChocoError.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetails: { error: 'error' },
  }),
]
