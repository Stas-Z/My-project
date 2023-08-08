import { Profile } from '@/entities/Profile'
import { ValidateProfileEror } from '../../consts/editableProfileCardConsts'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileEror.NO_DATA]
  }
  const { first, lastname, username, age, city } = profile

  const errors: ValidateProfileEror[] = []

  if (!first || !lastname || !username) {
    errors.push(ValidateProfileEror.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age) || age > 100) {
    errors.push(ValidateProfileEror.INCORRECT_AGE)
  }

  if (!city) {
    errors.push(ValidateProfileEror.INCORRECT_CITY)
  }

  return errors
}
