### Entity User

Description: The user is the general entity for user. (User — это общая сущность пользователя.)

#### Public api

- Functions

`userReducer` - Reducer for user. (Редюсер пользователя)

`userActions` - Redux actions for user. (Redux действия для пользователя)

- Selectors

`getUserInited` - Selector that returns user initialization data. (Селектор который возвращает данные о инициализации пользователя)

`getUserAuthData` - Selector that returns user auth data. (Селектор, возвращающий данные аутентификации пользователя)

`getUserRoles` - Selector that returns user roles. (Селектор, который возвращает роли пользователей)

`isUserAdmin` - Selector that returns user is admin. (Селектор, который возвращает пользователя admin.)

`isUserManager` - Selector that returns user is manager. (Селектор, который возвращает пользователя manager.)

- Const

`UserRole` - Describes user role (e.g. ADMIN, MANAGER, USER). (Описывает роль пользователя)

- Types

`User` - Describes user. (Описывает пользователя)

`UserSchema` - Describes redux store type for user. (Описывает тип хранилища Redux для пользователя.)
