import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleComments } from './ArticleComments'

export default {
  title: 'features/Article/ArticleComments',
  component: ArticleComments,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleComments>

const Template: ComponentStory<typeof ArticleComments> = (args) => (
  <ArticleComments {...args} />
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
    articleComments: { entities, ids: allIds.allIds },
  }),
]
Light.loaders = [async () => ({ Component: await import('./ArticleComments') })]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    articleComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
Loading.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]

export const NoComments = Template.bind({})
NoComments.args = {}
NoComments.decorators = [StoreDecorator({})]
NoComments.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleComments: { entities, ids: allIds.allIds },
  }),
]
Dark.loaders = [async () => ({ Component: await import('./ArticleComments') })]

export const DarkLoading = Template.bind({})
DarkLoading.args = {}
DarkLoading.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
DarkLoading.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]

export const DarkNoComments = Template.bind({})
DarkNoComments.args = {}
DarkNoComments.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
DarkNoComments.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]

export const Choco = Template.bind({})
Choco.args = {}
Choco.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleComments: { entities, ids: allIds.allIds },
  }),
]
Choco.loaders = [async () => ({ Component: await import('./ArticleComments') })]

export const ChocoLoading = Template.bind({})
ChocoLoading.args = {}
ChocoLoading.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({
    articleComments: { isLoading: true, entities, ids: allIds.allIds },
  }),
]
ChocoLoading.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]

export const ChocoNoComments = Template.bind({})
ChocoNoComments.args = {}
ChocoNoComments.decorators = [
  ThemeDecorator(Theme.CHOCOLATE),
  StoreDecorator({}),
]
ChocoNoComments.loaders = [
  async () => ({ Component: await import('./ArticleComments') }),
]
