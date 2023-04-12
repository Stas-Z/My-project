import { createSelector } from '@reduxjs/toolkit'
import { getLoginState } from '../getLoginState/getLoginState'
import { LoginSchema } from '../../types/loginSchema'

export const getLoginUsername = createSelector(
  getLoginState,
  (LoginForm: LoginSchema) => LoginForm.username,
)
