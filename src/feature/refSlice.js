import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:"booking"
}
export const refSlice=createSlice({
    name:'bookingRef',
    initialState,
    reducers:{
        setfocus:(state)=>{
            state.value.current.focus()
        },
        setBookingRef:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {setfocus,setBookingRef} =refSlice.actions
export default refSlice.reducer