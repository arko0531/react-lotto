import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: "",
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    submitPriceHandler(state, actions) {
      state.price = actions.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const priceActions = priceSlice.actions;

export default priceSlice.reducer;
