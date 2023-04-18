import { lazy } from 'react'

// export const AboutPageAsync = lazy(() => import('./ProfilePage'))

export const ProfilePageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500)
  }),
)
// искуственная задержка чтобы увидеть как отрабатывает  <Suspense fallback={}>
// и как происходит загрузка Чанка
// В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!, только в учебных целях.
