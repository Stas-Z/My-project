import { memo } from 'react'

import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { EditableProfileCardForm } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
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
  const content = (
    <VStack max gap="32">
      <EditableProfileCardForm id={id} />
      <ProfileRating profileId={id} />
    </VStack>
  )

  return (
    <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card max border="round" padding="24">
            {content}
          </Card>
        }
        off={content}
      />
    </Page>
  )
}
export default memo(ProfilePage)
