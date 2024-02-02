import { useCallback } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileCard } from '@/entities/Profile'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { ValidateProfileEror } from '../../../model/consts/editableProfileCardConsts'
import { getProfileError } from '../../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../../model/services/fetchProfileData/fetchProfileData'
import { profileActions } from '../../../model/slice/profileSlice'
import { EditableProfileCardHeader } from '../../EditableProfileCardHeader/EditableProfileCardHeader'
import { EditableProfileCardFormProps } from '../EditableProfileCardForm'

export const EditableProfileCardFormRedesigned = (
  props: EditableProfileCardFormProps,
) => {
  const { className, id } = props

  const dispatch = useAppDispatch()
  const { t } = useTranslation('profile')

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const ValidateErrorTranslates = {
    [ValidateProfileEror.SERVER_ERROR]: t('Server error'),
    [ValidateProfileEror.INCORRECT_AGE]: t('Wrong age'),
    [ValidateProfileEror.INCORRECT_CITY]: t('Incorrect city'),
    [ValidateProfileEror.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileEror.NO_DATA]: t('No data'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch],
  )
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch],
  )
  const onChangeAge = useCallback(
    (value?: string) => {
      const validateValue = value?.replace(/\D+/gm, '')
      dispatch(
        profileActions.updateProfile({ age: Number(validateValue || 0) }),
      )
    },
    [dispatch],
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch],
  )
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch],
  )
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch],
  )
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch],
  )
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch],
  )

  return (
    <Card max border="round" padding="0">
      <VStack max gap="16" className={classNames('', {}, [className])}>
        <EditableProfileCardHeader data={formData} isLoading={isLoading} />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              variant="error"
              text={ValidateErrorTranslates[err]}
              key={err}
              data-testid="EditableProfileCardForm.Error"
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </Card>
  )
}
