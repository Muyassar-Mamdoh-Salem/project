import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],   // عربة التسوق (Cart)
  UserInfo: null, // معلومات المستخدم
  favorites: [],  // قائمة المفضلة
};

const appSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {
    // إضافة منتج للعربة أو زيادة الكمية
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

    // زيادة كمية المنتج في العربة
    increment: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },

    // تقليل كمية المنتج في العربة (لا تقل عن 1)
    decrement: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    // حذف جميع المنتجات من العربة
    RemoveAllCart: (state) => {
      state.products = [];
    },

    // تعيين بيانات المستخدم وتخزينها في localStorage
    setUser: (state, action) => {
      state.UserInfo = action.payload;
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
    },

    // تسجيل خروج المستخدم وحذف بياناته من localStorage
    Logoutuser: (state) => {
      state.UserInfo = null;
      localStorage.removeItem("UserInfo");
    },

    // إضافة منتج لقائمة المفضلة (إذا لم يكن موجوداً مسبقاً)
    addToFavorites: (state, action) => {
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },

    // إزالة منتج من قائمة المفضلة
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

// تصدير الأكشنز لاستخدامها في الكومبوننتات
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

// تصدير الريديور لدمجه في الـ store
export default appSlice.reducer;
