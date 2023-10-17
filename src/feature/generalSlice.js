import {createSlice} from '@reduxjs/toolkit'
import {useState} from 'react'

const initialState={
    menu:false
}

export const generalSlice=createSlice({
    name:'generalSlice',
    initialState,
    reducers:{
        setMenu:((state)=>{
            state.menu=!state.menu
        })
    }
})

export const {setMenu}=generalSlice.actions
export default generalSlice.reducers