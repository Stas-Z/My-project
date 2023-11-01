import { FeatureFlags } from '@/shared/types/featureFlags'

import { UserRole } from '../consts/userConsts'

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
  features?: FeatureFlags
}

export interface UserSchema {
  authData?: User

  _inited: boolean // Нужно для того чтобы инициализация user'а происходила до отрисовки <AppRouter />
}
