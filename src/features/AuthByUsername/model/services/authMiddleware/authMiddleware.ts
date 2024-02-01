import { Action, Dispatch, isAnyOf, isFulfilled } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { userActions } from '@/entities/User'
import {
  LOCAL_STORAGE_LAST_DESIGN_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage'

import { loginByUsername } from '../loginByUsername/loginByUsername'

interface Store {
  dispatch: Dispatch
  getState: () => StateSchema
}

const isLoggedIn = isFulfilled(loginByUsername)
const isLoggedOut = isAnyOf(userActions.logout)

export const authMiddleware =
  (store: Store) =>
  (next: (action: Action) => void) =>
  (action: Action): void => {
    if (isLoggedIn(action)) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id)
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        action.payload.features?.isAppRedesigned ? 'new' : 'old',
      )
    }

    if (isLoggedOut(action)) {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }

    next(action)
  }
