// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

//
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//
//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }, //expected property
  // reducer: counterSlice.reducer,
});

export default store;
//Concepts:

//we need to have central store. we create one using createStore from redux.
//as store needs reducer which can manipulate it.
// we need to have required Reducer.

//Reducer is like any JS function but recieves two arguments : previousState and action.
// we write logic to manipulate the store based on the action and state recieved and return a new State object.
//which will be captured by createStore and changes are reflected.

//we will export the store object.
