import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootReducerType } from '../rootReducer'

export interface CounterStateType {
  maxSettingValue: number
  minSettingValue: number
  displayCounter: number
  error: string
}

const initialState: CounterStateType = {
  maxSettingValue: 0,
  minSettingValue: 0,
  displayCounter: 0,
  error: '',
}

export const counterSlice = createSlice({
  name: '@@counter',
  initialState,
  reducers: {
    settingMaxValue: (state, action: PayloadAction<number>) => {
      state.maxSettingValue = action.payload
    },
    settingMinValue: (state, action: PayloadAction<number>) => {
      state.minSettingValue = action.payload
    },
    setCurrentlySettings: (state) => {
      state.displayCounter = state.minSettingValue
      state.error = ''
    },
    errorCheckingAndSetting: (state) => {
      if (
        state.maxSettingValue < 0 ||
        state.minSettingValue < 0 ||
        state.minSettingValue > state.maxSettingValue
      ) {
        state.error = 'Incorrect value'
        return
      }
      if (state.maxSettingValue > 0 || state.minSettingValue > 0) {
        state.error = "Enter values and press 'Set"
        return
      }
    },
    setDisplayCounter: (state, action: PayloadAction<number>) => {
      state.displayCounter = action.payload
    },
  },
})

export const {
  settingMaxValue,
  settingMinValue,
  setCurrentlySettings,
  errorCheckingAndSetting,
  setDisplayCounter,
} = counterSlice.actions
export const counterReducer = counterSlice.reducer

export const maxSettingValueSelector = (state: RootReducerType) =>
  state.counter.maxSettingValue
export const minSettingValueSelector = (state: RootReducerType) =>
  state.counter.minSettingValue
export const displayCounterSelector = (state: RootReducerType) =>
  state.counter.displayCounter
export const errorSelector = (state: RootReducerType) => state.counter.error