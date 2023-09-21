import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import DoctorSlice from './DoctorSlice'


export const store = configureStore({
  reducer: { user:UserSlice, doctor:DoctorSlice},
})