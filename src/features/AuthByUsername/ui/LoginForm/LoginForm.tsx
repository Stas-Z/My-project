import { memo } from 'react'

import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'

import { LoginFormDeprecated } from './LoginFormDeprecated/LoginFormDeprecated'
import { LoginFormRedesigned } from './LoginFormRedesigned/LoginFormRedesigned'
import { loginReducer } from '../../model/slice/loginSlice'

export interface LoginFormProps {
  className?: string
  isOpen?: boolean
  onSuccess?: () => void
}
const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = (props: LoginFormProps) => {
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<LoginFormRedesigned {...props} />}
        off={<LoginFormDeprecated {...props} />}
      />
    </DynamicModuleLoader>
  )
}

export default memo(LoginForm)
