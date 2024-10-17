import { configureStore } from "@reduxjs/toolkit";
import lottoNumbersReducer from "./reducers/lottoNumbers";
import uiReducer from "./reducers/ui";
import priceReducer from "./reducers/price";
import totalRankReducer from "./reducers/totalRank";

const store = configureStore({
  reducer: {
    lottoNumbers: lottoNumbersReducer,
    ui: uiReducer,
    price: priceReducer,
    totalRank: totalRankReducer,
  },
});

export default store;
