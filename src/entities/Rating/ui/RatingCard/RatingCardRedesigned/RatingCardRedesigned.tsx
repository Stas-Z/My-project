import { memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/redesigned/StarRating'
import { Text } from '@/shared/ui/redesigned/Text'

import { RatingCardProps } from '../RatingCard'

export const RatingCardRedesigned = memo((props: RatingCardProps) => {
  const {
    className,
    feedbackTitle,
    onAccept,
    onCancel,
    title,
    hasFeedback,
    rate = 0,
  } = props
  const { t } = useTranslation()
  const isMobile = useDevice()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
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
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
      />
    </>
  )

  return (
    <Card
      className={classNames('', {}, [className])}
      max
      data-testid="RatingCard"
    >
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('Thank you for your rating') : title} />
        <StarRating
          size={32}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      {!isMobile ? (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button data-testid="RatingCard.Close" onClick={cancelHandle}>
                {t('Cancel')}
              </Button>
              <Button
                data-testid="RatingCard.Send"
                onClick={acceptHandle}
                variant="outline"
              >
                {t('Submit')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      ) : (
        <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
          <VStack gap="32">
            {modalContent}
            <Button onClick={acceptHandle} variant="outline" size="l" fullWidth>
              {t('Submit')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  )
})
