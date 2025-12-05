import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BodyState {
  weight: number
  prevWeight: number
  bodyFat: number
  prevBodyFat: number
  lastUpdated: string
}

const initialState: BodyState = {
  weight: 66.2,
  prevWeight: 66.1,
  bodyFat: 15.0,
  prevBodyFat: 15.0,
  lastUpdated: '2024-01-15'
}

const bodySlice = createSlice({
  name: 'body',
  initialState,
  reducers: {
    updateBodyData: (state, action: PayloadAction<Partial<BodyState>>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { updateBodyData } = bodySlice.actions
export default bodySlice.reducer
