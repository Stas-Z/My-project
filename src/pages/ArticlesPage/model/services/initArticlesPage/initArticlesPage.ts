import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleSortFiled, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'

import { getArticlesPageInited } from '../../selectors/articlePageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI
  const inited = getArticlesPageInited(getState())
  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder
    const sortFromUrl = searchParams.get('sort') as ArticleSortFiled
    const searchFromUrl = searchParams.get('search')
    const typeFromUrl = searchParams.get('type') as ArticleType

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl))
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl))
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl))
    }
    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl))
    }

    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({}))
  }
})
