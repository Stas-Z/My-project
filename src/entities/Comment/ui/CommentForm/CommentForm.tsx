import { memo } from 'react'

import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'

import { CommentFormDeprecated } from './CommentFormDeprecated/CommentFormDeprecated'
import { CommentFormRedesigned } from './CommentFormRedesigned/CommentFormRedesigned'
import { commentFormReducer } from '../../model/slice/commentFormSlice'

export interface CommentFormProps {
  className?: string
  onSendComment: (text: string) => void
  isLoading?: boolean
}

const initialReducers: ReducersList = {
  commentForm: commentFormReducer,
}

export const CommentForm = (props: CommentFormProps) => {
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<CommentFormRedesigned {...props} />}
        off={<CommentFormDeprecated {...props} />}
      />
    </DynamicModuleLoader>
  )
}
export default memo(CommentForm)
