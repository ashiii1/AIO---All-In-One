import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

const reduser = {
  cart: cartSlice,
  auth: authSlice,
};

const store = configureStore({
  reducer: reduser,
});

export default store;
