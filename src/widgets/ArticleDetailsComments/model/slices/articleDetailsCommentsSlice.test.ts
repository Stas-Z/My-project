import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

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

describe('articleDetailsCommentsSlice.test', () => {
  test('test fetch comments for article pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'error',
    }
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending,
      ),
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })
  test('test fetch comments for article fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    }
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
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
