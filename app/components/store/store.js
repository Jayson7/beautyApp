import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducers/combine/combineReducers"; // Your root reducer

// Import composeWithDevTools from the correct package
import { composeWithDevTools } from "@reduxjs/toolkit";

// Use configureStore function correctly
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  enhancers: [composeWithDevTools()], // Enhance the store with DevTools
});

export default store;
