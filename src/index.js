import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "./Mui.Custom.css";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
