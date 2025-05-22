// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  count: 0, // عدد العناصر في السلة
};

const appSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.count += 1; // زيادة العدد عند إضافة منتج
    },
  },
});

export const { addToCart } = appSlice.actions;

export default appSlice.reducer;
