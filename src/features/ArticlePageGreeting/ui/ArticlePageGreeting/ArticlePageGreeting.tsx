import { memo, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Text as TextDerecated } from '@/shared/ui/deprecated/Text'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Text } from '@/shared/ui/redesigned/Text'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlesPageWasOpend } = useJsonSettings()
  const dispatch = useAppDispatch()
  const isMobile = useDevice()

  useEffect(() => {
    if (!isArticlesPageWasOpend) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlesPageWasOpend: true }))
    }
  }, [dispatch, isArticlesPageWasOpend])

  const onClose = () => setIsOpen(false)

  const text = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Text
          title={t('Welcome to the article page')}
          text={t('Here you can search and view articles on various topics')}
        />
      }
      off={
        <TextDerecated
          title={t('Welcome to the article page')}
          text={t('Here you can search and view articles on various topics')}
        />
      }
    />
  )

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    )
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  )
})
