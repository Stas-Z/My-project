import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { commentFormReducer } from 'entities/Comment/model/slice/commentFormSlice'
import { articleCommentsReducer } from 'features/ArticleComments/model/slices/articleCommentsSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'features/EditableProfileCard'
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice'
import { rtkApi } from 'shared/api/rtkApi'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
  articleComments: articleCommentsReducer,
  articlesPage: articlesPageReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
)
