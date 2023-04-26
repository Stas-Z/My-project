import { lazy } from 'react'

// export const ArticlesPageAsync = lazy(() => import('./ArticlesPage'))

export const ArticlesPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500)
  }),
)
// искуственная задержка чтобы увидеть как отрабатывает  <Suspense fallback={}>
// и как происходит загрузка Чанка
// В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!, только в учебных целях.