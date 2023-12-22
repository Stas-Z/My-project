import { memo, useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Input } from '@/shared/ui/deprecated/Input'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'

import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

export interface LoginFormProps {
  className?: string
  isOpen?: boolean
  onSuccess?: () => void
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = (props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className, isOpen, onSuccess } = props
  const dispatch = useAppDispatch()

  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ password, username }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [dispatch, password, username, onSuccess])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onLoginClick()
      }
    },
    [onLoginClick],
  )
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, isOpen])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Authorization form')} />
        {error && (
          <Text
            text={t('Incorrect password or username')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autoFocus
          type="text"
          className={cls.input}
          placeholder={t('Username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(LoginForm)
