import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/combine/combineReducers";

let middleware = [];
// Add Redux Logger middleware only in development mode
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middleware = [...middleware, logger];
}

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
