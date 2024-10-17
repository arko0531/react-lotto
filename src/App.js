import React from "react";
import Lotto from "./components/lotto";
import { Provider } from "react-redux";
import store from "./components/store/index";

function App() {
  return (
    <Provider store={store}>
      <Lotto />
    </Provider>
  );
}

export default App;
