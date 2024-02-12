// store.js
import { createStore } from "redux";
import rootReducer from "../reducers/combine/combineReducers"; // Your root reducer

const store = createStore(rootReducer);

export default store;
