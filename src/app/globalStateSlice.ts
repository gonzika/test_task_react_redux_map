import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface GlobalState {
  loading: boolean,
  sessionKey: string,
  geoData: object | null,
  error: string,
}

const initialState: GlobalState = {
  loading: false,
  sessionKey: '',
  geoData: null,
  error: '',
}



export const globalSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    set_sessionKey: (state, { payload }) => {
      state.sessionKey = payload.key
    },
    set_geoData: (state, { payload }) => {
      state.geoData = payload
    },
    set_loading: (state, { payload }) => {
      state.loading = payload
    },
    set_error: (state, { payload }) => {
      state.error = payload
    },
  },
  extraReducers: () => {
  },
})

// Action creators are generated for each case reducer function
export const { set_sessionKey, set_loading, set_error, set_geoData } = globalSlice.actions

const globalReducer = globalSlice.reducer
export default globalReducer