import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import tabImgReducer from "../features/tabImgSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    tabImg: tabImgReducer,
  },
});

export default store;
