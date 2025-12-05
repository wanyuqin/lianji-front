import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  name: string
  avatar: string
  planName: string
  planDay: number
  planTotalDays: number
}

const initialState: UserState = {
  name: '健身爱好者',
  avatar: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
  planName: '增肌计划',
  planDay: 12,
  planTotalDays: 90
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { updateUserInfo } = userSlice.actions
export default userSlice.reducer
