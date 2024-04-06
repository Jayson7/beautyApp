// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "../authReducer";
import ResetReducer from "../resetReducer";
// Import other reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  reset: ResetReducer,
  // Add other reducers here
});

export default rootReducer;
