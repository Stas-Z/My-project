import { memo, useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Input } from '@/shared/ui/deprecated/Input'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'

import cls from './LoginFormDeprecated.module.scss'
import { getLoginState } from '../../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../../model/slice/loginSlice'
import { LoginFormProps } from '../LoginForm'

export const LoginFormDeprecated = memo((props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className, isOpen, onSuccess } = props
  const dispatch = useAppDispatch()

  const { username, password, isLoading, error } = useSelector(getLoginState)

  const forceUpdate = useForceUpdate()

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
      forceUpdate()
    }
  }, [dispatch, password, username, onSuccess, forceUpdate])

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
  )
})
