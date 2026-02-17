import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ""
}

export const nameSlice =  createSlice({
    name: "name",
    initialState,
    reducers:{
        displayName: (state) =>{

            state.value = "Ritvij Verma Redux Toolkit Setup  is working"
        }
    }
})

export const {displayName} = nameSlice.actions
export default nameSlice.reducer