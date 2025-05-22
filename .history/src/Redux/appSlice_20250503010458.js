import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // المنتجات في السلة
  count: 0      // عداد عام (مثلاً عدد العناصر أو الاستخدام العام)
};

const appSlice = createSlice({
  name: "Ecommerce",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item?.id === action.payload?.id
      );

      if (item) {
        if (action.payload?.quantity > 0) {
          item.quantity += action.payload.quantity;
        }
      } else {
        if (action.payload?.id && action.payload?.quantity > 0) {
          state.products.push(action.payload);
        }
      }

      // زيادة العداد بعد الإضافة
      state.count += 1;
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );

  

    incrementCount: (state) => {
      state.count += 1;
    },

    decrementCount: (state) => {
      if (state.count > 0) state.count -= 1;
    },

    resetCount: (state) => {
      state.count = 0;
    }
  },
});

export const { addToCart, removeFromCart, incrementCount, decrementCount, resetCount } = appSlice.actions;
export default appSlice.reducer;
