import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import DefaultAvatar from '@/shared/assets/icons/default-avatar.svg'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ProfileCardDeprecated.module.scss'
import { ProfileCardProps } from '../ProfileCard'

/**
 * Use redesigned component
 * @deprecated
 */
export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
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
          theme={TextTheme.ERROR}
          title={t('Something went wrong')}
          text={t('Try refreshing the page or come back later')}
          align={TextAlign.CENTER}
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar ? (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt="avatar" />
        </HStack>
      ) : (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <DefaultAvatar className={cls.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Your name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        editing={!readonly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Your surname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        editing={!readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={data?.age}
        placeholder={t('Your age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Your city')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Your login')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Your photo')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        editing={!readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  )
})
