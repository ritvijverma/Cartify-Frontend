import { configureStore } from '@reduxjs/toolkit'
import nameReducer from '../features/counter/NameSlice.js'
import searchReducer from '../features/SearchSlice.js'
import { cartSlice } from '../features/cart/cartSlice.js'

export const store = configureStore({
reducer:{
    displayName: nameReducer,
    search: searchReducer,
    cart: cartSlice.reducer
},
})