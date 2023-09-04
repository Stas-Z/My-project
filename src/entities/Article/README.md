### Entity Article

Description: The article serves as a fundamental building block in our project, encompassing both individual articles and lists.

(Статья является фундаментальным строительным блоком нашего проекта, охватывающим как отдельные статьи, так и списки.)

#### Public api

- Components

`ArticleDetails` - Information about article (компонент с информацией о статье)

`ArticleList` - List of articles (Компонент со списком статей)

- Selectors

`getArticleDetailsData` - selector that retrieves information about article (Селектор для получения информации о текущей открытой статье)

- Const

`ArticleType` - Represents article type (e.g. IT, SCIENCE, ECONOMICS) (Представляет тип статьи)

`ArticleBlockType` - Represents article block type (e.g. IMAGE, CODE, TEXT) (Представляет тип блока статьи)

`ArticleSortFiled` - Represents article sort type (e.g. views, title, createdAt) (Представляет тип сортировки статей)

`ArticleView` - Represents article view type (e.g. list, grid) (Представляет тип отображения статьи)

- Types

`Article` - Describes article (Тип, описывающий статью)

`ArticleDetailsSchema` - Describes redux store type for information about article (Описывает тип хранилища Redux для получения информации о статье.)
