import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowLottoControl: false,
  isShowHistoryControl: false,
  isShowLottoResultModalControl: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isShowLottoControlHandler(state, action) {
      state.isShowLottoControl = action.payload;
    },
    istShowHistoryControlHandler(state, action) {
      state.isShowHistoryControl = action.payload;
    },
    isShowLottoResultModalControlHandler(state, action) {
      state.isShowLottoResultModalControl = action.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
