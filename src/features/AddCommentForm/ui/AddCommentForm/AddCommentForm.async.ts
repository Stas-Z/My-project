import { FC, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

// export const AddCommentFormAsync = lazy(() => import('./AddCommentForm'))

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500)
  }),
)
// искуственная задержка чтобы увидеть как отрабатывает  <Suspense fallback={}>
// и как происходит загрузка Чанка
// В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!, только в учебных целях.
