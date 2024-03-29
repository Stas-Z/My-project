import { useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

import { getProfileData } from '../../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../../model/slice/profileSlice'
import { EditableProfileCardHeaderProps } from '../EditableProfileCardHeader'

export const EditableProfileCardHeaderDeprecated = (
  props: EditableProfileCardHeaderProps,
) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSave()
      }
      if (e.key === 'Escape') {
        onCancelEdit()
      }
    },
    [onCancelEdit, onSave],
  )

  useEffect(() => {
    if (!readonly) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, readonly])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t('Edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t('Cancel')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
              >
                {t('Save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  )
}
