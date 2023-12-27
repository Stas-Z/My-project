import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button variant="clear" onClick={toggle}>
          {short ? t('lng') : t('Language')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={toggle}
        >
          {short ? t('lng') : t('Language')}
        </ButtonDeprecated>
      }
    />
  )
})
