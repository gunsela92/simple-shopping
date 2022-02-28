import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});