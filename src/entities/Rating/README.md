### Entity Rating

Description: Contains all reusable rating logic/components that can later be used in features/widgets. (Содержит всю переиспользуемую логику/компоненты рэйтинга, которые можно использовать в features/widgets.)

#### Public api

- Components

`RatingCard` - Card with rating. Allows to vote for rating, but nor send it to server. `OnSubmit` and `OnCancel` are called when user rates.

(Компонент с рейтингом. Позволяет выставлять рейтинг, но не отправляет дпнные на сервер. Функция `OnSubmit` и `OnCancel` вызываются тогда, когда пользователь поставил свою оценку.)

- Types

`Rating` - Describes rating. (Описывает рейтинг.)
