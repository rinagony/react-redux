import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducers/index"; //import all reducers
import { Provider } from "react-redux"; //it helps connect our store to entire APP

const store = createStore(
  //add to store our reducers
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //show state in devtools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
