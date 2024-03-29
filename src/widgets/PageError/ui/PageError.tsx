import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'

import cls from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('An error occurred')}</p>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Button onClick={reloadPage}>{t('Reload')}</Button>}
        off={
          <ButtonDeprecated onClick={reloadPage}>
            {t('Reload')}
          </ButtonDeprecated>
        }
      />
    </div>
  )
})
