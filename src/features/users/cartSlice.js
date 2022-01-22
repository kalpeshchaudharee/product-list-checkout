import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAddedToCart(state, action) {
      state.push(action.payload);
    },
    increaseProductQty(state, action) {
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.qty = existingProduct.qty ? existingProduct.qty + 1 : 1;
      }
    },
    decreaseProductQty(state, action) {
      const { id } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        if (existingProduct.qty && existingProduct.qty > 1) {
          existingProduct.qty = existingProduct.qty - 1;
        } else {
          return state.filter((product) => product.id !== id);
        }
      }
    },
    removeItem(state, action) {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    },
    emptyCart(state, action) {
      state = [];
      return state;
    },
  },
});

export const {
  productAddedToCart,
  increaseProductQty,
  decreaseProductQty,
  removeItem,
  emptyCart
} = cartSlice.actions;

export default cartSlice.reducer;
