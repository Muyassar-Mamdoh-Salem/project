import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],   // للعربة (Cart)
  UserInfo: null, // معلومات المستخدم
  favorites: [],  // المفضلة
};

const appSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {
    // عربة التسوق
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

    // بيانات المستخدم
    setUser: (state, action) => {
      state.UserInfo = action.payload;
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
    },
    Logoutuser: (state) => {
      state.UserInfo = null;
      localStorage.removeItem("UserInfo");
    },

    // المفضلة
    addToFavorites: (state, action) => {
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  RemoveAllCart,
  setUser,
  Logoutuser,
  addToFavorites,
  removeFromFavorites,
} = appSlice.actions;

export default appSlice.reducer;
