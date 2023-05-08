import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleDetailsComments } from './ArticleDetailsComments'

export default {
  title: 'widgets/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
  <ArticleDetailsComments {...args} />
)

const entities = {
  1: {
    id: '1',
    text: 'some comment',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
  2: {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    userId: '1',
    user: {
      id: '1',
      username: 'admin',
      password: '123',
      role: 'ADMIN',
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
    },
  },
}
const allIds = { allIds: [1, 2] }

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    articleDetailsComments: { entities, ids: allIds.allIds },
  }),
]
Light.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    articleDetailsComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
Loading.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const NoComments = Template.bind({})
NoComments.args = {}
NoComments.decorators = [StoreDecorator({})]
NoComments.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetailsComments: { entities, ids: allIds.allIds },
  }),
]
Dark.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const DarkLoading = Template.bind({})
DarkLoading.args = {}
DarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetailsComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
DarkLoading.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const DarkNoComments = Template.bind({})
DarkNoComments.args = {}
DarkNoComments.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
DarkNoComments.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetailsComments: { entities, ids: allIds.allIds },
  }),
]
Choco.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const ChocoLoading = Template.bind({})
ChocoLoading.args = {}
ChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleDetailsComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
ChocoLoading.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]

export const ChocoNoComments = Template.bind({})
ChocoNoComments.args = {}
ChocoNoComments.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({}),
]
ChocoNoComments.loaders = [
  async () => ({ Component: await import('./ArticleDetailsComments') }),
]
