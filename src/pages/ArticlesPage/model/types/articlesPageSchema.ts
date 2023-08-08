import { EntityState } from '@reduxjs/toolkit'
import {
  Article,
  ArticleSortFiled,
  ArticleType,
  ArticleView,
} from '@/entities/Article'

import { SortOrder } from '@/shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit: number
  hasMore: boolean

  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortFiled
  search: string
  type: ArticleType

  _inited: boolean
}
