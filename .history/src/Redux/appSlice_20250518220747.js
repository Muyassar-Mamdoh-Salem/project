import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  UserInfo: null
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

    // ✅ هذا هو المكان الصحيح
    setUser: (state, action) => {
      state.UserInfo = action.payload;
    }
  },
/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Logout user and set UserInfo to null
     * @function
     * @param {Object} state - slice state
     * @returns {Object} new state
     */
/*******  414d6b8a-5a03-410e-883a-904c067ca9b5  *******/
Logoutuser:(state) => {
  state.UserInfo = null;
}


});

export const { addToCart, increment, decrement, RemoveAllCart, setUser ,Logoutuser } = appSlice.actions;
export default appSlice.reducer;
