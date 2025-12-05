import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Meal {
  id: string
  name: string
  status: 'completed' | 'pending'
}

interface DietState {
  targetCalories: number
  currentCalories: number
  targetProtein: number
  currentProtein: number
  targetCarbs: number
  currentCarbs: number
  targetFat: number
  currentFat: number
  meals: Meal[]
}

const initialState: DietState = {
  targetCalories: 2800,
  currentCalories: 450,
  targetProtein: 130,
  currentProtein: 30,
  targetCarbs: 330,
  currentCarbs: 50,
  targetFat: 75,
  currentFat: 10,
  meals: [
    { id: '1', name: '早餐', status: 'completed' },
    { id: '2', name: '午餐', status: 'pending' },
    { id: '3', name: '训练前加餐', status: 'pending' },
    { id: '4', name: '训练后加餐', status: 'pending' },
    { id: '5', name: '晚餐', status: 'pending' }
  ]
}

const dietSlice = createSlice({
  name: 'diet',
  initialState,
  reducers: {
    updateMealStatus: (state, action: PayloadAction<{ id: string, status: 'completed' | 'pending' }>) => {
      const meal = state.meals.find(m => m.id === action.payload.id)
      if (meal) {
        meal.status = action.payload.status
      }
    }
  }
})

export const { updateMealStatus } = dietSlice.actions
export default dietSlice.reducer
