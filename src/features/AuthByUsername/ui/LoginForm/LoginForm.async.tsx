import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

// export const AboutPageAsync = lazy(() => import('./LoginForm'))

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)
  }),
)
// искуственная задержка чтобы увидеть как отрабатывает  <Suspense fallback={}>
// и как происходит загрузка Чанка
// В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!, только в учебных целях.
