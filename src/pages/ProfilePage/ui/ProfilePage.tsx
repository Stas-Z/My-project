import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { EditableProfileCardForm } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text title={t('Profile not found')} className={cls.error} />
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCardForm id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  )
}
export default memo(ProfilePage)
