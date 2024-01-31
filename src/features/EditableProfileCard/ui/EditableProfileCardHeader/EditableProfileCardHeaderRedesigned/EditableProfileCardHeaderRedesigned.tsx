import { useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './EditableProfileCardHeaderRedesigned.module.scss'
import { getProfileData } from '../../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../../model/selectors/getProfileReadonly/getProfileReadonly'
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../../model/slice/profileSlice'
import { EditableProfileCardHeaderProps } from '../EditableProfileCardHeader'

export const EditableProfileCardHeaderRedesigned = (
  props: EditableProfileCardHeaderProps,
) => {
  const { className, data, isLoading } = props
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

  if (isLoading) {
    return (
      <Card max padding="16">
        <HStack max justify="between">
          <HStack max justify="start" />
          <HStack max justify="center">
            <Skeleton border="50%" height={128} width={128} />
          </HStack>
          <HStack max justify="end">
            <Skeleton height={40} width={219} border="16px" />
          </HStack>
        </HStack>
      </Card>
    )
  }

  if (canEdit) {
    return (
      <Card max padding="16" className={classNames('', {}, [className])}>
        {readonly ? (
          <HStack max justify="between">
            <HStack max justify="start" />
            <HStack max justify="center">
              <Avatar src={data?.avatar} alt="avatar" size={128} />
            </HStack>
            <HStack max justify="end">
              <Button
                variant="outline"
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
                className={cls.button}
              >
                {t('Edit profile')}
              </Button>
            </HStack>
          </HStack>
        ) : (
          <HStack justify="between" max>
            <HStack max justify="start">
              <Button
                variant="outline"
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
                color="cancel"
                className={cls.button}
              >
                {t('Cancel')}
              </Button>
            </HStack>
            <HStack max justify="center">
              <Avatar src={data?.avatar} alt="avatar" size={128} />
            </HStack>
            <HStack max justify="end">
              <Button
                variant="outline"
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
                color="save"
                className={cls.button}
              >
                {t('Save')}
              </Button>
            </HStack>
          </HStack>
        )}
      </Card>
    )
  }
  return (
    <HStack justify="center" max>
      <Avatar src={data?.avatar} alt="avatar" size={128} />
    </HStack>
  )
}
