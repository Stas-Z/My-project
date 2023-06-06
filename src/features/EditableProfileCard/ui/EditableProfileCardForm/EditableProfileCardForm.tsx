import { ProfileCard } from 'entities/Profile'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ValidateProfileEror } from '../../model/types/profile'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { profileActions } from '../../model/slice/profileSlice'

interface EditableProfileCardFormProps {
  className?: string
}

export const EditableProfileCardForm = (
  props: EditableProfileCardFormProps,
) => {
  const { className } = props

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
    <div className={classNames('', {}, [className])}>
      <EditableProfileCardHeader />
      {validateErrors?.length
        && validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={ValidateErrorTranslates[err]}
            key={err}
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
    </div>
  )
}
