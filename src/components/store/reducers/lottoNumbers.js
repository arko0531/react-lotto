import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputNumbers: {},
  resultNumbers: [],
  inputNumbersCheck: false, // 저장하기 버튼 눌렀는지?
};

const lottoNumbersSlice = createSlice({
  name: "lottoNumbers",
  initialState,
  reducers: {
    changeNumbersHandler(state, action) {
      const index = action.payload.index;
      const value = action.payload.value;

      state.inputNumbers = { ...state.inputNumbers, [index]: value };
    },
    submitInputNumbersHandler(state, action) {
      state.inputNumbers = action.payload;
    },
    submitInputNumberCheckHandler(state, action) {
      // 저장하기 버튼 눌렀는지?
      state.inputNumbersCheck = action.payload;
    },

    submitResultNumberHandler(state, action) {
      state.resultNumbers = action.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const lottoNumbersActions = lottoNumbersSlice.actions;

export default lottoNumbersSlice.reducer;
