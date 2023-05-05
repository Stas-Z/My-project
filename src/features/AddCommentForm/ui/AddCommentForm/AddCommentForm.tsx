import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
  isLoading?: boolean
}

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment, isLoading } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text)
    onCommentTextChange('') // Очищаем инпут
  }, [onCommentTextChange, onSendComment, text])

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} className={cls.text} />
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Leave comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t('Submit')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(AddCommentForm)
