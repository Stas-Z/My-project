import { lazy } from 'react'

// export const ArticleDetailsPageAsync = lazy(() => import('./ArticleDetailsPage'))

export const ArticleDetailsPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400)
  }),
)
// искуственная задержка чтобы увидеть как отрабатывает  <Suspense fallback={}>
// и как происходит загрузка Чанка
// В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!, только в учебных целях.
