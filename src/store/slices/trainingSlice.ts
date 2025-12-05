import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Exercise {
  id: string
  name: string
  sets: string
  lastRecord: string
}

interface TrainingState {
  todayTitle: string
  exercises: Exercise[]
  isCompleted: boolean
}

const initialState: TrainingState = {
  todayTitle: '推日A',
  exercises: [
    { id: '1', name: '杠铃卧推', sets: '4×5-8', lastRecord: '80kg ×8' },
    { id: '2', name: '上斜哑铃卧推', sets: '3×8-12', lastRecord: '30kg ×10' },
    { id: '3', name: '双杠臂屈伸', sets: '3×力竭', lastRecord: '自重×12' }
  ],
  isCompleted: false
}

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    completeTraining: (state) => {
      state.isCompleted = true
    }
  }
})

export const { completeTraining } = trainingSlice.actions
export default trainingSlice.reducer
