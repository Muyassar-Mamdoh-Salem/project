import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  UserInfo: null,
};


const appSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item?.id === action.payload?.id);
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
    

/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Increment the quantity of a product in the cart
     * @param {Object} state - The state of the store
     * @param {Object} action - The action to be handled
     * @param {Number} action.payload.id - The id of the product to be incremented
     */
/*******  c6150d2c-1833-42cd-a7e4-c5e1f21130e7  *******/
    increment: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },

    decrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    RemoveAllCart: (state) => {
      state.products = [];
    },

    setUser: (state, action) => {
      state.UserInfo = action.payload;
      localStorage.setItem("UserInfo", JSON.stringify(action.payload)); // حفظ في localStorage
    },

    Logoutuser: (state) => {
      state.UserInfo = null;
      localStorage.removeItem("UserInfo"); // حذف من localStorage عند تسجيل الخروج
    },
  },
});

export const { addToCart, increment, decrement, RemoveAllCart, setUser, Logoutuser } =
  appSlice.actions;

export default appSlice.reducer;
