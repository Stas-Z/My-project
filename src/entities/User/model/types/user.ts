export interface User {
  id: string
  username: string
  avatar?: string
}

export interface UserSchema {
  authData?: User

  _inited: boolean // Нужно для того чтобы инициализация user'а происходила до отрисовки <AppRouter />
}
