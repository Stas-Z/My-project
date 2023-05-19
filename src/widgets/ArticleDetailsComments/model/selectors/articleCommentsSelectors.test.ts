import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getArticleDetailsComment } from '../slices/articleDetailsCommentsSlice'
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from './articleCommentsSelectors'

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
const allIds = { ids: ['1', '2'] }

const comments: Comment[] = [
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

describe('articleCommentsSelectors.test', () => {
  test('entities, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { entities, ids: allIds.ids },
    }
    expect(
      getArticleDetailsComment.selectEntities(state as StateSchema),
    ).toEqual(entities)
  })
  test('ids, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { entities, ids: allIds.ids },
    }
    expect(getArticleDetailsComment.selectIds(state as StateSchema)).toEqual(
      allIds.ids,
    )
  })
  test('should return comments', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { entities, ids: allIds.ids },
    }
    expect(getArticleDetailsComment.selectAll(state as StateSchema)).toEqual(
      comments,
    )
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { entities: {}, ids: [] },
    }

    expect(getArticleDetailsComment.selectAll(state as StateSchema)).toEqual([])
  })
  test('Error, should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { error: 'error' },
    }
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error')
  })
  test('Error, should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined)
  })
  test('isLoading, should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: { isLoading: true },
    }
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
  })
  test('isLoading, should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined)
  })
})
