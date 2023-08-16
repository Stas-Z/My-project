import { RouteProps } from 'react-router-dom'
// eslint-disable-next-line fsd-pathcheker/layer-imports
import { UserRole } from '@/entities/User'

// Расширяем RouteProps флагом authOnly, для проверки авторизации пользователя

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
