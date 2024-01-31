import { memo, useCallback, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './LoginFormRedesigned.module.scss'
import { getLoginState } from '../../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../../model/slice/loginSlice'
import { LoginFormProps } from '../LoginForm'

export const LoginFormRedesigned = memo((props: LoginFormProps) => {
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
    <VStack gap="8" className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Authorization form')} />
      {error && (
        <Text text={t('Incorrect password or username')} variant="error" />
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
        variant="outline"
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </VStack>
  )
})
