import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { t } = useTranslation()
  const { className } = props

  const initialReducers: ReducersList = {
    profile: profileReducer,
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Profile Page')}</div>
    </DynamicModuleLoader>
  )
}
export default memo(ProfilePage)
