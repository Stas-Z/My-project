import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'

import { EditableProfileCardFormDeprecated } from './EditableProfileCardFormDeprecated/EditableProfileCardFormDeprecated'
import { EditableProfileCardFormRedesigned } from './EditableProfileCardFormRedesigned/EditableProfileCardFormRedesigned'
import { profileReducer } from '../../model/slice/profileSlice'

export interface EditableProfileCardFormProps {
  className?: string
  id: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCardForm = (
  props: EditableProfileCardFormProps,
) => {
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<EditableProfileCardFormRedesigned {...props} />}
        off={<EditableProfileCardFormDeprecated {...props} />}
      />
    </DynamicModuleLoader>
  )
}
