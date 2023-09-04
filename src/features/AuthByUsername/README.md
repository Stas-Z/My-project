### Feature AuthByUsername

Description: Shows login modal. All redux logic is implemented in this feature.

(Показывает модальное окно входа. Вся логика redux реализована в этой фиче.)

#### Public api

- Components

`LoginModal` - Login modal with implementation of login logic. (Модальное окно с реализацией логики входа.)

- Functions

`authMiddleware` - Checks if the user is logged in. Manages the key in the local storage. (Проверяет если пользователь залогинился. Управляет ключом в local storage.)

- Types

`LoginSchema` - Describes redux store type for login form. (Описывает тип хранилища Redux для формы входа.)
