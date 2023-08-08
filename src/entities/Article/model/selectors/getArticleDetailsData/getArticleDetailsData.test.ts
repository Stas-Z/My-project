import { StateSchema } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from './getArticleDetailsData'
import { Article } from '../../types/article'
import { ArticleBlockType, ArticleType } from '../../consts/articleConsts'

const data: Article = {
  id: '1',
  createdAt: '28.04.2023',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Stas',
  },
  subtitle: 'this is test',
  title: 'Test',
  img: 'image',
  views: 100,
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: ['Программа, которую по традиции называют «Hello, world!»'],
    },
  ],
}

describe('getArticleDetailsData.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
})
