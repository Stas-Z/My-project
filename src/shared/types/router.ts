import { RouteProps } from 'react-router-dom'
import { UserRole } from '@/entities/User'

// Расширяем RouteProps флагом authOnly, для проверки авторизации пользователя

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
