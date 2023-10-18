import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:{menu:false}
}

export const generalSlice=createSlice({
    name:'generalSlice',
    initialState,
    reducers:{
        setMenu:((state,action)=>{
            console.log(action.payload)
            state.value=action.payload
        }),
    }
})

export const {setMenu}=generalSlice.actions
export default generalSlice.reducer