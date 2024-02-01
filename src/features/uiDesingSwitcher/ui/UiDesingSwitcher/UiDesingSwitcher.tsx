import { memo, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import {
  ToggleFeatures,
  getFeatureFlag,
  updateFeatureFlag,
} from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { ListBox as ListBoxRedesigned } from '@/shared/ui/redesigned/Popups'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface UiDesingSwitcherProps {
  className?: string
}

export const UiDesingSwitcher = memo((props: UiDesingSwitcherProps) => {
  const { className } = props
  const { t } = useTranslation()
  const isAppRedesigned = getFeatureFlag('isAppRedesigned')
  const authData = useSelector(getUserAuthData)
  const forceUpdate = useForceUpdate()

  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const items = [
    {
      content: t('new'),
      value: 'new',
    },
    {
      content: t('old'),
      value: 'old',
    },
  ]

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true)
      await dispatch(
        updateFeatureFlag({
          userId: authData?.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap()
      setIsLoading(false)
      forceUpdate()
    }
  }

  const propsList = {
    value: isAppRedesigned ? 'new' : 'old',
    items,
    onChange,
    defaultValue: t('Choose style'),
  }

  const UiDesingSwitcherRedesigned = (
    <HStack gap="16">
      <Text text={t('Choose style')} />
      {isLoading ? (
        <SkeletonRedesigned width={123} height={32} border="16px" />
      ) : (
        <ListBoxRedesigned {...propsList} />
      )}
    </HStack>
  )
  const UiDesingSwitcherDeprecated = (
    <HStack gap="16">
      {isLoading ? (
        <SkeletonDeprecated width={193} height={24} border="5px" />
      ) : (
        <ListBoxDeprecated {...propsList} label={t('Choose style')} />
      )}
    </HStack>
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={UiDesingSwitcherRedesigned}
      off={UiDesingSwitcherDeprecated}
    />
  )
})
