import {
  EditableProfileCardForm,
  fetchProfileData,
  profileReducer,
} from 'features/EditableProfileCard'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <EditableProfileCardForm />
      </div>
    </DynamicModuleLoader>
  )
}
export default memo(ProfilePage)
