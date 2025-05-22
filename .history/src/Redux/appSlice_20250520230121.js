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
    const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    // features/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


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
