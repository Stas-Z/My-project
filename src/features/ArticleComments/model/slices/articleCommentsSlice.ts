import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const getArticleComment = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || commentsAdapter.getInitialState(),
)

const articleCommentsSlice = createSlice({
  name: 'articleCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        },
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleCommentsReducer } = articleCommentsSlice
