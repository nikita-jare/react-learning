import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    //state is basically the current state
    //we are mutating the state here
    addProduct: (state, action) => {
      console.log(action);
      const existingProduct = state.products.find(
        (product) => product?.card?.info?.id === action.payload.card?.info?.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += 1;
      state.total += action.payload.card?.info?.price
        ? action.payload.card?.info?.price / 100
        : (action.payload.card?.info?.defaultPrice / 100) * state.quantity;

      console.log(JSON.stringify(state.products), state.quantity, state.total);
    },
    removeProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.card?.info?.id === action.payload.card?.info?.id
      );

      if (existingProduct) {
        existingProduct.quantity -= 1;

        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(
            (product) =>
              product.card?.info?.id !== action.payload.card?.info?.id
          );
        }
      }
      state.quantity -= 1;
      state.total -= action.payload.card?.info?.price
        ? action.payload.card?.info?.price / 100
        : action.payload.card?.info?.defaultPrice / 100;
    },
    clearCart: (state) => {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
