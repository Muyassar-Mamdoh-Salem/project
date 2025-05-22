import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // ✅ التصحيح هنا
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
        item.quantit += action.payload.quantity;
      } else {
        state.products.push(
          action.payload
        );
      }
    },
  },
});

export const { addToCart } = appSlice.actions;
export default appSlice.reducer;
