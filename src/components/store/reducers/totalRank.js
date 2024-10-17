import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRank: {
    firstClass: 0,
    secondClass: 0,
    thirdClass: 0,
    fourthClass: 0,
    fifthClass: 0,
  },
};

const totalRankSlice = createSlice({
  name: "totalRank",
  initialState,
  reducers: {
    totalRankCalc(state, actions) {
      state.totalRank = actions.payload;
    },
    reset(state) {
      // state = initialState;
      Object.assign(state, initialState);
    },
  },
});

export const totalRankActions = totalRankSlice.actions;

export default totalRankSlice.reducer;
