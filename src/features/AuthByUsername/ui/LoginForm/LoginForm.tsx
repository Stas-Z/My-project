import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
  className?: string
  isOpen?: boolean
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
  const { t } = useTranslation()
  const { className, isOpen } = props
  const dispatch = useDispatch()

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState)

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }))
  }, [dispatch, password, username])

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
})

export default LoginForm
