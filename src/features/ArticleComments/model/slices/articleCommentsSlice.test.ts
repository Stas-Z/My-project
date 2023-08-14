import { Comment } from '@/entities/Comment/testing'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { articleCommentsReducer } from './articleCommentsSlice'

const entities = {
  1: {
    id: '1',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
  2: {
    id: '2',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
}
const ids = ['1', '2']

const comment: Comment[] = [
  {
    id: '1',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
  {
    id: '2',
    text: 'some comment',
    user: {
      avatar: 'https://avatars.githubusercontent.com/u/116818633',
      id: '1',
      username: 'admin',
    },
  },
]

describe('articleCommentsSlice.test', () => {
  test('test fetch comments for article pending', () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: false,
      error: 'error',
    }
    expect(
      articleCommentsReducer(
        state as ArticleCommentsSchema,
        fetchCommentsByArticleId.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })
  test('test fetch comments for article fulfilled', () => {
    const state: DeepPartial<ArticleCommentsSchema> = {
      isLoading: true,
      error: undefined,
    }
    expect(
      articleCommentsReducer(
        state as ArticleCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comment, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      entities,
      ids,
      error: undefined,
    })
  })
})
