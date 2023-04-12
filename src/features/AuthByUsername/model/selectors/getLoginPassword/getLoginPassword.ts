import { createSelector } from '@reduxjs/toolkit'
import { getLoginState } from '../getLoginState/getLoginState'
import { LoginSchema } from '../../types/loginSchema'

export const getLoginPassword = createSelector(
  getLoginState,
  (LoginForm: LoginSchema) => LoginForm.password,
)
