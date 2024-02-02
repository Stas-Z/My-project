import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { ScrollToTopButton } from '@/features/ScrollToTopButton'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <VStack
      justify="center"
      align="center"
      max
      maxHeight
      className={classNames('', {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  )
})
