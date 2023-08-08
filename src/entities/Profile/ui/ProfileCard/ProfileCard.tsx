import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'
import DefaultAvatar from '@/shared/assets/icons/default-avatar.svg'
import { Profile } from '../../model/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
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
        placeholder={t('Name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        editing={!readonly}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Surname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        editing={!readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Login')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
        editing={!readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Photo')}
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
