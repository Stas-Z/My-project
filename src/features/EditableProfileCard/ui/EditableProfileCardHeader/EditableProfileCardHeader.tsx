/* eslint-disable max-len */
import { Profile } from '@/entities/Profile'
import { ToggleFeatures } from '@/shared/lib/features'

import { EditableProfileCardHeaderDeprecated } from './EditableProfileCardHeaderDeprecated/EditableProfileCardHeaderDeprecated'
import { EditableProfileCardHeaderRedesigned } from './EditableProfileCardHeaderRedesigned/EditableProfileCardHeaderRedesigned'

export interface EditableProfileCardHeaderProps {
  className?: string
  data?: Profile
  isLoading?: boolean
}

export const EditableProfileCardHeader = (
  props: EditableProfileCardHeaderProps,
) => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<EditableProfileCardHeaderRedesigned {...props} />}
      off={<EditableProfileCardHeaderDeprecated {...props} />}
    />
  )
}
