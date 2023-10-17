import { configureStore } from '@reduxjs/toolkit'
import bookingref from '../feature/refSlice'
import servicesSlice from '../feature/servicesSlice'

export const store = configureStore({
  reducer: {
    bookingref:bookingref,
    services:servicesSlice
  },
})