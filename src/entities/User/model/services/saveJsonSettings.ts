import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { setJsonSettingsMutation } from '../../api/userApi'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { getJsonSettings } from '../selectors/jsonSettings/jsonSettings'
import { JsonSettings } from '../types/jsonSettings'

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { rejectWithValue, getState, dispatch } = thunkAPI
  const userData = getUserAuthData(getState())
  const currentSettings = getJsonSettings(getState())

  if (!userData) {
    return rejectWithValue('no user data')
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings,
        },
      }),
    ).unwrap()

    if (!response.jsonSettings) {
      return rejectWithValue('no response')
    }

    return response.jsonSettings
  } catch (e) {
    console.log(e)
    return rejectWithValue('error saveJsonSettings')
  }
})
