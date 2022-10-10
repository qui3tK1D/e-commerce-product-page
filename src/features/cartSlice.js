import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const totalAmount = (
        +payload.discountPrice * payload.totalQuantity
      ).toFixed(2);
      if (!state.items.length) {
        state.items = { ...payload, totalAmount };
      }
      state.items.totalAmount = totalAmount;
    },
    deleteItem: (state, { payload }) => {
      return initialState;
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
