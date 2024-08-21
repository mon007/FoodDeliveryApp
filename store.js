import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/CartSlice';
import restuarantSlice from './slices/RestuarantSlice';

export const store = configureStore({
  reducer: {
    cart : cartSlice,
    restuarant : restuarantSlice
  },
})