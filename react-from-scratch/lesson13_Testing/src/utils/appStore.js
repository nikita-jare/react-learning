import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//reducer here is combination of the reducers in different slices we created
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
