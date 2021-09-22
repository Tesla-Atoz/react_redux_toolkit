import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

//Concepts:
// we need to allow the components get access if they want to, so once subscribed then they can have store data.
// so, find, wrap the component we need to give access to store with Provider component and pass a prop store with value  the central store.
// <Provider store= {store}> <App/> </Provider> so that every child components of app and their compos can can access the store.

// this is all possible bcoz of react-redux which simplfies things for us.
