import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cart.find((product) => product._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find((product) => product._id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((product) => product._id !== itemId);
      }
    },
  },
});

export const {addToCart, removeFromCart} =cartSlice.actions
export default cartSlice.reducer