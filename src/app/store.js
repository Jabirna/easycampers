import { configureStore } from '@reduxjs/toolkit'
import bookingref from '../feature/refSlice'
import servicesSlice from '../feature/servicesSlice'
import generalSlice from '../feature/generalSlice'

export const store = configureStore({
  reducer: {
    bookingref:bookingref,
    services:servicesSlice,
    general:generalSlice
  },
})