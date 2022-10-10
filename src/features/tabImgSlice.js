import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants";

const initialState = {
  products: products,
};
const tabImgSlice = createSlice({
  name: "tabImg",
  initialState,
  reducers: {
    handleSlide: (state, { payload }) => {
      const prevActive = state.products.findIndex((cur) => cur.active);

      if (payload === "right") {
        if (prevActive + 1 < state.products.length) {
          state.products = state.products.map((cur) => {
            return { ...cur, active: false };
          });
          state.products[prevActive + 1].active = true;
        } else {
          return initialState;
        }
      }
      if (payload === "left") {
        state.products = state.products.map((cur) => {
          return { ...cur, active: false };
        });
        if (prevActive > 0) {
          state.products[prevActive - 1].active = true;
        } else {
          state.products[state.products.length - 1].active = true;
        }
      }
    },
    handleThumbnail: (state, { payload }) => {
      state.products = state.products.map((cur) => {
        return { ...cur, active: false };
      });
      const clickedThumbIndex = state.products.findIndex(
        (cur) => cur.id === payload
      );
      state.products[clickedThumbIndex].active = true;
    },
  },
});

export const { handleSlide, handleThumbnail } = tabImgSlice.actions;
export default tabImgSlice.reducer;
