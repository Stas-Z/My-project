import { StoryFn } from '@storybook/react'

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { commentFormReducer } from '@/entities/Comment/testing'
import { articleCommentsReducer } from '@/features/ArticleComments/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { rtkApi } from '@/shared/api/rtkApi'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
  articleComments: articleCommentsReducer,
  articlesPage: articlesPageReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
