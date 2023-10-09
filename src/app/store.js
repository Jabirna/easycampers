import { configureStore } from '@reduxjs/toolkit'
import bookingref from '../feature/refSlice'

export const store = configureStore({
  reducer: {
    bookingref:bookingref,
  },
})