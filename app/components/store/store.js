import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/combine/combineReducers";

const store = createStore(
  rootReducer,
  // applyMiddleware(thunk)
  applyMiddleware(logger)
);

export default store;
