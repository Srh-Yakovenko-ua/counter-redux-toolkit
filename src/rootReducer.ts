import { combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from './features/counter-slice'

export type RootReducerType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  counter: counterReducer
})