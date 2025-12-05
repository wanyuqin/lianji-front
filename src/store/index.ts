import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import trainingReducer from './slices/trainingSlice'
import dietReducer from './slices/dietSlice'
import bodyReducer from './slices/bodySlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    training: trainingReducer,
    diet: dietReducer,
    body: bodyReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
