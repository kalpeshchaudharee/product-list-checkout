import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import cartSlice from "./features/users/cartSlice";

export default configureStore({
  reducer: {
      products: productsSlice,
      cart: cartSlice,
  },
});