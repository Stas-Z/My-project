import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ProfileCardRedesigned.module.scss'
import { ProfileCardProps } from '../ProfileCard'

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <Card padding="0" max>
        <VStack gap="32" align="center">
          <HStack gap="24" max>
            <VStack gap="16" max>
              <Skeleton height={38} width="100%" border="20px" />
              <Skeleton height={38} width="100%" border="20px" />
              <Skeleton height={38} width="100%" border="20px" />
              <Skeleton height={38} width="100%" border="20px" />
            </VStack>
            <VStack gap="16" max>
              <Skeleton height={38} width="100%" border="20px" />
              <Skeleton height={38} width="100%" border="20px" />
              <Skeleton height={38} width="70%" border="20px" />
              <Skeleton height={38} width="70%" border="20px" />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    )
  }
  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          variant="error"
          title={t('Something went wrong')}
          text={t('Try refreshing the page or come back later')}
          align="center"
        />
      </HStack>
    )
  }

  return (
    <Card max className={className} padding="0">
      <VStack gap="32">
        <HStack gap="24" max align="start">
          <VStack gap="16" max>
            <Input
              value={data?.first}
              label={t('Name')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.FirstName"
            />
            <Input
              value={data?.lastname}
              label={t('Surname')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.LastName"
            />
            <Input
              value={data?.age}
              label={t('Age')}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t('City')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              value={data?.username}
              label={t('Login')}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Photo')}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <VStack max maxHeight justify="center" className={cls.select}>
              <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
              />
            </VStack>
            <VStack max maxHeight justify="center" className={cls.select}>
              <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
              />
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
})
