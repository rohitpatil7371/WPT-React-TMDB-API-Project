import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValue: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action) {
      state.cartValue.push(action.payload);
    },
    RemoveFromCart: function (state, action) {
      state.cartValue = state.cartValue.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const { addToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;