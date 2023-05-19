import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { fetchArticleRecommendationsList } from '../services/fetchArticleRecommendationsList/fetchArticleRecommendationsList'
import { ArticleRecommendationsListSchema } from '../types/ArticleRecommendationsListSchema'

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleRecommendationsList = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleRecommendationsList
      || recommendationAdapter.getInitialState(),
)

const articleRecommendationsListSlice = createSlice({
  name: 'articleDetailsPageRecommendSlice',
  initialState:
    recommendationAdapter.getInitialState<ArticleRecommendationsListSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendationsList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleRecommendationsList.fulfilled, (state, action) => {
        state.isLoading = false
        recommendationAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendationsList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleRecommendationsListReducer } = articleRecommendationsListSlice
