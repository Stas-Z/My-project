import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation('articles')

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      {t('Articles Details Page')}
    </div>
  )
}
export default memo(ArticleDetailsPage)
