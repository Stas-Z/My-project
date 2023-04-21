import {
  EditableProfileCardForm,
  fetchProfileData,
  profileReducer,
} from 'features/EditableProfileCard'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = (props: ProfilePageProps) => {
  const { t } = useTranslation()
  const { className } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <EditableProfileCardForm />
      </div>
    </DynamicModuleLoader>
  )
}
export default memo(ProfilePage)
