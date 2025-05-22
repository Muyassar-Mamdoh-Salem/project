import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  UserInfo : null


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
    },

    increment: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },

    decrement: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    RemoveAllCart: (state) => {
      state.products = [];
    },
  },

setUser:(state,action)=>{

}


});

export const { addToCart, increment, decrement, RemoveAllCart } = appSlice.actions;
export default appSlice.reducer;
