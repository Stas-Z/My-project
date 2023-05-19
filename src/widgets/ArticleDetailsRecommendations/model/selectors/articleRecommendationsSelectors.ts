import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleRecommendationsList?.isLoading
export const getArticleRecommendationsError = (state: StateSchema) => state.articleRecommendationsList?.error
