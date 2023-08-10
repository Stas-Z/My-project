import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, feedbackTitle, onAccept, onCancel, title, hasFeedback } =
    props
  const { t } = useTranslation()
  const isMobile = useDevice()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (hasFeedback) {
        setIsModalOpen(true)
      } else {
        onAccept?.(selectedStarsCount)
      }
    },
    [hasFeedback, onAccept],
  )

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
      />
    </>
  )

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align="center" gap="8">
        <Text title="" />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      {!isMobile ? (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t('Cancel')}
              </Button>
              <Button onClick={acceptHandle} theme={ButtonTheme.OUTLINE}>
                {t('Submit')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      ) : (
        <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
          <VStack gap="32">
            {modalContent}
            <Button
              onClick={acceptHandle}
              theme={ButtonTheme.OUTLINE}
              size={ButtonSize.L}
              fullWidth
            >
              {t('Submit')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  )
})
