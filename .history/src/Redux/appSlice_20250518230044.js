import { createSlice } from "@reduxjs/toolkit";

// قراءة بيانات المستخدم من localStorage عند البداية
const savedUser = localStorage.getItem("UserInfo");

const initialState = {
  products: [],
  UserInfo: savedUser ? JSON.parse(savedUser) : null,
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

    setUser: (state, action) => {
      state.UserInfo = action.payload;
      // حفظ بيانات المستخدم في localStorage
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
    },

    Logoutuser: (state) => {
      state.UserInfo = null;
      // حذف بيانات المستخدم من localStorage عند تسجيل الخروج
      localStorage.removeItem("UserInfo");
    },

    // لو لا حاجة له يمكنك حذفه أو توحيد setUser و LoginUser
    LoginUser: (state, action) => {
      state.UserInfo = action.payload;
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
    },
  },
});

export const { addToCart, increment, decrement, RemoveAllCart, setUser, Logoutuser, LoginUser } = appSlice.actions;
export default appSlice.reducer;
