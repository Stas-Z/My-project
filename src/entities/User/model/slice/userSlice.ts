import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { setFeatureFlags } from '@/shared/lib/features'

import { initAuthData } from '../services/initAuthData'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { JsonSettings } from '../types/jsonSettings'
import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {
  _inited: false,
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)
    },

    logout: (state) => {
      state.authData = undefined
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload
        }
      },
    )
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authData = action.payload
        setFeatureFlags(action.payload.features)
        state._inited = true
      },
    )
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true
    })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
