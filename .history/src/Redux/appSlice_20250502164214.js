import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // المنتجات تبدأ كمصفوفة فارغة
};

const appSlice = createSlice({
  name: "Ecommerce",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item?.id === action.payload?.id
      );

      // إذا كانت الكمية موجودة وvalid
      if (item) {
        // تحقق أن الكمية التي سيتم إضافتها أكبر من 0
        if (action.payload?.quantity > 0) {
          item.quantity += action.payload.quantity;
        }
      } else {
        // إذا لم تكن موجودة في السلة، أضفها
        if (action.payload?.id && action.payload?.quantity > 0) {
          state.products.push(action.payload);
        }
      }
    },

    // يمكن إضافة إجراء لحذف منتج من السلة في المستقبل
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

// تصدير الأكشن
export const { addToCart, removeFromCart } = appSlice.actions;

// تصدير الـ reducer
export default appSlice.reducer;
