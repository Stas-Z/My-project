import { memo, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Text } from '@/shared/ui/deprecated/Text'

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
    <Text
      title={t('Welcome to the article page')}
      text={t('Here you can search and view articles on various topics')}
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
