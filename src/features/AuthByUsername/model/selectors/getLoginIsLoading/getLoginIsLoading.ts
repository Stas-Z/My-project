import { createSelector } from '@reduxjs/toolkit'
import { getLoginState } from '../getLoginState/getLoginState'
import { LoginSchema } from '../../types/loginSchema'

export const getLoginIsLoading = createSelector(
  getLoginState,
  (LoginForm: LoginSchema) => LoginForm.isLoading,
)
