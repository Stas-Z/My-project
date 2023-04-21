import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'
import cls from './EditableProfileCardHeader.module.scss'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = (
  props: EditableProfileCardHeaderProps,
) => {
  const { className } = props
  const { t } = useTranslation('profile')
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
    <div className={classNames(cls.editableProfileCardHeader, {}, [className])}>
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('Edit')}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('Cancel')}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Save')}
          </Button>
        </>
      )}
    </div>
  )
}
