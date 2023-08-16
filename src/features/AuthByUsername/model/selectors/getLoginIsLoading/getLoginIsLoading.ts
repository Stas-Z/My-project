import { createSelector } from '@reduxjs/toolkit'

import { LoginSchema } from '../../types/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginIsLoading = createSelector(
  getLoginState,
  (LoginForm: LoginSchema) => LoginForm.isLoading,
)
